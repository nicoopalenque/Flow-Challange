# TECO-FLOW-CHALLENGE
<p align="center">
    <img width="40%" height="auto" src="https://adrianalonso.es/wp-content/uploads/2014/09/nodejs.png" />
</p>

> Teco Flow - Challenge
---

## Pre-requisitos
<p align="center">
    <img src="https://img.shields.io/static/v1.svg?label=Node&message=v >= 14.18.0&labelColor=339933&color=757575&logoColor=FFFFFF&logo=node.js" alt="Node.js website"/>
</p>

---

## Contenido

- [Tecnologias usadas](#tecnologias-usadas)
- [Instalacion](#instalacion)
- [Documentacion](#documentacion)
- [Correr el proyecto](#correr-el-proyecto)
- [Docker](#docker)
- [Endpoints](#endpoints)
- [Test](#test)
- [Issues](#issues)
- [Author](#autor)

---

## Tecnologias usadas:
- docker
- express
- swagger
- axios
- eslint
- jest
- nodemon

---

⬅️ [Back](#contenido)

---

## Instalacion

### 1. Clone repo

```shell
$ git clone https://github.com/nicoopalenque/Flow-Challange.git
```

### 2. Ir al proyecto

```shell
$ cd Flow-Challenge
```

### 3. Instalar dependencias

```shell
$ npm install
```
### 4. Agregar variables de entorno

```shell
.env

NODE_ENV=development
HOST=localhost
PORT=3000
API_ID=02993bf258dc8960cb4974810beb2fdf
LANG=es
UNITS=metric
```

### 5. Correr el proyecto

```shell
$ npm run dev
```
---

⬅️ [Back](#contenido)

---

## Documentacion

> Swagger [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

⬅️ [Back](#contenido)

---

## Correr el proyecto

```bash
# run app
$ npm run dev

```
---
## Docker
```bash
# Correr app con docker
$ npm run docker:up

# Apagar app
$ npm run docker:down
```

---

⬅️ [Back](#contenido)

---

## Endpoints

```bash
# Ver estado de la app
GET /v1/status

# Devuelve los datos de ubicación city según ip-api.
GET /v1/location

# Devuelve los datos de ubicación actual según ip-api y el estado del tiempo actual.
GET /v1/current

# Devuelve los datos de ubicación actual según ciudad y el estado del tiempo actual.
GET /v1/current/{CityName}

# Devuelve los datos de ubicación actual según ip-api y el estado del tiempo a 5 días.
GET /v1/forecast

# Devuelve los datos de ubicación actual según ciudad y el estado del tiempo a 5 días.
GET /v1/forecast/{CityName}
```

### Collection para postman

```shell
$ cd postman
```

---

⬅️ [Back](#contenido)

---


## Test

```bash
# unit test
$ npm run test
```

```bash
# test coverage
$ npm run coverage
```
---

⬅️ [Back](#contenido)

---
## Issues

La url para obtener el clima a 5 dias no me permite consultarla con una suscripcion gratuita,
asi que coloque otra consulta que devuelve algo similar solo que en lugar de devolver a 5 dias
lo hace a 3 horas. Por lo que estuve viendo la logica seria basicamente la misma.

---

## Autor
- Rene Nicolas Palenque - [Linkedin](https://www.linkedin.com/in/rene-nicolas-palenque/)
