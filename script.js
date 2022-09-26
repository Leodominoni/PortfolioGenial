const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const msg = document.getElementById('msg')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const msgValue = msg.value;

    if (usernameValue === ''){
        setErrorFor(username, 'Seu nome é obrigatório.');
    } else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Por favor digite seu email')
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido.");
    }else{
        setSuccessFor(email)
    }
}

function setErrorFor(input, mensage){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //add a msg de erro
    small.innerText = mensage;
    //add a classe de erro
    formControl.className = 'form-control error';
}

function setSuccessFor(input, mensage){
    const formControl = input.parentElement;

    //Adicionar a classe de Erro
    formControl.className = 'form-control success';
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }