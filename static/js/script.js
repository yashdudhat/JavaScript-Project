//Challenge 1 : Your Age in Days
function ageInDays(){
    var birthYear = prompt('What year were you born in?');
    var numberOfDays = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAns = document.createTextNode( 'You are ' + numberOfDays + ' days old. ');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAns);
    document.getElementById('flex-box-result').append(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Image Generator
function genImage(){
    var image =  document.createElement('img');
    image.setAttribute('id','re');
    var div =  document.getElementById('gen-image');
    image.src = "https://picsum.photos/200/300";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper and Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoise;
    humanChoice = yourChoice.id;
    ///console.log('My choise',humanChoice);
    botChoise = randomChoise(randomInt());
    //console.log('Computers choise',botChoise);
    result = decideWinner(humanChoice, botChoise);
    //console.log(result);
    message = finalMessage(result);
    //console.log(message);
    rpsFontEnd(humanChoice, botChoise ,message);
}

function randomInt(){
    return Math.floor(Math.random()*3);
}

function randomChoise(num){
    return ['rock','paper','scissors'][num];
}

function decideWinner(humanChoice, botChoise){
    var decide={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    }
    var yourScore = decide[humanChoice][botChoise];
    var botScore = decide[botChoise][humanChoice];
    return [yourScore,botScore];
}
function finalMessage([yourScore]){
    if(yourScore === 0){
        return {'message':'You Lost!','color':'red'};
    }
    else if (yourScore === 0.5){
        return {'message':'You Tied!','color':'yellow'};
    }
    else{
        return {'message':'You Won!','color':'green'};
    }
}

function rpsFontEnd(humanChoice, botChoise,message){
    var imageSrc={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
//remove all image
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanChoiceDiv=document.createElement('div');
var botChoiceDiv=document.createElement('div');
var messageDiv=document.createElement('div');
    humanChoiceDiv.setAttribute('id','humanImg');
    messageDiv.setAttribute('id','messageDiv');
    botChoiceDiv.setAttribute('id','botImg');

humanChoiceDiv.innerHTML= "<img src='" + imageSrc[humanChoice] +"' height='150px' width='150px' style = 'box-shadow : 0px 10px 50px green'>";
messageDiv.innerHTML= "<h1 style = 'color:"+ message['color'] + "; text-shadow : 0px 0px 50px "+ message['color'] +";font-size: 60px; padding:30px;'>"+message['message']+"</h1>"+"<button class='btn btn-danger' onclick='resetRPS()'>Play Again</button>";
botChoiceDiv.innerHTML= "<img src='" + imageSrc[botChoise] +"' height='150px' width='150px' style = 'box-shadow : 0px 10px 50px red'>";

document.getElementById('flex-box-rps-div').appendChild(humanChoiceDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botChoiceDiv);
}

function resetRPS(){
    document.getElementById('humanImg').remove();
    document.getElementById('botImg').remove();
    document.getElementById('messageDiv').remove();

    var rockImg = document.createElement('img');
    rockImg.src ="static/images/rock.png";
    rockImg.setAttribute('id','rock');
    rockImg.setAttribute('height','150');
    rockImg.setAttribute('width','150');
    rockImg.setAttribute('onclick','rpsGame(this)');

    var paperImg = document.createElement('img');
    paperImg.src ="static/images/paper.png";
    paperImg.setAttribute('id','paper');
    paperImg.setAttribute('height','150');
    paperImg.setAttribute('width','150');
    paperImg.setAttribute('onclick','rpsGame(this)');

    var scissorsImg = document.createElement('img');
    scissorsImg.src ="static/images/scissors.png";
    scissorsImg.setAttribute('id','scissors');
    scissorsImg.setAttribute('height','150');
    scissorsImg.setAttribute('width','150');
    scissorsImg.setAttribute('onclick','rpsGame(this)');
    
    
    document.getElementById('flex-box-rps-div').appendChild(rockImg);
    document.getElementById('flex-box-rps-div').appendChild(paperImg);
    document.getElementById('flex-box-rps-div').appendChild(scissorsImg);

    //document.getElementById('box-rps').appendChild(reset1['rock']);
    
}


// Challenge 4 : Change Button color

let allButtons = document.getElementsByTagName('button');
console.log(allButtons);

let copyALLButtons=[];
for(let i=0; i<allButtons.length; i++){
   copyALLButtons.push(allButtons[i].classList[1]);
}
console.log(copyALLButtons);
function buttonColorChange(buttonColor1){
    buttonColor = buttonColor1.value;
    console.log(buttonColor);
    if(buttonColor === 'random')
    {
        randomColor();
    }
    else if(buttonColor === 'red')
    {
        redColor();
    }
    else if(buttonColor === 'green')
    {
        greenColor();
    }
    else if(buttonColor === 'reset')
    {
        resetColor();
    }
}

function redColor(){
    for(let i=0;i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function greenColor(){
    for(let i=0;i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function randomColor(){

    for(let i=0;i<allButtons.length; i++){
        let changeColor=['btn-danger','btn-primary','btn-success','btn-warning'];
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(changeColor[Math.floor(Math.random() * 4)]);
    }
}

function resetColor(){

    for(let i=0;i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyALLButtons[i]);
    }
}

