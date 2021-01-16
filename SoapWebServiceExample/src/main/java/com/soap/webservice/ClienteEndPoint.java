package com.soap.webservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import com.jharomeroh.clientes.AddClienteRequest;
import com.jharomeroh.clientes.AddClienteResponse;
import com.jharomeroh.clientes.Cliente;
import com.jharomeroh.clientes.DeleteClienteRequest;
import com.jharomeroh.clientes.DeleteClienteResponse;
import com.jharomeroh.clientes.GetAllClienteRequest;
import com.jharomeroh.clientes.GetAllClienteResponse;
import com.jharomeroh.clientes.GetClienteByIdRequest;
import com.jharomeroh.clientes.GetClienteByIdResponse;
import com.jharomeroh.clientes.ServiceStatus;
import com.jharomeroh.clientes.UpdateClienteRequest;
import com.jharomeroh.clientes.UpdateClienteResponse;

@Endpoint
public class ClienteEndPoint {
	public static final String NAMESPACE_URI = "http://www.jharomeroh.com/clientes";

	private SoapServices service;

	public ClienteEndPoint() {

	}

	@Autowired
	public ClienteEndPoint(SoapServices service) {
		this.service = service;
	}

	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "getClienteByIdRequest")
	@ResponsePayload
	public GetClienteByIdResponse getClienteById(@RequestPayload GetClienteByIdRequest request) {
		GetClienteByIdResponse response = new GetClienteByIdResponse();
		ClienteEntity clienteEntity  = service.getClienteById(request.getId());
		Cliente cliente = new Cliente();
		BeanUtils.copyProperties(clienteEntity, cliente);
		response.setCliente(cliente);
		return response;

	}

	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "getAllClienteRequest")
	@ResponsePayload
	public GetAllClienteResponse getAllCliente(@RequestPayload GetAllClienteRequest request) {
		GetAllClienteResponse response = new GetAllClienteResponse();
		List<Cliente> clienteList = new ArrayList<Cliente>();
		List<ClienteEntity> clienteListEntity = service.getAllClientesService();
		for (ClienteEntity entity : clienteListEntity) {
			Cliente cliente = new Cliente();
			BeanUtils.copyProperties(entity, cliente);
			clienteList.add(cliente);
		}
		response.getCliente().addAll(clienteList);

		return response;

	}

	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "addClienteRequest")
	@ResponsePayload
	public AddClienteResponse addCliente(@RequestPayload AddClienteRequest request) {
		AddClienteResponse response = new AddClienteResponse();
		Cliente newCliente = new Cliente();
		ServiceStatus serviceStatus = new ServiceStatus();

		ClienteEntity newClienteEntity = new ClienteEntity(request.getNombre(), request.getCiudad(),request.getTelefono(),request.getCelular(),request.getCorreo());
		ClienteEntity savedClienteEntity = service.addCliente(newClienteEntity);
		System.out.println();

		if (savedClienteEntity == null) {
			serviceStatus.setStatusCode("500");
			serviceStatus.setMessage("Exception while adding Entity");
		} else {

			BeanUtils.copyProperties(savedClienteEntity, newCliente);
			serviceStatus.setStatusCode("201");
			serviceStatus.setMessage("Content Added Successfully");
		}

		response.setCliente(newCliente);
		response.setServiceStatus(serviceStatus);
		return response;

	}

	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "updateClienteRequest")
	@ResponsePayload
	public UpdateClienteResponse updateMovie(@RequestPayload UpdateClienteRequest request) {
		UpdateClienteResponse response = new UpdateClienteResponse();
		ServiceStatus serviceStatus = new ServiceStatus();
		// 1. Find if movie available
		ClienteEntity clienteFromDB = service.getClienteById(request.getId());
		
		if(clienteFromDB == null) {
			serviceStatus.setStatusCode("404");
			serviceStatus.setMessage("Cliente = " + request.getId() + " 404");
		}else {
			
			// 2. Get updated movie information from the request
			clienteFromDB.setNombre(request.getNombre());
			clienteFromDB.setCiudad(request.getCiudad());
			clienteFromDB.setTelefono(request.getTelefono());
			clienteFromDB.setCelular(request.getCelular());
			clienteFromDB.setCorreo(request.getCorreo());
			// 3. update the movie in database
			
			boolean flag = service.updateCliente(clienteFromDB);
			
			if(flag == false) {
				serviceStatus.setStatusCode("500");
				serviceStatus.setMessage("Exception while updating Entity=" + request.getId());;
			}else {
				serviceStatus.setStatusCode("200");
				serviceStatus.setMessage("Content updated Successfully");
			}
			
			
		}
		
		response.setServiceStatus(serviceStatus);
		return response;
	}

	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "deleteClienteRequest")
	@ResponsePayload
	public DeleteClienteResponse deleteMovie(@RequestPayload DeleteClienteRequest request) {
		DeleteClienteResponse response = new DeleteClienteResponse();
		ServiceStatus serviceStatus = new ServiceStatus();

		boolean flag = service.deleteClienteById(request.getId());

		if (flag == false) {
			serviceStatus.setStatusCode("500");
			serviceStatus.setMessage("Exception while deleting Entity id=" + request.getId());
		} else {
			serviceStatus.setStatusCode("200");
			serviceStatus.setMessage("Content Deleted Successfully");
		}

		response.setServiceStatus(serviceStatus);
		return response;
	}

}
