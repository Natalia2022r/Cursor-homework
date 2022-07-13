`use strict`

async function getRandomChinese(length) {
  if(Number.isInteger(length) && length > 0){
      let str = "";

      for (let i = 0; i < length; i++) {
          const symbolPromise = new Promise (function(resolve) {
              setTimeout (function() {
                  const sign = String(Date.now()).slice(-5);
                  const chineseSymbol = String.fromCharCode(sign);
                  resolve(chineseSymbol)
              }, 50)
          })

          str = str.concat(await symbolPromise);
         
      }
      return str;
  }
}

getRandomChinese(5).then((resolve) => console.log(resolve));

