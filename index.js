let container = document.querySelector(".container");
let userEmail = document.querySelector("#email");
let submitBtn = document.querySelector(".sub-btn");
let dismissBtn = document.querySelector(".diss-btn");
let successView = document.querySelector(".sign-up-success");
let errorLabel = document.querySelector('.email-error')
let userEmailText = document.querySelector(".user-email")

userEmail.addEventListener("keydown", (e) => {
  userEmail.classList.remove('error')
  errorLabel.style.display = 'none'
});

submitBtn.addEventListener("click", () => {
  let email = userEmail.value;
  let testEmailisokay = validateEmail(email);
  let userEmailforspan = 
  console.log(testEmailisokay);
  if (testEmailisokay) {
    successView.style.display = "flex";
    container.style.display = 'none'
    userEmailText.textContent = testEmailisokay[0]
    userEmail.value = ''
  } else {
    errorLabel.style.display = 'flex'
    userEmail.classList.add("error");
  }
});

dismissBtn.addEventListener("click", () => {
  successView.style.display = "none";
  container.style.display = "flex";
});

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}
