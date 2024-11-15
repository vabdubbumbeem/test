function game () { 
    const min = 1; 
    const max = 10; 
    const random_num = Math.floor(Math.random() * (max - min + 1)) + min; 
 
    console.log(random_num); // Возвращает случайное число от 1 до 10 
 
    for (let i = 0; i < 5; i++) { 
        let user_num= prompt('Я загадал число от 1 до 10, ваше предположение: ', 10); 
        console.log(typeof user_num);
        if(user_num == null){
            alert('Игра завершена. Хорошего дня');
            alert('До свидания, заходите еще');
            return -1;
        }
        else if(isNaN(Number(user_num))){
            alert('Пожалуйста, веедите число от 1 до 10');
            i -= 1;
        }
        else if(Number(user_num) < random_num){ 
            alert('Загаданное число больше, чем ' + user_num); 
        } 
        else if (Number(user_num) > random_num) { 
            alert('Загаданное число меньше, чем ' + user_num); 
        } 
        else if (Number(user_num) == random_num) { 
            alert('Поздравляю! Вы победили!') 
            break; 
        } 
    } 
    let new_game = confirm('Хотите поробовать еще раз?'); 
    if (new_game == true) { 
        return game(); 
    } 
    else { 
        alert('До свидания, заходите еще');
        return 0;
    } 
} 
 
let start = confirm ('Я загадал число от 1 до 10. У вас будет 5 попыток, чтобы его отгадать. Хотите попробовать?'); 

//console.log(typeof Number("qwe"));
//console.log(Number("qwe"));

if (start == true) { 
    game(); 
} 
else { 
    alert('Хорошо, тогда в следующий раз'); 
}