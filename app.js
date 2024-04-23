const express = require("express")

const app = express()

const PORT = 3000;

app.post("/tino",(req, res) => {
 res.send("hello world!")
}); 

app.get("/tino",(req, res) => {
    res.send("hello tino!")
   }); 

app.put("/tino",(req, res) => {
    res.send("hello siya!")
   }); 

app.patch("/tino",(req, res) => {
    res.send("hello blessing!")
   }); 

app.delete("/tino",(req, res) => {
    res.send("hello ano!")
   }); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});