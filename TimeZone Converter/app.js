const currentTime = document.getElementById('current-time')
//const timezone = document.getAttribute('data-timezone')
const convertedTime = document.getElementById('converted-time')
const countryList = document.getElementById('countries') 
const displayConvertedTime = document.getElementById('display-converted-time')
//convertedTime.innerHTML = countryList.value

function currentDate () {
    const currentDisplayTime = luxon.DateTime.now()
    currentTime.innerHTML = currentDisplayTime.toFormat('ccc: t:ss z')
}
setInterval(currentDate, 1000)

function getValueOfCountry() {
   convertedTime.innerHTML = countryList.value
}

function displayCurrentConvertedTime () {
    const displayCurrentConvertedTime = luxon.DateTime.now().setZone(countryList.value)
    displayConvertedTime.innerHTML = displayCurrentConvertedTime.toFormat('ccc:t: z')
}
setInterval(displayCurrentConvertedTime, 1000)