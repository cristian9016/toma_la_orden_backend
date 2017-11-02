define({ "api": [
  {
    "type": "POST",
    "url": "/api/v1/users/login",
    "title": "Inicio de Sesion",
    "name": "Login",
    "group": "Usuarios",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Respuesta",
            "description": "<p>Objeto JSON</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Respuesta.success",
            "description": "<p>True sin las credenciales son correctas</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Respuesta.data",
            "description": "<p>Token de sesion de usuario</p>"
          }
        ]
      }
    },
    "filename": "src/routes/users.ts",
    "groupTitle": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Credenciales",
            "description": "<p>Objeto Json</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Credenciales.email",
            "description": "<p>Email de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Credenciales.password",
            "description": "<p>Password de usuario</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/users/singin",
    "title": "Registro de usuario",
    "name": "Signin",
    "group": "Usuarios",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Respuesta",
            "description": "<p>Objeto JSON</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Respuesta.success",
            "description": "<p>True si el usuario se registro correctamente</p>"
          }
        ]
      }
    },
    "filename": "src/routes/users.ts",
    "groupTitle": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Objeto Json</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario._id",
            "description": "<p>Identificador de usuario, ignorar en registro</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario.nombre",
            "description": "<p>Nombre del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario.email",
            "description": "<p>Email del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario.celular",
            "description": "<p>celular del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario.password",
            "description": "<p>Password del usuario</p>"
          }
        ]
      }
    }
  }
] });
