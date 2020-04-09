

    setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', (rotationRatio * 360))
}

setClock()





//         secondHand.style.transform = 'rotate(' + (sec * 360) + 'deg)'
//         minuteHand.style.transform = 'rotate(' + (min * 360) + 'deg)'
//         hourHand.style.transform = 'rotate(' + (hour * 360) + 'deg)'
// }

