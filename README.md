# Restaurantes v1.0.0

Backend para restaurantes y platos

- [Usuarios](#usuarios)
	- [Inicio de Sesion](#inicio-de-sesion)
	- [Registro de usuario](#registro-de-usuario)
	


# Usuarios

## Inicio de Sesion



	POST /api/v1/users/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Credenciales			| Object			|  <p>Objeto Json</p>							|
| Credenciales.email			| String			|  <p>Email de usuario</p>							|
| Credenciales.password			| String			|  <p>Password de usuario</p>							|

## Registro de usuario



	POST /api/v1/users/singin


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Usuario			| Object			|  <p>Objeto Json</p>							|
| Usuario._id			| String			|  <p>Identificador de usuario, ignorar en registro</p>							|
| Usuario.nombre			| String			|  <p>Nombre del usuario</p>							|
| Usuario.email			| String			|  <p>Email del usuario</p>							|
| Usuario.celular			| String			|  <p>celular del usuario</p>							|
| Usuario.password			| String			|  <p>Password del usuario</p>							|


