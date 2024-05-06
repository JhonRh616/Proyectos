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
@Table(name = "ASIENTO")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Asientos {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ASIENTO")
    private Integer id;
    
    @Column(name = "NUMERO_ASIENTO")
    private Integer numeroAsiento;
    
    @Column(name = "ID_PELICULA")
    private Integer idPelicula;
    
    @Column(name = "ASIENTO_RESERVADO")
    private Boolean asientoReservado;
    
}

