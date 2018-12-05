import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import { token, master } from '../../services/passport'

export DatoMeteorologico, { schema } from './model'

const router = new Router()
const { fechaHora, lluvia, viento, humedad, temperatura, numEstMeteo } = schema.tree

/**
 * @api {post} /dato-meteorologicos Create dato meteorologico
 * @apiName CreateDatoMeteorologico
 * @apiGroup DatoMeteorologico
 * @apiParam fechaHora Dato meteorologico's fechaHora.
 * @apiParam lluvia Dato meteorologico's lluvia.
 * @apiParam viento Dato meteorologico's viento.
 * @apiParam humedad Dato meteorologico's humedad.
 * @apiParam temperatura Dato meteorologico's temperatura.
 * @apiParam numEstMeteo Dato meteorologico's numEstMeteo.
 * @apiSuccess {Object} datoMeteorologico Dato meteorologico's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dato meteorologico not found.
 */
router.post('/',
  token({ required: true, roles: ['station'] }),
  body({ fechaHora, lluvia, viento, humedad, temperatura, numEstMeteo }),
  create)

/**
 * @api {get} /dato-meteorologicos Retrieve dato meteorologicos
 * @apiName RetrieveDatoMeteorologicos
 * @apiGroup DatoMeteorologico
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of dato meteorologicos.
 * @apiSuccess {Object[]} rows List of dato meteorologicos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /dato-meteorologicos/:id Retrieve dato meteorologico
 * @apiName RetrieveDatoMeteorologico
 * @apiGroup DatoMeteorologico
 * @apiSuccess {Object} datoMeteorologico Dato meteorologico's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dato meteorologico not found.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /dato-meteorologicos/:id Update dato meteorologico
 * @apiName UpdateDatoMeteorologico
 * @apiGroup DatoMeteorologico
 * @apiParam fechaHora Dato meteorologico's fechaHora.
 * @apiParam lluvia Dato meteorologico's lluvia.
 * @apiParam viento Dato meteorologico's viento.
 * @apiParam humedad Dato meteorologico's humedad.
 * @apiParam temperatura Dato meteorologico's temperatura.
 * @apiParam numEstMeteo Dato meteorologico's numEstMeteo.
 * @apiSuccess {Object} datoMeteorologico Dato meteorologico's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dato meteorologico not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ fechaHora, lluvia, viento, humedad, temperatura, numEstMeteo }),
  update)

/**
 * @api {delete} /dato-meteorologicos/:id Delete dato meteorologico
 * @apiName DeleteDatoMeteorologico
 * @apiGroup DatoMeteorologico
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Dato meteorologico not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
