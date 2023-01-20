localStorage.clear();
const apiURL = 'https://loginnode-production.up.railway.app';

const btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", () => {
    const Email = document.querySelector("input[name=email]").value;
    const Password = document.querySelector("input[name=password]").value;
    const data = {
        email: Email,
        password: Password
    }
    console.log(data);
    Login(data);
})

const Login = (data) => {
    axios.post(`${apiURL}/SingIn`, data).then((res) => 
            APIResult(res)
    );
}

const APIResult = (apiRes) => {
    console.log(apiRes);
    if (apiRes.data.length != 0) {
        localStorage.setItem("nome", apiRes.data.nome);
        localStorage.setItem("email", apiRes.data.email);
        window.location.href = "../pages/Home.html"
    } else {
        alert("Usuario nao encontrado, crie uma conta")
    }
}