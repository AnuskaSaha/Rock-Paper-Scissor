let options = document.querySelectorAll('.box');
let choicesComp = Array.from(options);
let comp;
let result = document.querySelector('.score').lastElementChild;

options.forEach((option)=>{
    option.addEventListener('click', ()=>{
        let i, j;
        comp = choicesComp[Math.floor(Math.random()*3)];
        i = option.querySelector('p').innerText;
        j = comp.querySelector('p').innerText;
        if(i === j){
            result.innerText = 'YOU and COMPUTER picked same option';
            result.style.backgroundColor = 'pink';
            result.style.fontSize = '30px';
            result.style.color = 'black';
            console.log(i , j);
        }
        else{ // user wins 
            if((i==='Rock' && j==='Scissor') || (i==='Scissor' && j==='Paper') || (i==='Paper' && j==='Rock')){
                result.innerText = `YOU: ${i} and COMP: ${j}. You Win.`;
                result.style.backgroundColor = 'green';
                result.style.fontSize = '30px';
                result.style.color = 'white';
                console.log(i , j);
                let User = document.querySelector('.you').firstElementChild;
                let userScore = Number.parseInt(User.innerText);
                userScore++;
                User.innerText = userScore;
            }else{ // comp wins 
                result.innerText = `YOU: ${i} and COMP: ${j}. You Lose.`;
                result.style.backgroundColor = 'red';
                result.style.fontSize = '30px';
                result.style.color = 'white';
                console.log(i , j);
                let Comp = document.querySelector('.comp').firstElementChild;
                let compScore = Number.parseInt(Comp.innerText);
                compScore++;
                Comp.innerText = compScore;
            }
        }
    });
});