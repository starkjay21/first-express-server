const PORT = 3000
const express = require('express')
const app = express();

app.get("/", function(req, res){
    res.send("Hellow Jayesh")
})

app.get("/about", function(req, res){
    res.send("<ul><li>Movies</li><li>FIFA</li><li>Football</li></ul>")
})

app.get("/hobbies", function(req, res){
    res.send({
        "name": "Jayesh",
        "age": 20,
        "profession": "Software Developer"
    })
})
app.listen(PORT, () =>{
    console.log(`Starting a server at https://localhost:${PORT}`);
})