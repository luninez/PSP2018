import { DatoMeteorologico } from '.'

let datoMeteorologico

beforeEach(async () => {
  datoMeteorologico = await DatoMeteorologico.create({ fechaHora: 'test', lluvia: 'test', viento: 'test', humedad: 'test', temperatura: 'test', numEstMeteo: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = datoMeteorologico.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(datoMeteorologico.id)
    expect(view.fechaHora).toBe(datoMeteorologico.fechaHora)
    expect(view.lluvia).toBe(datoMeteorologico.lluvia)
    expect(view.viento).toBe(datoMeteorologico.viento)
    expect(view.humedad).toBe(datoMeteorologico.humedad)
    expect(view.temperatura).toBe(datoMeteorologico.temperatura)
    expect(view.numEstMeteo).toBe(datoMeteorologico.numEstMeteo)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = datoMeteorologico.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(datoMeteorologico.id)
    expect(view.fechaHora).toBe(datoMeteorologico.fechaHora)
    expect(view.lluvia).toBe(datoMeteorologico.lluvia)
    expect(view.viento).toBe(datoMeteorologico.viento)
    expect(view.humedad).toBe(datoMeteorologico.humedad)
    expect(view.temperatura).toBe(datoMeteorologico.temperatura)
    expect(view.numEstMeteo).toBe(datoMeteorologico.numEstMeteo)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
