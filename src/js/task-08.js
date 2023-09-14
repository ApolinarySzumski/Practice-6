const loginForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email.value;
  const passwordInput = event.currentTarget.elements.password.value;

  if (emailInput === "" || passwordInput === "") {
    alert("Please fill all fields!");
  } else {
    const data = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(data);
    loginForm.reset();
  }
};

loginForm.addEventListener("submit", handleSubmit);
