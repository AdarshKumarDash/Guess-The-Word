var player1_name = localStorage.getItem("Player1");
var player2_name = localStorage.getItem("Player2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":&nbsp;";
document.getElementById("player2_name").innerHTML = player2_name + ":&nbsp;";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn:" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn:" + player2_name;

function send() {
    word = document.getElementById("word").value;
    getword = word.toLowerCase();
    console.log(getword);
    char_1 = getword.charAt(1);
    console.log(char_1);
    position_2 = Math.floor(getword.length / 3);
    char_2 = getword.charAt(position_2);
    console.log(char_2);
    char_3 = getword.charAt(getword.length - 1);
    console.log(char_3);
    position_3 = Math.floor(getword.length / 2);
    char_4 = getword.charAt(position_3);
    console.log(char_4);
    replace_1 = getword.replace(char_1, "_");
    replace_2 = replace_1.replace(char_2, "_");
    replace_3 = replace_2.replace(char_3, "_");
    replace_4 = replace_3.replace(char_4, "_");
    console.log(replace_4);
    question_word = "<h4>Question: "+ replace_4 + "</h4>";
    input_box = "<br>Answer: <input type='text' class='form-control' id='answer1'>";
    button = "<br><br><button onclick='check()' class='btn btn-success'>Check</button>";
    document.getElementById("output").innerHTML = question_word + input_box + button;
}