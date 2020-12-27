const express = require("express")
const path = require("path")
const app = express()

app.set("port", process.env.PORT || 8080)
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(app.get("port"), () => {
	console.log("Application running on port " + app.get('port'))
})
