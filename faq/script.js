const faq = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

const main = document.querySelector("main");
let showAnswer = false;
let topShowAnswer = true;

faq.forEach((q, index) => {
  console.log(index);

  const container = document.createElement("div");
  const topContainer = document.createElement("div");
  const dot = document.createElement("p");
  const question = document.createElement("h3");
  const answer = document.createElement("p");

  question.innerHTML = q.question;
  answer.innerHTML = q.answer;
  dot.innerHTML = "&#8595;";

  container.classList.add("container");
  topContainer.classList.add("top-container");
  dot.classList.add("dot");

  //show first ans
  answer.classList.add("answer");
  if (index == 0) {
    console.log("yes");
    answer.style.display = "block";
    dot.innerHTML = "&#8593;";
    answer.classList.add("first");
    dot.addEventListener("click", () => {
      console.log("ye");
      if (topShowAnswer) {
        answer.style.display = "none";
        topShowAnswer = false;
        dot.innerHTML = "&#8595;";
      } else {
        answer.style.display = "block";
        topShowAnswer = true;
        dot.innerHTML = "&#8593;";
      }
    });
  }
  topContainer.appendChild(dot);
  topContainer.appendChild(question);

  container.appendChild(topContainer);
  container.appendChild(answer);

  main.appendChild(container);

  dot.addEventListener("click", () => {
    if (answer.classList.contains("first")) {
      return;
    }
    if (!showAnswer) {
      answer.style.display = "block";
      showAnswer = true;
      dot.innerHTML = "&#8593;";
    } else {
      answer.style.display = "none";
      showAnswer = false;
      dot.innerHTML = "&#8595;";
    }
  });
});
