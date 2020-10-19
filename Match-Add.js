
let help = "In order to play this game, u have to choose a number initially which u've chosen b4 reading this. U'll find this no in the center of the box below. Then pick another no in the box u see below ranging from 0 - 9. The goal is to pick a no in the box, such that when it adds up with the no the cpu picked, it adds up to the no that u initially picked."

alert(help)

let userGameNo = +prompt("Enter a number between 0 and 15")
let noOptions = document.querySelectorAll(".no")
let userNo = document.querySelectorAll(".user-no")
document.querySelector(".instruction").addEventListener("click", () => alert(help))

let randomGameNo = Math.round(Math.random()* 9)
do {
				randomGameNo = Math.round(Math.random()* 9)
		} while(userGameNo == randomGameNo)


function cpuRandomNo (){
		let randomNo = Math.round(Math.random()* 9)
		return randomNo
}


(function loadUserGameNo(){
		document.querySelector(".mid").innerText = userGameNo
		document.querySelector(".cpuGameNo").innerText = randomGameNo
})()



let cpuObj = {
		gameNo: randomGameNo,
		score: 0,
		numPicked: ""
}

let userObj = {
		score: 0,
		numPicked: "",
		cpuPicked: cpuObj.numPicked,
		total: ""
}


let noClicked = noOptions.forEach(no => {
		no.addEventListener("click", function(e) {
		
		let cpuNo = document.querySelectorAll(".cpu-no")
let total = document.querySelectorAll(".total")
		let bothUsers = [...cpuNo, ...total]
		let noValue = e.currentTarget.innerText
		
		userObj.numPicked = noValue
		cpuObj.numPicked = cpuRandomNo()
		
		userNo.forEach(no => {
				no.innerText = userObj.numPicked
		})
		
		bothUsers.forEach(no => {
				no.innerText = "?"
		})
		
		setTimeout(function (){
				cpuNo.forEach(no => {
				no.innerText = cpuObj.numPicked
		})}, 500)
		
		setTimeout(function (){
				total.forEach(no => {
				userObj.total = +userObj.numPicked + +cpuObj.numPicked
				no.innerText = userObj.total
		})}, 1000)
		
		setTimeout(function (){
				if (userGameNo == userObj.total){
						let userScore = document.querySelectorAll(".user-score")
						userObj.score++						
         userScore.forEach(score => {
         		score.innerText = userObj.score
         })
						
						document.querySelector(".you-won").style.display = "block"
						
						setTimeout(function (){
								document.querySelector(".you-won").style.display = "none"
						}, 1500)
				}
				
				else if (randomGameNo == userObj.total){
						let cpuScore = document.querySelectorAll(".cpu-score")
						cpuObj.score++						
         cpuScore.forEach(score => {
         		score.innerText = cpuObj.score
         })
						
						document.querySelector(".cpu-won").style.display = "block"
						
						setTimeout(function (){
								document.querySelector(".cpu-won").style.display = "none"
						}, 1500)
				}
		}, 1300)
})})










