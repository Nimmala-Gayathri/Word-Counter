function keyPressed(){
    // console.log('Key Pressed')
    let textValueCount = document.querySelector('textarea');
    // console.log(textValueCount.value)
    let charCount=document.querySelector('.charCount')
    charCount.innerHTML =String(textValueCount.value).length

    let charLimit = 200;
    let charElementLimit = document.querySelector('.charLimits');
    charElementLimit.innerHTML = charLimit - textValueCount.value.length;

    let wordCount = document.querySelector('.WordsCount');
    // console.log(String(textValueCount.value).split(" ").length)
    let arrayCount = String(textValueCount.value).split(" ")
    wordCount.innerHTML = arrayCount.length;

    if(textValueCount.value.length >200){
        textValueCount.value = String(textValueCount.value).substring(0, charLimit);
    }

}

document.querySelector('button').addEventListener('click',()=>{
    document.querySelector('textarea').value = '';
    document.querySelector('.charCount').innerHTML = "0";
    document.querySelector('.WordsCount').innerHTML = '0';
    document.querySelector('.charLimits').innerHTML = '200'
    // document.querySelector('button').style.backgroundColor = 'blue'
})
// document.querySelector('button').addEventListener('keyup',()=>{
//     document.querySelector('button').style.backgroundColor = 'pink'
// })
