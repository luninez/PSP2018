import mongoose, { Schema } from 'mongoose'

const datoMeteorologicoSchema = new Schema({
  fechaHora: {
    type: String
  },
  lluvia: {
    type: String
  },
  viento: {
    type: String
  },
  humedad: {
    type: String
  },
  temperatura: {
    type: String
  },
  numEstMeteo: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

datoMeteorologicoSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      fechaHora: this.fechaHora,
      lluvia: this.lluvia,
      viento: this.viento,
      humedad: this.humedad,
      temperatura: this.temperatura,
      numEstMeteo: this.numEstMeteo,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('DatoMeteorologico', datoMeteorologicoSchema)

export const schema = model.schema
export default model
