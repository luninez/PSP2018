import { success, notFound } from '../../services/response/'
import { DatoMeteorologico } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DatoMeteorologico.create(body)
    .then((datoMeteorologico) => datoMeteorologico.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  DatoMeteorologico.count(query)
    .then(count => DatoMeteorologico.find(query, select, cursor)
      .then((datoMeteorologicos) => ({
        count,
        rows: datoMeteorologicos.map((datoMeteorologico) => datoMeteorologico.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DatoMeteorologico.findById(params.id)
    .then(notFound(res))
    .then((datoMeteorologico) => datoMeteorologico ? datoMeteorologico.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DatoMeteorologico.findById(params.id)
    .then(notFound(res))
    .then((datoMeteorologico) => datoMeteorologico ? Object.assign(datoMeteorologico, body).save() : null)
    .then((datoMeteorologico) => datoMeteorologico ? datoMeteorologico.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DatoMeteorologico.findById(params.id)
    .then(notFound(res))
    .then((datoMeteorologico) => datoMeteorologico ? datoMeteorologico.remove() : null)
    .then(success(res, 204))
    .catch(next)
