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
@Table(name = "PELICULA")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Pelicula {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PELICULA")
    private Integer id;
    
    @Column(name = "NOMBRE_PELICULA")
    private String nombrePelicula;
    
    @Column(name = "ASSET_PELICULA")
    private String assetPelicula;
    
    @Column(name = "RESERVADA")
    private Boolean reservada;
    
}

