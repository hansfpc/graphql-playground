import mongoose from 'mongoose'
// import bcrypt from 'bcrypt-nodejs'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      //required: true
    },
    role: {
      type: String,
      enum: ['READER', 'CREATOR', 'EDITOR'],
      default: 'READER',
    },
  },
  {
    timestamps: true,
  }
)

/* UserSchema.pre('save', function(next) {
  const user = this
  const SALT_FACTOR = 5

  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err)
      }

      user.password = hash
      next()
    })
  })
}) */

/* UserSchema.methods.comparePassword = function(passwordAttempt, cb) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if (err) {
      return cb(err)
    } else {
      cb(null, isMatch)
    }
  })
} */

export default mongoose.model('User', UserSchema)
