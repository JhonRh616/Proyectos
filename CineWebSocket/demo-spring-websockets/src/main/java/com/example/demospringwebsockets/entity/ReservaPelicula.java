package com.example.demospringwebsockets.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "RESERVA_PELICULA")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReservaPelicula {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_RESERVA")
    private Integer id;
    
    @Column(name = "NOMBRE_USUARIO")
    private String nombreUsuario;
    
    @Column(name = "ID_PELICULA")
    private Integer idPelicula;
    
    @Column(name = "ID_ASIENTO")
    private Integer idAsiento;
    
}

