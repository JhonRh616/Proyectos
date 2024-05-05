package com.example.demospringwebsockets.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.support.GenericMessage;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.example.demospringwebsockets.entity.ChatMessage;
import com.example.demospringwebsockets.entity.ChatMessageRepository;
import com.example.demospringwebsockets.entity.MessageDto;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class ChatHandler extends TextWebSocketHandler {
	
	@Autowired
	private final ChatMessageRepository chatMessageRepository;
	
    public ChatHandler(ChatMessageRepository chatMessageRepository) {
        this.chatMessageRepository = chatMessageRepository;
    }

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
    	
    	List<MessageDto> listadoMensajes = new ArrayList<>();
    	
    	//Imprimir el log en consola de lo que envió el usuario al servidor
    	System.out.println("Mensaje: ->"+message.getPayload()); 
    	
    	//Transformar el json recibido en un Dto en el servidor
    	ObjectMapper objectMapper = new ObjectMapper();
        MessageDto chatMessage = objectMapper.readValue(message.getPayload().toString(), MessageDto.class);
        
        //Transformar el dto recibido en una entidad para almacenarlo en base de datos
        ChatMessage chatMessageEntity = new ChatMessage(chatMessage.getMensaje());
        chatMessageRepository.save(chatMessageEntity);

        List<ChatMessage> recentMessages = chatMessageRepository.findTop10ByOrderByIdDesc();
        
        for (ChatMessage chatMessageHistory : recentMessages) {
        	listadoMensajes.add(new MessageDto("null", chatMessageHistory.getMessage()));
		}

        GenericMessage<List<MessageDto>> genericMessage = new GenericMessage<>(listadoMensajes);
        
        String payload = objectMapper.writeValueAsString(genericMessage.getPayload());
        WebSocketMessage<String> webSocketMessage = new TextMessage(payload);
        
        //Enviar a todos los usuarios conectados al websocket el mensaje más reciente
        for (WebSocketSession webSocketSession : sessions) {
            try {
            	webSocketSession.sendMessage(webSocketMessage);
            	System.out.println("Mensaje enviado por socket: "+webSocketMessage.getPayload());
            } catch (IOException e) {
                LOGGER.error(e.getMessage(), e);
            }
        }
    }

}
