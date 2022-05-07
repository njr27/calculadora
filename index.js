const $numbers = document.querySelectorAll('.calculator__buttons--number')
const $operators = document.querySelectorAll('.calculator__buttons--operator')
const $calculatorDisplay = document.querySelector('.calculator__display-input')
const $calculatorResult = document.querySelector('.calculator__display-result')
const $showResult = document.querySelector('.calculator__buttons--result')
const $cleanScreen = document.querySelector('.calculator__buttons--clean')
const $negative = document.querySelector('.calculator__buttons--negative')
const $historic = document.querySelector('.historic')

let lastResult = ""

for (let index=0; index < $numbers.length; index++){
    $numbers[index].addEventListener('click', function(){
        $calculatorDisplay.value += $numbers[index].textContent
    })
}

for (let index=0; index < $operators.length; index++){
    $operators[index].addEventListener('click', function(){
        $calculatorDisplay.value += $operators[index].textContent
    })
}

$showResult.addEventListener('click', function (){    
    $calculatorDisplay.value = $calculatorDisplay.value.replace("÷","/")
    $calculatorDisplay.value = $calculatorDisplay.value.replace("×","*")  
    $calculatorDisplay.value = $calculatorDisplay.value.replace("%","/100")
    lastResult = $calculatorDisplay.value
    $calculatorResult.innerHTML = eval($calculatorDisplay.value)
})

$cleanScreen.addEventListener('click',function(){
    $calculatorDisplay.value = " "
    $calculatorResult.innerHTML = "0"
})

$negative.addEventListener('click',function (){    
    let verifyNegative = $calculatorDisplay.value.includes("-")    
    if(verifyNegative == false){  
        $calculatorDisplay.value = $calculatorDisplay.value.replace(" ","") 
        $calculatorDisplay.value = "-"+$calculatorDisplay.value
    }else{
        $calculatorDisplay.value = $calculatorDisplay.value.replace("-","") 
    }
})

//executa o eval se digitar os valores e ENTER pelo teclado
$calculatorDisplay.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        console.log('sim')
        $calculatorResult.innerHTML = eval($calculatorDisplay.value)
    }    
})

//exibir última expressão resolvida
$historic.addEventListener('click',function(){
    $calculatorDisplay.value = lastResult    
})


