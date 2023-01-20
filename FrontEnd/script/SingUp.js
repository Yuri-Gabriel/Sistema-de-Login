const apiURL = 'https://loginnode-production.up.railway.app';

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
    /*if (res.data == "Cadastrado com sucesso!") {

    } else if (res.response.status == 404) {
        console.log("Error")
    }*/
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



//Cadastrado com sucesso!