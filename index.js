// Power of node package 

const axios = require('axios');
const { Telegraf }= require('telegraf');

//how to get secret token for bot
// open telegram search botfather
// /Start  to read type /start and enter
// create new bot type /newbot
// give botname without /
//  /  start is telegram command
// give username without /
// t.me/helpcodersbot.    my link
// dotenv package to hide token

let binarysearch=`// location of x in given array arr[l..r] is present,
// otherwise -1
 
 function binarySearch(arr, x)
{    
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
  
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
  
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            r = mid - 1;
             
        // Else the element can only be present
        // in right subarray
        else
            l = mid + 1;
    }
  
    // We reach here when element is not
    // present in array
    return -1;
}
 
    arr =new Array(2, 3, 4, 10, 40);
    x = 10;
    n = arr.length;
    result = binarySearch(arr, x);
     
(result == -1) ? console.log("Element is not present in array")
               : console.log ("Element is present at index " + result);
                `
const bot = new Telegraf(`7027370319:AAEqfSJcQ9n7xdBl96GpGkyzw6S1Ogl5tds`);

bot.start((ctx) => ctx.reply('Welcome coders community in JS, check your requirement using /code_name and put your all requirement in small letter '));

bot.command('binarysearch', (ctx) => ctx.reply(binarysearch));

bot.command('whomadethis', (ctx) => ctx.reply("Gaurav"));

bot.on('sticker',(ctx)=>ctx.reply('❤️'));

// async for download task

bot.command('validparan',async function(ctx){
    let response= await axios.get('https://raw.githubusercontent.com/GauravS-07/DSA/master/Aug_12/validParenthesis.js')
    return ctx.reply(response.data)
});

bot.command('binarytree',async function(ctx){
    let response= await axios.get('https://raw.githubusercontent.com/GauravS-07/DSA/master/Aug_29/trees.js')
    return ctx.reply(response.data)
});


bot.command('stack',async function(ctx){
    let response= await axios.get('https://raw.githubusercontent.com/GauravS-07/DSA/master/Aug_12/StacksUsingLL.js')
    return ctx.reply(response.data)
});

bot.command('stackusingarray',async function(ctx){
    let response= await axios.get('https://raw.githubusercontent.com/GauravS-07/DSA/master/Aug_12/StacksUsingArrays.js')
    return ctx.reply(response.data)
});



bot.launch()  //to run bot

