const conatiner = document.querySelector('.card-container');
const arr = ['♠','♥','♦','♣ '];
const SelectedCards = [];

function doubleElement(arr)
{
    return arr.concat(arr);
}

function ShuffleArray(arr){
    return arr.sort(() => Math.random() -0.5);
}

function createCard(symbol){
    const card = document.createElement('div');
    card.classList.add('card','hide');

    card.innerHTML = `<p>${symbol}</p>`;
    conatiner.appendChild(card);
    
}

function createCards(SortArray){
    console.log(SortArray);
    SortArray.forEach (symbol =>{
        createCard(symbol);    
    })
}

function click_ap(){
    const cards = document.querySelectorAll('.card');
    [...cards].forEach(card => {
        console.log(card)
        card.addEventListener('click', () =>{
        card.classList.remove('hide');
        if (SelectedCards.lenght < 2){
            card.classList.add('selected');
            SelectedCards.push('card');
        }

        if (SelectedCards.length == 2){
            if(SelectedCards[0].innerHTML==SelectedCards[1].innerHTML){

            }
            else{
                
            }
        }
    })
        
    }) 
} 


const doubleArr = doubleElement(arr);
console.log(doubleArr);

const SortArray = ShuffleArray(doubleArr);
console.log(SortArray);

createCards(SortArray);

click_ap();

