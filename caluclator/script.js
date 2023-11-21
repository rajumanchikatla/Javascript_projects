 const expItmes = document.getElementsByClassName('exp-item');
 const expressionEl = document.getElementById('expression');
 const resultEl = document.getElementById('final-result');
 let storedValue = '';
 const keys = ['1', '2','3','4','5','6','7','8','9','/','*','-','+','%']
 expressionEl.addEventListener('keydown', function(e){
        if(!keys.includes(e.key)){
            console.log(expressionEl.value)
            e.preventDefault();
        } 
 })
 const arr = Array.from(expItmes);
 arr.forEach(element => {
    element.addEventListener('click',function(e) {
        expressionEl.value += e.target.innerText;
    })
 });

 function evaluateExpression(){
    // console.log(storedValue+expressionEl.value)
    const result =  eval(storedValue+expressionEl.value);
    resultEl.innerText = result;
 }

 function reset(){
    storedValue = 0;
    resultEl.innerText = '';
    expressionEl.value = '';
 }

 function backPress(){
    expressionEl.value = expressionEl.value.slice(0, -1);
 }

  function ce(){
    storedValue = resultEl.textContent;
    expressionEl.value = '';
}
