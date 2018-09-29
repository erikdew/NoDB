const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const controller = require('./controller')

const app = express();

app.use(bodyParser.json());
app.use(cors());

//endpoints
app.post('/api/getPictures', controller.read)
// app.post(URL, controller.create)
// app.delete(URL, controller.delete)


app.listen(3005, () => {
    console.log('listening on 3005')
})