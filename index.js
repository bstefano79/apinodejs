const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


let books = [];

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;


    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/books', (req, res) => {

    res.send('Lista dei libri');
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));