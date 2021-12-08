function login() {
    var player_1 = document.getElementById("player1_name").value;
    var player_2 = document.getElementById("player2_name").value;
    if (player_1 == "" || player_1 == null || player_2 == "" || player_2 == null) {
        window.alert("Please enter the username");
    } else{
    localStorage.setItem("Player1", player_1);
    localStorage.setItem("Player2", player_2);
    window.location = "game_page.html";
    }
}