package com.ST.T.servicios.Modelo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ClienteDao extends JpaRepository<Cliente, Integer>{
	
	@Query(value="select * from cliente where nombre=:nombre and ciudad=:ciudad", nativeQuery = true)
	@Transactional
	List<Cliente> findByNameAndCity(@Param("nombre") String nombre,@Param("ciudad") String ciudad);
	
	@Query(value="select * from cliente where ciudad='Bogota' and correo like'%gmail.com%'", nativeQuery = true)
	@Transactional
	List<Cliente> findByCityAndGmail();
	
}
