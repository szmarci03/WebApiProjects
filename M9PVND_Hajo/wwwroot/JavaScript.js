var hotlist = [];
var questionsInHotList = 3;
var displayedQuestion = 0;
var numberOfQuestions;
var nextQuestion = 1;

function init() {
	for (let i = 0; i < questionsInHotList; i++) {
		hotlist[i] = {
			question: {},
			goodanswers: 0
		}
	}

	for (let i = 0; i < questionsInHotList; i++) {
		kérdésBetöltés(nextQuestion, i);
		nextQuestion++;
	}

	fetch(`questions/count`)
		.then(result => result.text)
		.then(n => {
			numberOfQuestions = parseInt(n)
		})

}

function kérdésBetöltés(questionnumber, destination) {
	fetch(`/questions/${questionnumber}`)
		.then(result => {
			if (!result.ok) {
				console.error(`Hibás letöltés: ${result.status}`);
				return null;
			}

			return result.json();
		})
		.then(data => {
			hotlist[destination].question = data;
			hotlist[destination].goodanswers = 0;
			console.log(`A ${questionnumber}. kérdés letöltődött a hotlist ${destination}. helyére`);
		})
}

function kérdésMegjelenít() {
	let kérdés = hotlist[displayedQuestion].question;
	document.getElementById(`kérdés_szöveg`).innerHTML = kérdés.question1;
	document.getElementById("válasz1").innerText = kérdés.answer1;
	document.getElementById("válasz2").innerText = kérdés.answer2;
	document.getElementById("válasz3").innerText = kérdés.answer3;

	if (kérdés.image) {
		document.getElementById("kép").src = kérdés.image;
		document.getElementById("kép").style.display = "none";
	}
	else {
		document.getElementById("kép").style.display = "none";
	}
}

  