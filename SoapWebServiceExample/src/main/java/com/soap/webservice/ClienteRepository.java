package com.soap.webservice;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface ClienteRepository extends CrudRepository<ClienteEntity, Integer>{
	
	public ClienteEntity findByNombre(String nombre);
	public ClienteEntity findByCiudad(String ciudad);
	public ClienteEntity findByTelefono(String telefono);
	public ClienteEntity findByCelular(String celular);
	public ClienteEntity findByCorreo(String correo);

}
