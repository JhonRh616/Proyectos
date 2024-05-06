package com.example.demospringwebsockets.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demospringwebsockets.entity.Asientos;

public interface AsientoRepository extends JpaRepository<Asientos, Integer> {

	@Query(value="select * from asiento where ID_PELICULA = :idPelicula ", 
			nativeQuery=true)
    List<Asientos> findFreeSeats(Integer idPelicula);
	
	Asientos findByNumeroAsientoAndIdPelicula(Integer numeroAsiento, Integer idPelicula);
	List<Asientos> findByIdPelicula(Integer idPelicula);
}

