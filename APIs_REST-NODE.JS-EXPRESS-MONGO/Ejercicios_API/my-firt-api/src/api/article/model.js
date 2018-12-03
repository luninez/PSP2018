import mongoose, { Schema } from 'mongoose'

const articleSchema = new Schema({
  comma separated: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

articleSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      comma separated: this.comma separated,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Article', articleSchema)

export const schema = model.schema
export default model
