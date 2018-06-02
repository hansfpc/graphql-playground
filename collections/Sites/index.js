import mongoose from 'mongoose'

const SiteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    authorId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Site', SiteSchema)
