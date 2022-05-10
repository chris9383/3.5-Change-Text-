const cardList = document.querySelector('.cardList');
const score = document.querySelector('p');
const gameOverMessage = document.querySelector('h1');
let restartButton = document.getElementById('reset');
let beginScore = 0;
buildBoard();
let interval = setInterval(function(){
    addCard(cardList.children.length * 1) //make it start at 1 not 0
}, 2000);

cardList.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if(e.target.classList.contains('active')){
        e.target.classList.remove('active');
        beginScore = beginScore + 1;
        let counter = score;
        counter.innerHTML = `Score: ${beginScore}`;
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
    beginScore = beginScore + 2;
    let counter = score;
    counter.innerHTML = `Score: ${beginScore}`;
    let children = cardList.children;
    if(children.length < 1){
        clearInterval(interval);
        score.remove();
        gameOverMessage.textContent = `You win! Your score was ${beginScore}`;
    }
});
addCard('test');
function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter')
    }
}

restartButton.addEventListener('click', function (e) {
    location.reload();
});