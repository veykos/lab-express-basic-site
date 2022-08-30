const express = require('express')
const app = express();
const port = 3001;

app.use(express.static(__dirname + '/public'))
// this sends all the files in public to the user so that they're available for use
// example images, styles etc

app.get('/', (req,res) => {
    // this is the route for the homepage
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/about', (req,res) => {
    // this is the route for the about
    res.sendFile(__dirname + '/views/about.html')
})
app.get('/works', (req,res) => {
    // this is the route for the works
    res.sendFile(__dirname + '/views/works.html')
})

// now to start the server itself

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})