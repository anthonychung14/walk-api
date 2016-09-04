export default ({ db }) => {
	return function(req, res, next) {
    console.log("I am the middleware")
    next()
  }
	// add middleware here  
}
