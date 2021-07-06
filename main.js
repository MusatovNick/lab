const firstNumber = parseInt(prompt('firstNumber'));
const secondNumber = isNaN(firstNumber) || parseInt(prompt('secondNumber'));

if(!isNaN(firstNumber) && !isNaN(secondNumber)){
    console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`)
}
else {
    console.log('Некорректный ввод!');
}

function newArray(...date) {
    return date;
}