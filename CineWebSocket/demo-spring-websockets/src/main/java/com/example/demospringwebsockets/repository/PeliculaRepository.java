package com.example.demospringwebsockets.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demospringwebsockets.entity.Pelicula;

public interface PeliculaRepository extends JpaRepository<Pelicula, Integer> {

	@Query(value="select * from pelicula where RESERVADA = false ", 
			nativeQuery=true)
    List<Pelicula> findPeliculas();
}

