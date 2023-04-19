package com.ST.T.servicios.Modelo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Clientes")
public class ServiciosRest {
	
	//Variables
	@Autowired
	private ClienteDao clienteDao;
	
	
	//Métodos-Listar Todo
	@GetMapping
	public ResponseEntity<List<Cliente>> getCliente() {
		List<Cliente> clientes=clienteDao.findAll();
		return ResponseEntity.ok(clientes);
	}
	
	//Métodos-Listar Por Id
	@RequestMapping(value="{id}")
	public ResponseEntity<Cliente> findById(@PathVariable("id") int id) {
		Optional<Cliente> opcionalCliente=clienteDao.findById(id);
		if (opcionalCliente.isPresent()) {
			return ResponseEntity.ok(opcionalCliente.get());
		}
		else {
			return ResponseEntity.noContent().build();
		}
	}
	
	
	//Métodos Busqueda avanzada
	@PostMapping(value="{search}")
	public ResponseEntity<List<Cliente>> findAdvancedCliente(@RequestBody Cliente cliente) {
			List<Cliente> clienteEncontrado=clienteDao.findByNameAndCity(cliente.getNombre(),cliente.getCiudad());
			return ResponseEntity.ok(clienteEncontrado);	
	}
	
	//Métodos Busqeuda avanzada gmail
	@PostMapping(value="/search/{gmail}")
	public ResponseEntity<List<Cliente>> findByCityAndGmailAdvanced() {
			List<Cliente> clienteEncontrado=clienteDao.findByCityAndGmail();
			return ResponseEntity.ok(clienteEncontrado);				
	}
	
	
	//Métodos-Crear Nuevo
	@PostMapping
	public ResponseEntity<Cliente> createCliente(@RequestBody Cliente cliente) {
			Cliente nuevoCliente=clienteDao.save(cliente);
			return ResponseEntity.ok(nuevoCliente);			
	}
	
	//Métodos-Borrar
	@DeleteMapping(value="{id}")
	public ResponseEntity<Void> deleteCliente(@PathVariable("id") int id) {
		clienteDao.deleteById(id);
			return ResponseEntity.ok(null);
		
	}
	
	//Métodos-Actualizar
	@PutMapping
	public ResponseEntity<Cliente> updateCliente(@RequestBody Cliente cliente) {
		Optional<Cliente> opcionalCliente=clienteDao.findById(cliente.getId());
		if (opcionalCliente.isPresent()) {
			Cliente clienteActualizado=opcionalCliente.get();
			clienteActualizado.setNombre(cliente.getNombre());
			clienteActualizado.setCiudad(cliente.getCiudad());
			clienteActualizado.setTelefono(cliente.getTelefono());
			clienteActualizado.setCelular(cliente.getCelular());
			clienteActualizado.setCorreo(cliente.getCorreo());
			clienteDao.save(clienteActualizado);
			return ResponseEntity.ok(clienteActualizado);
		}
		else {
			return ResponseEntity.noContent().build();
		}		
	}
	
	
	

}
