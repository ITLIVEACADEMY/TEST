(function() {
  const myQuestions = [
    {
      question: "1.Avstraliya materigi qachon kashf etilgan ?.",
      answers: {
        a: " 1650 yil ",
        b: "1687 yil",
        c: "1606 yil",
        d: "1498 yil"
      },
      correctAnswer: "a"
    },
    {
      question: "2.Avstraliyada daryoning quruq o'zanlari nima deb ataladi ?",
      answers: {
        a: "kanyon",
        b: "krik",
        c: "vodiy",
        d: "Dara"
      },
      correctAnswer: "c"
    },
    {
      question: "3.Katta Suvayirg'ich tog' tizmasi Avstraliyaning qaysi qismidan o'rin olgan ?",
      answers: {
        a: "sharqida",
        b: " shimolida",
        c: "  janubida",
        d: " g'arbida"
      },
      correctAnswer: "c"
    },
    {
      question: "4. 'Avstraliya' so\'zi qanday ma'noni anglatadi ?",
      answers: {
        a: " shimoliy",
        b: "janubiy",
        c: "markaziy",
        d: "g'arbiy"
      },
      correctAnswer: "c"
    },
    {
      question: "5.Avstraliyaning tub joy aholisi qanday ataladi ?",
      answers: {
        a: "Indeyslar ",
        b: "Maorilar",
        c: "Malaylar",
        d: "Aborigenlar"
      },
      correctAnswer: "a"
    },
    {
      question: "6.Makdonell tog'idagi Zil cho'qqisining balandligi qanchaga teng ?",
      answers: {
        a: " 1510 m",
        b: "  1226 m",
        c: "2228 m",
        d: "1630 m"
      },
      correctAnswer: "b"
    },
    {
      question: "7.  Avstraliyani Tasmaniya orolidan qaysi bo'g'iz ajratib turadi ?",
      answers: {
        a: "Magellan",
        b: "Dreyk",
        c: "Mozambik",
        d: "Bass"
      },
      correctAnswer: "b"
    },
    {
      question: "8.Avstraliya materigining shimoliy chekka nuqtasini toping",
      answers: {
        a: "York burni",
        b: "Stip-Point burni",
        c: "Bayron burni",
        d: "Saut-Ist-Point burni"
      },
      correctAnswer: "a"
    },
    {
      question: "9.Eyr ko'lining maydoni suv bilan to'lgan davrda qanchaga teng bo'ladi ?",
      answers: {
        a: "10 ming kv.km",
        b: "15 ming kv.km",
        c: "13 ming kv.km",
        d: "16 ming kv.km"
      },
      correctAnswer: "a"
    },
    {
      question: "10. Avstraliyaning janubi-sharqida qanday o'rmonlar shakllangan?",
      answers: {
        a: "doimiy yashil o'rmonlar",
        b: "aralash o'rmonlar",
        c: "evkalipt o'rmonlari",
        d: "qattiq bargli o'rmonlar"
      },
      correctAnswer: "d"
    },
   


     
  ];

  function buildQuiz() {
  
    const output = [];

  
    myQuestions.forEach((currentQuestion, questionNumber) => {
     
      const answers = [];

      
      for (letter in currentQuestion.answers) {
        
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
          }

         
          output.push(
            `<div class="slide">
               <div class="question"> ${currentQuestion.question} </div>
               <div class="answers"> ${answers.join("")} </div>
             </div>`
          );
    });

   
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "blue";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();