import express from 'express';

let app = express();

app.get('/', function (req, res) {
    res.send('это главная страница')
});

app.listen(8080, function () {
    console.log('Сервер запущен на порте http://localhost:8080/')
})