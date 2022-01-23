const questions = document.querySelectorAll(".faq__question__container");
const paragraph = document.querySelectorAll(".faq__question__container__text");

const toggleQuestion = (e) => {
  const faqContainer = e.currentTarget.children[0];
  const faqTitle = e.currentTarget.children[1];

  faqContainer.style.getPropertyValue("--arrow-direction") === "180deg"
    ? faqContainer.style.setProperty("--arrow-direction", "0")
    : faqContainer.style.setProperty("--arrow-direction", "180deg");
  faqContainer.classList.toggle("faq__question__container__header--active");
  faqTitle.classList.toggle("faq__question__container__text--active");
};

questions.forEach((q) => {
  q.addEventListener("click", toggleQuestion);
});
