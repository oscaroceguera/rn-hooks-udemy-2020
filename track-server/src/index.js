require('./models/User')
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-bc7wl.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mogo instance')
})
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err)
})


app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, () => console.log('server running 3000'))

// 1) hacer el signup de usuario normal email y password
// 2) hacer lo del jwton al momento de siwgnup
// 3) aplicaro el Salting y hasing en el modelo que es el 'pre' y el metodo para comparar el password
// 4) Crear el login