const express = require('express');
const app = express();
const port = 5000;

const authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/', (req, res) => {
    res.send("Authors API")
})

app.get(`/authors/:id`, (req, res) => {
    const { id } = req.params
    const author = authors[Number(id) - 1]
    console.log(id + 1)
    ///:id est une string, donc il faut transformer l'id string en nombre 
    res.send(`${author.name}, ${author.nationality}`)  
}) 

app.get(`/authors/:id/books`, (req, res) => {
    const { id } = req.params
    const author = authors[Number(id) - 1]
    res.send(author.books.toString())  
}) 

app.get(`/json/authors/:id`, (req, res) => {
    const { id } = req.params
    const author = authors[Number(id) - 1]
    res.send({
        name: author.name,
        nationality: author.nationality,
    })     
}) 

app.get(`/json/authors/:id/books`, (req, res) => {
    const { id } = req.params
    const author = authors[Number(id) - 1]
    res.send({
        books: author.books,
    })     
}) 

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})