

const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")



// create function to update the clock

const currentTime = () => {
    const date = new Date()

    let hrs = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()

    let ampm = "AM"

    if(hrs > 12){

        hrs = hrs - 12
        ampm = "PM"
    }

    hrs = hrs < 10 ? `0${hrs}` : hrs
    mins = mins < 10 ? `0${mins}` : mins
    secs = secs < 10 ? `0${secs}` : secs


    hourEl.innerText = hrs
    minuteEl.innerText = mins
    secondEl.innerText = secs
    ampmEl.innerText = ampm

    setTimeout(() => {

        currentTime()

    }, 1000)

}

currentTime()