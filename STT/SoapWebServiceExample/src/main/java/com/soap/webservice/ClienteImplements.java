package com.soap.webservice;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ClienteImplements implements SoapServices{
	
	private ClienteRepository repository;
	
	public ClienteImplements() {
		
	}
	
	@Autowired
	public ClienteImplements(ClienteRepository repository) {
        this.repository = repository;
    }

	@Override
	public ClienteEntity getClienteById(int id) {
		return this.repository.findById(id).get();
	}

	@Override
	public ClienteEntity getClienteByNombre(String nombre) {
		return this.repository.findByNombre(nombre);
	}

	@Override
	public ClienteEntity getClienteByCiudad(String ciudad) {
		return this.repository.findByCiudad(ciudad);
	}

	@Override
	public ClienteEntity getClienteByTelefono(String telefono) {
		return this.repository.findByTelefono(telefono);
	}

	@Override
	public ClienteEntity getClienteByCelular(String celular) {
		return this.repository.findByCelular(celular);
	}

	@Override
	public ClienteEntity getClienteByCorreo(String correo) {
		return this.repository.findByCorreo(correo);
	}

	@Override
	public List<ClienteEntity> getAllClientesService() {
		List < ClienteEntity > list = new ArrayList < > ();
        repository.findAll().forEach(e -> list.add(e));
        return list;
	}

	@Override
	public ClienteEntity addCliente(ClienteEntity entity) {
		try {
            return this.repository.save(entity);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
	}

	@Override
	public boolean updateCliente(ClienteEntity entity) {
		try {
            this.repository.save(entity);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
	}

	@Override
	public boolean deleteClienteById(int id) {
		try {
            this.repository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
	}
	

}
