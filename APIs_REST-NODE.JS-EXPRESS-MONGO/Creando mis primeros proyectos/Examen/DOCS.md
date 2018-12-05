# examen v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [DatoMeteorologico](#datometeorologico)
	- [Create dato meteorologico](#create-dato-meteorologico)
	- [Delete dato meteorologico](#delete-dato-meteorologico)
	- [Retrieve dato meteorologico](#retrieve-dato-meteorologico)
	- [Retrieve dato meteorologicos](#retrieve-dato-meteorologicos)
	- [Update dato meteorologico](#update-dato-meteorologico)
	
- [Estacion](#estacion)
	- [Create estacion](#create-estacion)
	- [Delete estacion](#delete-estacion)
	- [Retrieve estacion](#retrieve-estacion)
	- [Retrieve estacions](#retrieve-estacions)
	- [Update estacion](#update-estacion)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# DatoMeteorologico

## Create dato meteorologico



	POST /dato-meteorologicos


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| fechaHora			| 			|  <p>Dato meteorologico's fechaHora.</p>							|
| lluvia			| 			|  <p>Dato meteorologico's lluvia.</p>							|
| viento			| 			|  <p>Dato meteorologico's viento.</p>							|
| humedad			| 			|  <p>Dato meteorologico's humedad.</p>							|
| temperatura			| 			|  <p>Dato meteorologico's temperatura.</p>							|
| numEstMeteo			| 			|  <p>Dato meteorologico's numEstMeteo.</p>							|

## Delete dato meteorologico



	DELETE /dato-meteorologicos/:id


## Retrieve dato meteorologico



	GET /dato-meteorologicos/:id


## Retrieve dato meteorologicos



	GET /dato-meteorologicos


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update dato meteorologico



	PUT /dato-meteorologicos/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| fechaHora			| 			|  <p>Dato meteorologico's fechaHora.</p>							|
| lluvia			| 			|  <p>Dato meteorologico's lluvia.</p>							|
| viento			| 			|  <p>Dato meteorologico's viento.</p>							|
| humedad			| 			|  <p>Dato meteorologico's humedad.</p>							|
| temperatura			| 			|  <p>Dato meteorologico's temperatura.</p>							|
| numEstMeteo			| 			|  <p>Dato meteorologico's numEstMeteo.</p>							|

# Estacion

## Create estacion



	POST /estacions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| nombre			| 			|  <p>Estacion's nombre.</p>							|
| latitud			| 			|  <p>Estacion's latitud.</p>							|
| longitud			| 			|  <p>Estacion's longitud.</p>							|
| caracteristicas			| 			|  <p>Estacion's caracteristicas.</p>							|
| ubicacion			| 			|  <p>Estacion's ubicacion.</p>							|

## Delete estacion



	DELETE /estacions/:id


## Retrieve estacion



	GET /estacions/:id


## Retrieve estacions



	GET /estacions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update estacion



	PUT /estacions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| nombre			| 			|  <p>Estacion's nombre.</p>							|
| latitud			| 			|  <p>Estacion's latitud.</p>							|
| longitud			| 			|  <p>Estacion's longitud.</p>							|
| caracteristicas			| 			|  <p>Estacion's caracteristicas.</p>							|
| ubicacion			| 			|  <p>Estacion's ubicacion.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


