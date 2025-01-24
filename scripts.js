const buttonText = document.getElementById("buy-tickets");


function redirect() {
    window.location.assign("new.html")
}

buttonText.addEventListener("click", redirect);


