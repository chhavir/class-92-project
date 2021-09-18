function addUser()
{
    localStorage.setItem("player2_name" , document.getElementById("player2_name").value);
    localStorage.setItem("player1_name" , document.getElementById("player1_name").value);
window.location= "game_page.html";

}