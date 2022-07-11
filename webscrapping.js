// to do
//last bowl commentarry
//wining team me  highest wicket taker and no of wickets taken
//batsmen ka birthday print krna he(multiple page scrapping)

const request= require('request');
const jsdom= require("jsdom");
const {JSDOM}=jsdom;
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary",cb);
function cb(err,html){
    if(err)
    {
        console.log("error");
    }
    else{
        const dom=new JSDOM(html);
        const document= dom.window.document;
        console.log(dom);

    }

}