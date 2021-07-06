const firstNumber = parseInt(prompt('firstNumber'));
const secondNumber = isNaN(firstNumber) || parseInt(prompt('secondNumber'));

if(!isNaN(firstNumber) && !isNaN(secondNumber)){
    console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`)
}
else {
    console.log('Некорректный ввод!');
}


/// 111234123


function newArray(...date) {
    return date;
}



// locale
// origin (remote)