let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let currentHomeScore = 12
let currentGuestScore = 5
    
    function addOneHome() {
       currentHomeScore += 1
       homeScore.textContent = currentHomeScore
       console.log(currentHomeScore)
    }

    function addTwoHome() {
        currentHomeScore += 2
        homeScore.textContent = currentHomeScore
        console.log(currentHomeScore)
    }

    function addThreeHome() {
        currentHomeScore += 3
        homeScore.textContent = currentHomeScore
        console.log(currentHomeScore)
    }
    
    function addOneGuest() {
        currentGuestScore += 1
        guestScore.textContent = currentGuestScore
        console.log(currentGuestScore)
    }

    function addTwoGuest() {
        currentGuestScore += 2
        guestScore.textContent = currentGuestScore
        console.log(currentGuestScore)
    }
    
    function addThreeGuest() {
        currentGuestScore += 3
        guestScore.textContent = currentGuestScore
        console.log(currentGuestScore)
    }