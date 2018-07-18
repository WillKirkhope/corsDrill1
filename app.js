const express = require('express')
const cors = require('cors')
const data = require('./api/cohorts')
const port = parseInt(process.env.PORT || 8080)

//This stuff is tell the app what it needs to run properly, as in required!

const app = express()
app.use(cors())
//using cors as like an api helper to help you fetch & get
function getCohortById(data, id){
  for (let i = 0; i < data.length; i++) {
    if(data[i].id == id){
      return data[i]
    }
  }
  return null
}

app.get('/', function(request, response){
  response.json({
    data
  })
})
//getting data, turning it into response.json
//the / is getting the root url, which has been defined by data ^^^ up top

app.get('/:id', function (request, response){
  var cohort = getCohortById(data, request.params.id)
  if(!cohort){
    response.status(404).json({
      error: {
        message: 'No cohort found!'
      }
    })
  }else{
    response.json({
      data: cohort
    })
  }
})
//"/:id" is saying root and then any number listed as id
//request, response because its an api fetch
//response.status is declaring that if there is a 404, run this custom message!
app.listen(port, () => console.log('Listening on http://localhost:8080'))
