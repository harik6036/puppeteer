const puppeteer=require("puppeteer");
let launch=puppeteer.launch({headless:false});
let currenntpage;
launch.then(function (browser){
   // console.log("browser opened");
//currently opened tab
//browser aur internet ko control kro
 let browserpage=browser.pages()
return browserpage;
}).then(function(page){
 currenntpage=page[0];
 let peppage=currenntpage.goto("https://www.google.com");
}).then(function (){
   let elementwaitpromise=currenntpage.waitForSelector("input[type='text']",{visible:true});
   return  elementwaitpromise;
})
.then(function (){
   //we can use keyboard.type, it will type where it is defalut
   //let type=currenntpage.keyboard.type('inputype=text',"pepcoding");
   //it will type pepcoding
   let type=currenntpage.type("input[type=text']","pepcoding");
return type;

}).then(function(){
   let press=currenntpage.keyboard.press("enter");
   return press;
}).then(function(){
  let elementwaitpromise= currenntpage.waitForSelector("h3.LC20lb.DKV0MD",{visible:true});
return elementwaitpromise;
})
.catch(function (err){
   console.log(err);
})
