var string = prompt("Ввод для реверса: "); var stringRevers = ""
for (i = string.length-1; i >= 0; i--)
{stringRevers += string[i]}
console.log(stringRevers)