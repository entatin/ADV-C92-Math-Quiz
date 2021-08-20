function send(){
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);
 
    question_number = "<h4>"+number1+" x "+number2+"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>check</button>";
    row = question_number + input_box + check_button;
 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value = " ";
    document.getElementById("number2_input").value = " ";
 }

question_turn = "player1";
answer_turn = "player2";
 var player1_nameVar = localStorage.getItem("player1");
 var player2_nameVar = localStorage.getItem("player2");
 
 document.getElementById("player1_name").innerHTML = player1_nameVar + " :  ";
 document.getElementById("player2_name").innerHTML = player2_nameVar + " :  ";
 
 document.getElementById("player_question").innerHTML ="Queston turn : " + player1_nameVar ;
 document.getElementById("player_answer").innerHTML = "Answer turn : " + player2_nameVar ;
 
 var player1_scoreVar = 0;
 var player2_scoreVar = 0;
 
 document.getElementById("player1_score").innerHTML = " " + player1_scoreVar;
 document.getElementById("player2_score").innerHTML = " " + player2_scoreVar;

 function check() {
get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{
    if(answer_turn == "player1")
    {
        update_player1score = player1_scoreVar+1;
        document.getElementById("player1_score").innerHTML = update_player1score;
    }
    else
    {
        update_player2score = player2_scoreVar+1;
        document.getElementById("player2_score").innerHTML = update_player2score;
    }

    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_nameVar;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_nameVar;
    }
}

if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_nameVar;
}
else
{
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_nameVar;
}
}
