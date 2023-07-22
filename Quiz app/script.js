const Questions = [{
    q: "Who won the IPL'23?",
    a: [{ text: "CSK", isCorrect: true },
    { text: "RCB", isCorrect: false },
    { text: "MI", isCorrect: false },
    { text: "KKR", isCorrect: false }
    ]
 
},
{
    q: "How many infinity stones are there in Infinity gauntlet?",
    a: [{ text: "four", isCorrect: false, isSelected: false },
    { text: "seven", isCorrect: false },
    { text: "infinity", isCorrect: false },
    { text: "six", isCorrect: true }
    ]
 
},
{
    q: "Which Indian song won The Grammys?",
    a: [{ text: "Kesariya", isCorrect: false },
    { text: "Kurumugil", isCorrect: false },
    { text: "Natu Natu", isCorrect: true },
    { text: "Jai Ho", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}
function explodeConfetti() {
    const confettiAmount = 100; // Number of confetti pieces

    for (let i = 0; i < confettiAmount; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDuration = `${Math.random() * 3 + 1}s`;

      // Randomize colors if desired
      const colors = ["#f8a31b", "#d32f2f", "#1976d2", "#388e3c", "#e64a19"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.backgroundColor = randomColor;

      document.body.appendChild(confetti);
    }

    // Remove the confetti after the animation finishes
    setTimeout(() => {
      const allConfetti = document.querySelectorAll(".confetti");
      allConfetti.forEach((confetti) => confetti.remove());
    }, 3000);
  }