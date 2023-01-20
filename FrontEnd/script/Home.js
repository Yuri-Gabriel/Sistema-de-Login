const userEmail = localStorage.getItem('email');
const userNome = localStorage.getItem('nome');
if (userEmail == "undefined" || userNome == "undefined") {
    window.location.href = "../pages/Login.html";
}

document.querySelector("span#userName").innerHTML = `Usuario: ${userNome}`;
document.querySelector("span#userEmail").innerHTML = `Email: ${userEmail}`;

const btnLogOut = document.querySelector("button#logOut");
btnLogOut.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../pages/Login.html";
})