import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'hello world' })
})

console.log('oi')

app.listen(3333)