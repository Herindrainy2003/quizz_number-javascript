let input_quiz = document.querySelector('#input_quiz')
let result = document.querySelector('#result')
let verify_btn =  document.querySelector('#verify')
let restart_btn = document.querySelector('#restart')
let essaie = document.querySelector('#essaie')
let quit = document.querySelector('#quit')



 restart_btn.addEventListener(('click') ,restart)
quit.addEventListener(('click') ,()=>{window.close()})

verify_btn.addEventListener(('click') ,is_start)

let number_magic = Math.floor((Math.random() * 10)+1)
let nb_essaie = 4

function is_start(){
   
    if(nb_essaie === 0 ){
        result.textContent = `votre nombre d 'essaie est epuise, la bonne reponse est ${number_magic}`
        result.classList.add('false')
       disable_input()
    }else if(number_magic == input_quiz.value){
            result.textContent = 'Bravo , vous avez trouver la bonne reponse!!!'
            input_quiz.value = ''
            result.classList.add('true')
            disable_input()
       
       }else if(number_magic < input_quiz.value){
            result.textContent =  `votre nombre est plus grand que la nombre magic , il vous reste${5 - nb_essaie} essaie`
            input_quiz.value = ''
          
             }else if(number_magic > input_quiz.value){
                    result.textContent =`votre nombre est plus petit que la nombre magic , il vous reste${ nb_essaie} essaie`
                    input_quiz.value = ''
                    
          
        }

        nb_essaie--
   
    }
   
   
function disable_input(){
   input_quiz.disabled = true 
 }


 function restart(){
    number_magic = Math.floor((Math.random() * 10)+1)
    input_quiz.value =''
    result.textContent = ''
    nb_essaie = 5
    input_quiz.disabled = false
    result.classList.remove('true')
    result.classList.remove('false')
  
 }
