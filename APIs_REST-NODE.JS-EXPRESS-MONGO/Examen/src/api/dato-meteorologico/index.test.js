import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { DatoMeteorologico } from '.'

const app = () => express(apiRoot, routes)

let datoMeteorologico

beforeEach(async () => {
  datoMeteorologico = await DatoMeteorologico.create({})
})

test('POST /dato-meteorologicos 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ fechaHora: 'test', lluvia: 'test', viento: 'test', humedad: 'test', temperatura: 'test', numEstMeteo: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.fechaHora).toEqual('test')
  expect(body.lluvia).toEqual('test')
  expect(body.viento).toEqual('test')
  expect(body.humedad).toEqual('test')
  expect(body.temperatura).toEqual('test')
  expect(body.numEstMeteo).toEqual('test')
})

test('GET /dato-meteorologicos 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /dato-meteorologicos/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${datoMeteorologico.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(datoMeteorologico.id)
})

test('GET /dato-meteorologicos/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /dato-meteorologicos/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${datoMeteorologico.id}`)
    .send({ fechaHora: 'test', lluvia: 'test', viento: 'test', humedad: 'test', temperatura: 'test', numEstMeteo: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(datoMeteorologico.id)
  expect(body.fechaHora).toEqual('test')
  expect(body.lluvia).toEqual('test')
  expect(body.viento).toEqual('test')
  expect(body.humedad).toEqual('test')
  expect(body.temperatura).toEqual('test')
  expect(body.numEstMeteo).toEqual('test')
})

test('PUT /dato-meteorologicos/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ fechaHora: 'test', lluvia: 'test', viento: 'test', humedad: 'test', temperatura: 'test', numEstMeteo: 'test' })
  expect(status).toBe(404)
})

test('DELETE /dato-meteorologicos/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${datoMeteorologico.id}`)
  expect(status).toBe(204)
})

test('DELETE /dato-meteorologicos/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
