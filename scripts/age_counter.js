const marceBirth = '07/13/1995'
const apiQuotesURL = 'https://zenquotes.io/api/quotes/'
var data

function ageCalc() {
  var minutes = 1000 * 60
  var hours = minutes * 60
  var days = hours * 24
  var years = days * 365.25

  d = new Date(marceBirth)
  dt = d.getDate()
  mn = d.getMonth()
  mn++
  yy = d.getFullYear()
  var date1 = new Date(mn + '/' + dt + '/' + yy)

  var date2 = new Date()
  var timeDiff = date2.getTime() - date1.getTime()
  var age = timeDiff / years
  age = parseFloat(Math.round(age * 100000000000) / 100000000000).toFixed(11)

  document.getElementById('age').innerHTML = age

  setTimeout('ageCalc()', 50)
}

async function getapi(url) {
  const response = await fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
  data = await response.json()
  console.log(data)
}

window.onload = (event) => {
  ageCalc()
  getapi(apiQuotesURL)
}
