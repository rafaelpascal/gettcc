const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();
const db = require("./config/database")
const stateRoute = require('./controllers/state')

// Create State
db.authenticate()
.then(() => console.log('Connection has been established successfully.')) 
.catch(error => console.error('Unable to connect to the database:', error))

const Api_Key = process.env.API_KEY

// MIDDLEWARES
app.use(express.json())
app.use(cors())
// app.use('/api/v1/state', (req, res, next) => {
//   if (req.headers.api_key === Api_Key) {
//     next()
//   } else {
//     res.status(403).json({code: 'e101', message: 'You are not Authorized'})
//   }
// })

// ROUTES
app.use("/api/v1/state", stateRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
