package com.example.demospringwebsockets.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demospringwebsockets.entity.Asientos;
import com.example.demospringwebsockets.entity.Mensaje;
import com.example.demospringwebsockets.entity.Pelicula;
import com.example.demospringwebsockets.repository.AsientoRepository;
import com.example.demospringwebsockets.repository.MensajeRepository;
import com.example.demospringwebsockets.repository.PeliculaRepository;

import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class MainController {

	@Autowired
    private AsientoRepository asientoRepository;
	@Autowired
    private PeliculaRepository peliculaRepository;
	@Autowired
    private MensajeRepository mensajeRepository;

    @GetMapping("/api/getAsientos/{idPelicula}")
    public List<Asientos> getAsientos(@PathVariable Integer idPelicula) {   	
        return asientoRepository.findFreeSeats(idPelicula);
    }
    
    @GetMapping("/api/getPeliculas")
    public List<Pelicula> getPeliculas() {   	
        return peliculaRepository.findPeliculas();
    }
    
    @GetMapping("/api/getMensajes")
    public List<Mensaje> getMensajes() {   	
        return mensajeRepository.findTop10ByOrderByIdMensajeDesc();
    }
}
