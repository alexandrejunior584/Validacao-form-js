const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const btnSubmit = document.getElementById("button");

btnSubmit.addEventListener("click", validate);

function validate(e){
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");

  let valid = true;

  if(!name.value && !email.value || !name.value || !email.value){
    const error = document.getElementById("error");
    error.classList.add("visible");
    error.classList.add("invalid");
    error.setAttribute("aria-hidden", false);
    error.setAttribute("aria-invalid", true);
  }

  return valid;
}