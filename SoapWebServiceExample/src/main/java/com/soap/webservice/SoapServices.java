package com.soap.webservice;

import java.util.List;

public interface SoapServices {
	
	public ClienteEntity getClienteById(int id);
	public ClienteEntity getClienteByNombre(String nombre);
	public ClienteEntity getClienteByCiudad(String ciudad);
	public ClienteEntity getClienteByTelefono(String telefono);
	public ClienteEntity getClienteByCelular(String celular);
	public ClienteEntity getClienteByCorreo(String correo);
	public List<ClienteEntity> getAllClientesService();
	public ClienteEntity addCliente(ClienteEntity entity);
	public boolean updateCliente(ClienteEntity entity);
	public boolean deleteClienteById(int id);

}
