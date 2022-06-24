`use strict`

function getRandomChinese(length){
   let result = [];
   const chineseString = new Promise((res) => {
   setTimeout(function (){
    for (let i = 0; i < length; i++){ 
    let sign = String(Date.now()).slice(-5);
     result.push(String.fromCharCode(sign))
     res(result.join(''))}
    }, length*50)
})
chineseString.then((res) => {console.log(res)});
return chineseString;
}
getRandomChinese(5);

