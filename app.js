// const correctAnswers=['B','A','B','B','B'];


// const form=document.querySelector('.form');

// const result=document.querySelector('.show');



// form.addEventListener('submit',(e)=>{
// e.preventDefault();

// let score=0;
// const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

// //checking answers
// userAnswers.forEach((answer,index)=>{
//     if(answer===correctAnswers[index]){
//         score+=20;
//     }

// });
// //showing the result

// scrollTo(0,0)

// result.classList.remove('visible');
// let i=0;

// const timer=setInterval(()=>{
//     result.querySelector('span').textContent=`${i}%`;
        
//     if(i===score){
        
//         clearInterval(timer);
//     }else{
//         i++;
//     }
// },10)
// });

const correctAnswers=['B','A','B','B','B'];
const form=document.querySelector('.form');
const result=document.querySelector('.show');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

let score=0;
const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,];
userAnswers.forEach((answer,index)=>{
    if(answer===correctAnswers[index]){
        score+=20;
    }
});
let i=0;

scrollTo(0,0);

result.classList.remove('visible');


const timer=setInterval(()=>{
    document.querySelector('span').textContent=`${i}%`;
    if(i===score){
        clearInterval(timer);

    }else{
        i++;
    }
})


});




