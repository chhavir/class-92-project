
player_1= localStorage.getItem("player1_name");
player_2= localStorage.getItem("player2_name");

p1Score = 0;
p2Score = 0;

document.getElementById("p1").innerHTML=player_1 + ":";
document.getElementById("p2").innerHTML=player_2 + ":";
document.getElementById("p1score").innerHTML= p1Score;
document.getElementById("p2score").innerHTML= p2Score;

document.getElementById("QuestionTurn").innerHTML="Question Turn  " + player_1; 
document.getElementById("AnswerTurn").innerHTML="Answer Turn  " + player_2; 

function send()

{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    
    question_number= "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info ' onclick='check()'> Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("ques").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    }


    answer_turn = "player_2";
    question_turn = "player_1";

    function check()
{
    if( actual_answer == document.getElementById("input_check_box").value )

    {
        answer = document.getElementById("input_check_box").value;
    get_ans = answer.toLowerCase();

    if(ques == get_ans)
    {
        if(answer_turn == "player_1")
        {
            p1Score = p1Score+1;
            document.getElementById("p1score").innerHTML=p1Score;
        }

        else
        {
            p2Score = p2Score+1;
            document.getElementById("p2score").innerHTML=p2Score;
        }
    }

    if(question_turn == "player_1")
    {
        question_turn = player_2;
        answer_turn = player_1;
        document.getElementById("AnswerTurn").innerHTML= "Answer Turn : " + answer_turn;
        document.getElementById("QuestionTurn").innerHTML= "Question Turn : " + question_turn;

    }
    else
    {
        question_turn = player_1;
        answer_turn = player_2;
        document.getElementById("AnswerTurn").innerHTML= "Answer Turn : " +answer_turn;
        document.getElementById("QuestionTurn").innerHTML= "Question Turn : " +question_turn;

    }
    }

}