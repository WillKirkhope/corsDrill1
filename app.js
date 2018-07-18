const express = require('express')
const cors = require('cors')
const data = require('./api/cohorts')
const port = parseInt(process.env.PORT || 8080)

//This stuff is tell the app what it needs to run properly, as in required!

const app = express()
app.use(cors())
//using cors as like an api helper to help you fetch & get

app.get('/', function(request, response){
  response.json({
    data
  })
})
//getting data, turning it into response.json
//the / is getting the root url, which has been defined by data ^^^ up top

app.listen(port, () => console.log('Listening on http://localhost:8080'))
