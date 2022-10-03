const API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/testimonials?limit=5";
const test_cont = document.querySelector("#testimonial-container");
let afterID = null;

test_cont.addEventListener("scroll", handleScroll);
const getData = () => {
  fetch(API_BASE_URL)
    .then((resp) => resp.json())
    .then(({ testimonials, hasNext }) => {
      const fragment = document.createDocumentFragment();
      testimonials.forEach(({ message }) => {
        fragment.appendChild(createTestimonial(message));
      });
      test_cont.appendChild(fragment);
      if (hasNext) {
        afterID = testimonials[testimonials.length - 1].id;
      } else {
        test_cont.removeEventListener("scroll", handleScroll);
      }
    });
};

getData();

function createTestimonial(message) {
  const testElement = document.createElement("p");
  testElement.classList.add("testimonial");
  testElement.textContent = message;
  return testElement;
}

function handleScroll() {
  const bottomSpaceLeft =
    this.scrollHeight - this.scrollTop - this.clientHeight;

  if (bottomSpaceLeft > 0) {
    return;
  } else {
    getData();
  }

  if (hasNext) {
    afterID = testimonials[testimonials.length - 1].id;
  }
}
