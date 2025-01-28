
function redirect(item) {   
    console.log(item.value)
    console.log(item + ".html")
    window.location.href= "html/" + item.value + ".html"
}

function showAlert(){
    window.alert("Tickets sold out! Please try again later!")

}
