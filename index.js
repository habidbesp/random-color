function randomColor() {
    let colorString = "0123456789ABCDEF";
    let arrOfChar = colorString.split("");
    let arrOfColor = [];

    for (let i = 0; i < arrOfChar.length; i++){
        arrOfColor.push(arrOfChar[Math.floor(Math.random() * arrOfChar.length)]);
    }

    let charsOfColor = arrOfColor.slice(0,6).join("");
    let color = `#${charsOfColor}`;
    

    document.querySelector(".color-box").style.background = color;
    document.querySelector(".hex").innerHTML = `<h1>${color}</h1>`;
}
