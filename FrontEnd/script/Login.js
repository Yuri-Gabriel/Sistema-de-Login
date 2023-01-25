localStorage.clear();
const apiURL = 'http://localhost:3030'

const btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", () => {
    const Email = document.querySelector("input[name=email]").value;
    const Password = document.querySelector("input[name=password]").value;
    const data = {
        email: Email,
        password: Password
    }
    Login(data);
})

const Login = (data) => {
    axios.post(`${apiURL}/SingIn`, data).then((res) => 
            APIResult(res)
    );
}

const APIResult = (apiRes) => {
    if (apiRes.data.length != 0) {
        localStorage.setItem("token", apiRes.data.token);
        window.location.href = "../pages/Home.html"
    } else {
        alert("Usuario nao encontrado, crie uma conta")
    }
}