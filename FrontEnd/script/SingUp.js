const apiURL = 'http://localhost:3030';

const btnSingUp = document.querySelector("button#btnSingUp");
btnSingUp.addEventListener("click", () => {
    const userName = document.querySelector("input[name=username").value;
    const userPassword = document.querySelector("input[name=password]").value;
    const userEmail = document.querySelector("input[name=email]").value;

    const data = {
        name: userName,
        email: userEmail,
        password: userPassword
    }
    console.log(userName, userEmail, userPassword);
    SingUp(data);
});


const SingUp = (data) => {
    axios.post(`${apiURL}/SingUp`, data).then((res) => {
        console.log(res);
        ApiResult(res);
    }).catch((err) => console.log(err));
}

const ApiResult = (res) => {
    switch (res.data) {
        case "Cadastrado com sucesso!":
            alert("Cadastrado com sucesso!");
            window.location.href = "../pages/Login.html";
            break;
        case "Usuario ja existente!":
            alert("Usuario ja existente!");
            break;
    }
}
