export default context =>
  context.user.then(user => {
    if (!user) {
      return Promise.reject('Unauthorized')
    }
    return user
  })
