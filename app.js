const searchFor = require('./searchFor')
const express = require('express')
const app = express()
const port = 4000

app.get('/', function(req, res) {
  res.send('Home')
})

app.get('/api/imdb/search/:query', function(req, res) {
  const query = req.params.query
  searchFor.movies(query)
  .then(movies => {
    res.set('Content-type', 'application/json')
    res.json(movies)
  })
  .catch(error => {
    res.status(500).send(error.message)
  })
})

app.listen(port, () => {
  console.log('Listening on port: ' + port)
})
