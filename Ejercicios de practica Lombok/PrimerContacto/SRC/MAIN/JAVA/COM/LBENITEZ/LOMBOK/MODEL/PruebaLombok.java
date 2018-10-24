package com.lbenitez.lombok.model;

import java.io.Serializable;

import lombok.Data;


@Data
public class PruebaLombok implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id;
	private String nombre;
	private String primerApellido;
	private String segundoApellido;
	private String mail;
	private String telefono;
	private boolean activo;
	
}
