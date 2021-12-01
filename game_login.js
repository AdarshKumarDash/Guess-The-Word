function login() {
    var player_1 = document.getElementById("player1_name").value;
    var player_2 = document.getElementById("player2_name").value;
    localStorage.setItem("Player1", player_1);
    localStorage.setItem("Player2", player_2);
    window.location = "game_page.html";
}