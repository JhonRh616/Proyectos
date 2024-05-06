package com.example.demospringwebsockets.service;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.support.GenericMessage;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.example.demospringwebsockets.entity.Asientos;
import com.example.demospringwebsockets.entity.ListadoDto;
import com.example.demospringwebsockets.entity.Mensaje;
import com.example.demospringwebsockets.entity.Pelicula;
import com.example.demospringwebsockets.entity.ReservaPelicula;
import com.example.demospringwebsockets.repository.AsientoRepository;
import com.example.demospringwebsockets.repository.MensajeRepository;
import com.example.demospringwebsockets.repository.PeliculaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class ChatHandler extends TextWebSocketHandler {
	
	@Autowired
	private PeliculaRepository peliculaRepository;
	@Autowired
	private AsientoRepository asientoRepository;
	@Autowired
	private MensajeRepository mensajeRepository;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ChatHandler.class);
	
	private final CopyOnWriteArrayList<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
    	//Añadir al arreglo de usuarios en la sesión de websockets el usuario que se acaba de conectar
        sessions.add(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
    	//Eliminar del arreglo de usuarios en la sesión de websockets el usuario que se acaba de desconectar
        sessions.remove(session);
    }
    
    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
    	
    	//Imprimir el log en consola de lo que envió el usuario al servidor
    	Timestamp fechai = new Timestamp(System.currentTimeMillis());
    	System.out.println("--------------------------------------------");
    	System.out.println("Tiempo inicial: ->"+fechai.toString()); 
    	System.out.println();
    	System.out.println("Mensaje: ->"+message.getPayload()); 
    	System.out.println(); 
    	
    	//Transformar el json recibido en un Dto en el servidor
    	ObjectMapper objectMapper = new ObjectMapper();
    	ReservaPelicula peliculaReservada = objectMapper.readValue(message.getPayload().toString(), ReservaPelicula.class);
        
        //Transformar el dto recibido en una entidad para almacenarlo en base de datos
    	Asientos asiento = asientoRepository.findByNumeroAsientoAndIdPelicula(peliculaReservada.getIdAsiento(),
    			peliculaReservada.getIdPelicula());
    	asiento.setAsientoReservado(true);
    	
    	asientoRepository.save(asiento);
    	
    	List<Asientos> listaAsientosDisponibles = asientoRepository.findByIdPelicula(peliculaReservada.getIdPelicula());
    	
		Optional<Pelicula> pelicula = peliculaRepository.findById(peliculaReservada.getIdPelicula());
    	
    	Mensaje mensaje = new Mensaje(null, "El usuario " + peliculaReservada.getNombreUsuario() + " ha reservado un asiento "
    			+ "para la película "+pelicula.get().getNombrePelicula());
    	
    	mensajeRepository.save(mensaje);
    	
    	List<Mensaje> listadoMensajes = mensajeRepository.findTop10ByOrderByIdMensajeDesc();
    	
    	ListadoDto res = new ListadoDto(peliculaReservada.getIdPelicula(), listaAsientosDisponibles, listadoMensajes);
    	
        GenericMessage<ListadoDto> genericMessage = new GenericMessage<>(res);
        
        String payload = objectMapper.writeValueAsString(genericMessage.getPayload());
        WebSocketMessage<String> webSocketMessage = new TextMessage(payload);
        
        //Enviar a todos los usuarios conectados al websocket el mensaje más reciente
        System.out.println("Mensaje enviado por socket: "+webSocketMessage.getPayload());
        System.out.println();
        Timestamp fechaf = new Timestamp(System.currentTimeMillis());
    	System.out.println("Tiempo final: ->"+fechaf.toString()); 
    	System.out.println("--------------------------------------------");
        for (WebSocketSession webSocketSession : sessions) {
            try {
            	webSocketSession.sendMessage(webSocketMessage);
            } catch (IOException e) {
                LOGGER.error(e.getMessage(), e);
            }
        }
    }

}
