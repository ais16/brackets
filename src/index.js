module.exports = function check(str, bracketsConfig) {
  // your solution
    
    // записываем в string входящую str, с помощью цикла добавляем содержимое bracketsConfig
    let string = str;
    for (var i = 0; i < bracketsConfig.length; i++) {
        string += bracketsConfig[i];
    }

    // убираем лишние символы
    let symbols = "";
    for (var j = 0; j < string.length; j++) {
        if (string[j] != " " && string[j] != "," && string[j] != "'") {
            symbols += string[j];
        }
    }

    // задаем регулярное выражение с правильными сочетаниями открывающих и закрывающих скобок/символов
    let regEx = /\(\)|\[\]|\{\}|\|\||[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/;

    // если два стоящих рядом символа входят в регулярное выражение, вырезаем их из строки
    for (var b = 0; b < symbols.length; b++) {
        let cut = symbols[b] + symbols[b + 1];
        if (regEx.test(cut)) {
            symbols = symbols.replace(cut, "");
            b -= 2;
        }
    }

    // выводим результат
    if (symbols.length > 0) {
        return false;
    } else {
        return true;
    }

}
