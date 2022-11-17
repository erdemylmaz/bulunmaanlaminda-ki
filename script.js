const container = document.querySelector(".question");
const c = document.querySelector(".container");
const infoText = document.querySelector(".info-text");
const timer = document.querySelector(".timer");
const startButton = document.querySelector(".start-btn");
const headerText = document.querySelector(".header-text");
const header = document.querySelector(".header");
const certification = document.querySelector(".certification-div");
const ccDiv = document.querySelector(".create-certification-div");
const loserMessage = document.querySelector(".loser-message");
const nameInput = document.querySelector(".name");
const certificateDiv = document.querySelector(".certificate-div");
const createBtn = document.querySelector(".create-certificate-btn");

class Questions {
  questions = [
    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>yanlış</b>  kullanılmıştır?",
      answers: [
        {
          answerTitle: "Bugün evdeki yemekleri yiyeceksin!",
          isCorrect: false,
        },
        {
          answerTitle: "Dershanedeki hocaların nasıl?",
          isCorrect: false,
        },
        {
          answerTitle: "Seninki geliyo, doğal davran!",
          isCorrect: false,
        },
        {
          answerTitle: "Adam sessizce cebinde ki bıçağı cıkardı.",
          isCorrect: true,
        },
        {
          answerTitle: "Arkadaşının yanındakilerden rahatsız oldu.",
          isCorrect: false,
        },
      ],
    },

    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>yanlış</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Sen yanıma gel ki rahatça oturalım.",
          isCorrect: false,
        },
        {
          answerTitle: "Bana öyle bir şey söyle ki seni affedeyim.",
          isCorrect: false,
        },
        {
          answerTitle: "Camda ki lekeyi temizledi.",
          isCorrect: true,
        },
        {
          answerTitle: "O seni tanımıyor ki.",
          isCorrect: false,
        },
        {
          answerTitle: "Adamın bankasındaki parayı görünce şok oldu.",
          isCorrect: false,
        },
      ],
    },

    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>doğru</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Kolundaki dövmenin bir anlamı varmış.",
          isCorrect: true,
        },
        {
          answerTitle: "Belinde ki kemer göz alıcıydı.",
          isCorrect: false,
        },
        {
          answerTitle: "Yüzünde ki sivilceler stresten dolayı çıkmış.",
          isCorrect: false,
        },
        {
          answerTitle: "Tabağında ki yemeği bitirmeden masadan kalkamazsın!",
          isCorrect: false,
        },
        {
          answerTitle: "Çok çalışki başarılı olasın.",
          isCorrect: false,
        },
      ],
    },
    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>yanlış</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Baktım ki bu iş olmayacak, ben de vazgeçtim. ",
          isCorrect: false,
        },
        {
          answerTitle: "Dün akşamki maç çok heyecanlıydı.",
          isCorrect: false,
        },
        {
          answerTitle: "Kapıda ki çopleri atmamışki!",
          isCorrect: true,
        },
        {
          answerTitle: "Halıdaki deseni çok beğendi.",
          isCorrect: false,
        },
        {
          answerTitle: "Tavadaki hamsi başladi oynamaya!",
          isCorrect: false,
        },
      ],
    },
    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>doğru</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Kitapları okulda ki dolabında kalmış.",
          isCorrect: false,
        },
        {
          answerTitle: "Bahçede ki kediler çok tatlıydı.",
          isCorrect: false,
        },
        {
          answerTitle: "Hayvanat bahçesinde ki hayvanlara yazık değil mi?",
          isCorrect: false,
        },
        {
          answerTitle: "İnsanlarda ki özgüven a*tal özgüveni!",
          isCorrect: false,
        },
        {
          answerTitle: "Seninki bu gün çok güzeldi.",
          isCorrect: true,
        },
      ],
    },
    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>yanlış</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Seni seviyorum ki bunca şeye katlandım.",
          isCorrect: false,
        },
        {
          answerTitle: "Erdem bugün okula gelmedi, belki hasta olmuştur.",
          isCorrect: false,
        },
        {
          answerTitle: "Onu çok seviyordum halbu ki.",
          isCorrect: true,
        },
        {
          answerTitle: "Bugün hava yağmurluymuş, neyseki şemsiyemi almışım.",
          isCorrect: false,
        },
        {
          answerTitle: "Kimseyi kendinden çok sevme ki çok üzülmeyesin.",
          isCorrect: false,
        },
      ],
    },
    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>yanlış</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Sanki ingiliz prensi pez*venk",
          isCorrect: false,
        },
        {
          answerTitle: "Bugün okuldaki dolapları yenilediler.",
          isCorrect: false,
        },
        {
          answerTitle: "Senin kalemin burada, benimki nerede?",
          isCorrect: false,
        },
        {
          answerTitle: "Yarın ki maç Bursa'da oynanacakmış.",
          isCorrect: true,
        },
        {
          answerTitle: "Ödevini yapmamış çünkü elektrikler kesilmiş.",
          isCorrect: false,
        },
      ],
    },
    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>doğru</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Başlarda ki insalar sabahtan beri burada bekliyor.",
          isCorrect: false,
        },
        {
          answerTitle: "Telefondaki resimlerini sildi.",
          isCorrect: true,
        },
        {
          answerTitle:
            "İngilterede ki bilim insanlarının yaptığı çalışmalar doğrultusunda...",
          isCorrect: false,
        },
        {
          answerTitle: "Almanyada ki insanlar bizi kıskanıyor.",
          isCorrect: false,
        },
        {
          answerTitle: "Boşanmalarında ki en büyük sebep güvensizlikti.",
          isCorrect: false,
        },
      ],
    },
    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>yanlış</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Senden sonraki yarışmacı Abin.",
          isCorrect: false,
        },
        {
          answerTitle: "Sen gül ki biz de gülelim.",
          isCorrect: false,
        },
        {
          answerTitle: "Supradaki ses hiçbir arabada yok.",
          isCorrect: false,
        },
        {
          answerTitle: "Elindeki telefonu hiç bırakmıyordu.",
          isCorrect: false,
        },
        {
          answerTitle:
            "Düğün için aldığı elbisesinde ki yırtığı fark etmemişti.",
          isCorrect: true,
        },
      ],
    },
    {
      title:
        "Aşağıdaki cümlelerin hangisinde -ki eki <b>yanlış</b> kullanılmıştır?",
      answers: [
        {
          answerTitle: "Bilgisayarındaki tüm bilgileri yedekliyordu.",
          isCorrect: false,
        },
        {
          answerTitle: "Ellerindeki çiçeği ona verecekken bir de ne görsün...",
          isCorrect: false,
        },
        {
          answerTitle: "Üzgün olduğu sesinde ki titremeden belli oluyordu",
          isCorrect: true,
        },
        {
          answerTitle: "Sanma ki burada güç sende.",
          isCorrect: false,
        },
        {
          answerTitle: "İzlediği programdaki sunucuyu daha önce görmüştü.",
          isCorrect: false,
        },
      ],
    },
  ];

  isGameEnded = false;
  certificate = {};
  questionsInOrder = [];
  answersDivs = [];
  answersCorrection = [];
  time = 180;
  finishTime = 0;

  startTimer = () => {
    setInterval(() => {
      if (!this.isGameEnded) {
        if (this.time > 0) {
          this.time--;
          timer.textContent = this.time;
          if (this.time == 0) {
            this.endQuiz();
          }
        }
      }
    }, 1000);
  };

  startQuiz = () => {
    infoText.style.display = "none";
    this.startTimer();
    this.loadQuestion(currentIndex);
    startButton.style.display = "none";
    c.style.backgroundColor = "var(--background)";
  };

  selectAnswer = (e) => {
    let div = e.target;
    let correctivity = e.target.getAttribute("data-status");
    div.classList.add("selected-answer");
    this.answersCorrection.push(correctivity);
    currentIndex++;
    if (currentIndex >= 10) {
      setTimeout(() => {
        this.endQuiz();
      }, 2000);
    } else {
      setTimeout(() => {
        this.loadQuestion(currentIndex);
      }, 1500);
    }
  };

  loadQuestion = (index) => {
    container.innerHTML = ``;

    let question = this.questionsInOrder[index];
    headerText.innerHTML = `<b>${currentIndex + 1}</b> -  ${question.title}`;

    console.log(question);

    for (let x = 0; x < question.answers.length; x++) {
      let div = document.createElement("div");
      div.setAttribute("data-status", question.answers[x].isCorrect);
      div.className = "answer";
      div.innerHTML = `${question.answers[x].answerTitle}`;

      container.appendChild(div);
    }

    this.answersDivs = document.querySelectorAll(".answer");
    this.answersDivs.forEach((answerDiv) => {
      answerDiv.addEventListener("click", this.selectAnswer);
    });
  };

  endQuiz = () => {
    timer.style.display = "none";
    this.finishTime = this.time;
    this.isGameEnded = true;

    c.style.display = "none";
    header.style.display = "none";
    certificateDiv.style.display = "flex";
    certification.style.display = "flex";

    let correctCount = 0;

    this.answersCorrection.forEach((value) => {
      if (value == "true") {
        correctCount++;
      }
    });

    this.certificate.time = 180 - this.finishTime;
    this.certificate.point = correctCount;

    if (correctCount == 10) {
      ccDiv.style.display = "flex";
    } else {
      loserMessage.style.display = "flex";
    }
  };

  inserCertifiacte = () => {
    certificateDiv.innerHTML = `
		<div class="certificate-text">Tebrikler size sorulan 10 sorunun tamamını ${this.certificate.time} saniye içinde doğru yanıtlayarak <b>enzeKİ</b> sertifikasını almaya hak kazandınız. </div>	
		<div class="certificate">
			<h1>enzeKİ</h1>
			<h1>${name}</h1>	
		</div>
	`;
  };
}

let currentIndex = 0;
const questions = new Questions();

let number = [];

for (let x = 0; x < questions.questions.length; x++) {
  let randomNumber = Math.floor(Math.random() * questions.questions.length);

  while (number.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * questions.questions.length);
  }

  number.push(randomNumber);
  questions.questionsInOrder.push(questions.questions[randomNumber]);
}

startButton.addEventListener("click", questions.startQuiz);

let name = "";
createBtn.addEventListener("click", () => {
  name = nameInput.value;
  ccDiv.style.display = "none";

  questions.inserCertifiacte();
});
