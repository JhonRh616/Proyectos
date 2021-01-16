//
// Este archivo ha sido generado por la arquitectura JavaTM para la implantación de la referencia de enlace (JAXB) XML v2.3.2 
// Visite <a href="https://javaee.github.io/jaxb-v2/">https://javaee.github.io/jaxb-v2/</a> 
// Todas las modificaciones realizadas en este archivo se perderán si se vuelve a compilar el esquema de origen. 
// Generado el: 2021.01.15 a las 09:05:08 PM COT 
//


package com.jharomeroh.clientes;

import javax.xml.bind.annotation.XmlRegistry;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.jharomeroh.clientes package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {


    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.jharomeroh.clientes
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GetClienteByIdRequest }
     * 
     */
    public GetClienteByIdRequest createGetClienteByIdRequest() {
        return new GetClienteByIdRequest();
    }

    /**
     * Create an instance of {@link GetClienteByIdResponse }
     * 
     */
    public GetClienteByIdResponse createGetClienteByIdResponse() {
        return new GetClienteByIdResponse();
    }

    /**
     * Create an instance of {@link Cliente }
     * 
     */
    public Cliente createCliente() {
        return new Cliente();
    }

    /**
     * Create an instance of {@link GetAllClienteRequest }
     * 
     */
    public GetAllClienteRequest createGetAllClienteRequest() {
        return new GetAllClienteRequest();
    }

    /**
     * Create an instance of {@link GetAllClienteResponse }
     * 
     */
    public GetAllClienteResponse createGetAllClienteResponse() {
        return new GetAllClienteResponse();
    }

    /**
     * Create an instance of {@link AddClienteRequest }
     * 
     */
    public AddClienteRequest createAddClienteRequest() {
        return new AddClienteRequest();
    }

    /**
     * Create an instance of {@link AddClienteResponse }
     * 
     */
    public AddClienteResponse createAddClienteResponse() {
        return new AddClienteResponse();
    }

    /**
     * Create an instance of {@link ServiceStatus }
     * 
     */
    public ServiceStatus createServiceStatus() {
        return new ServiceStatus();
    }

    /**
     * Create an instance of {@link UpdateClienteRequest }
     * 
     */
    public UpdateClienteRequest createUpdateClienteRequest() {
        return new UpdateClienteRequest();
    }

    /**
     * Create an instance of {@link UpdateClienteResponse }
     * 
     */
    public UpdateClienteResponse createUpdateClienteResponse() {
        return new UpdateClienteResponse();
    }

    /**
     * Create an instance of {@link DeleteClienteRequest }
     * 
     */
    public DeleteClienteRequest createDeleteClienteRequest() {
        return new DeleteClienteRequest();
    }

    /**
     * Create an instance of {@link DeleteClienteResponse }
     * 
     */
    public DeleteClienteResponse createDeleteClienteResponse() {
        return new DeleteClienteResponse();
    }

}
