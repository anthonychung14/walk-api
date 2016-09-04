export default callback => {
	// connect to a database if needed, the pass it to `callback`:
  var mockData = {
    name: "Anthony",
    steps: "10,000"
  }
  console.log("db callback called")
	callback(mockData);
}
