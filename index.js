// lib
const prayerTimes = require('./PrayTimes.js')

// express
const express = require('express')
const app = express()

// misc
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/today', async (req, res) => {
  const latitude = req.query.latitude
  const longitude = req.query.longitude
  const timezone = req.query.timezone
  const method = req.query.method

  prayerTimes.setMethod(method);
  res.send(prayerTimes.getTimes(new Date(), [latitude, longitude], timezone)).end()
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`muslim-prayer-time-json-api listening on ${port}`)
})
