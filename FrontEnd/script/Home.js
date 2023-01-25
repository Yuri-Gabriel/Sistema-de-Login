
const token = localStorage.getItem('token');
if (token == "undefined") {
    window.location.href = "../pages/Login.html";
}

const url = 'http://localhost:3030';

axios.post(`${url}/CheckToken`, { token: token }).then(response => {
    const { data } = response
    if (data.erro) {
        alert(data.erro);
    } else {
        const { nome, email } = data;
        document.querySelector("span#userName").innerHTML = `Usuario: ${nome}`;
        document.querySelector("span#userEmail").innerHTML = `Email: ${email}`;
    }
});

const btnLogOut = document.querySelector("button#logOut");
btnLogOut.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../pages/Login.html";
})