package com.example.demospringwebsockets.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demospringwebsockets.entity.Mensaje;

public interface MensajeRepository extends JpaRepository<Mensaje, Integer> {
	
	List<Mensaje> findTop10ByOrderByIdMensajeDesc();

}

