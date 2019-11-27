var money = 0;
function validateBet(){
	var bet = getMoney();
	if (bet == null || bet <= 0){
		alert("Error: Betting value must be more than $0.00")
		return false;
	}
	else{
		gameLogic();
		return true;
	}
}
function rollDice() {
		return Math.floor(Math.random() * 6) + 1;
}

function getMoney(){
	
	var m = document.forms["game"]["bet"].value;
	return m;
}

function gameLogic(){
	var dice1 = rollDice();
	var dice2 = rollDice();
	var sum = 0;
	var winRollCount = 0;
	var winAmount = 0;
	var rolls = 0;
	var highestCount = 0;
	var highestAmount = 0;
	money = getMoney();
	var startMoney = money;



	if (money > 0){
		flag = true;
	}
	while (money > 0){
		// roll dice
		sum = dice1 + dice2;
		// counting dice rolls
		rolls += 1;
		// checking the sum pair of dice equal to 7
		if (sum == 7){
			money += 4;
			winRollCount += 1;
			winAmount += 4;
		}
		// sum pair of dice not equal to 7
		else{
			money -= 1;
			if (highestCount < winRollCount ){
				highestCount = winRollCount;
				highestAmount = winAmount;
			}

			winRollCount = 0;
			winAmount = 0;
		}
		// reset sum amount
		sum = 0;
	}
	alert("highestAmount is "+ money)
	// somewhat working
	document.getElementById("dice").innerHTML=rollDice();
	document.getElementById("startingBet").innerHTML=getMoney();
	document.getElementById("totalRolls").innerHTML=rolls;
	document.getElementById("highestWinAmount").innerHTML=highestAmount;
	document.getElementById("highestWinCount").innerHTML=highestCount;
}

// somewhat working
//document.getElementById("dice").innerHTML=rollDice();
//document.getElementById("startingBet").innerHTML=getMoney();
//document.getElementById("totalRolls").innerHTML=rolls;
//document.getElementById("highestWinAmount").innerHTML=highestAmount;
//document.getElementById("highestWinCount").innerHTML=highestCount;