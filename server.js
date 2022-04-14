/* -------------------------------------------------------------------------- */
/*                 SET UP - Import deps and create app object                 */
/* -------------------------------------------------------------------------- */
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const budget = require('./models/budget.js')
// const totalEl = document.querySelector("#total")
// totalEl.innerText = `$ ${bank}`


/* -------------------------------------------------------------------------- */
/*                          Delcare Middleware                                */
/* -------------------------------------------------------------------------- */
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
/* -------------------------------------------------------------------------- */
/*                          Declare routes and router                         */
/* -------------------------------------------------------------------------- */


app.get("/",(req,res)=>{
    res.send('<html><body><a href="/budgets">Budget</a> </body></html>')
})

//const sumWithInitial = allAmt.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
app.get('/budgets',(req,res)=>{
    let bankAccount = 0;
    let totalColor ;
    for(let i =0; i<budget.length;i++){ 
        bankAccount= bankAccount+ budget[i].amount}
    if(bankAccount<0){
        totalColor='red'
    }else if(bankAccount >1000){
        totalColor = 'green'
    }else{
        totalColor = 'gray'
    }
    res.render("index.ejs",{allBudgets: budget, bank: bankAccount, totalColor: totalColor})

})



app.get('/budget/new',(req,res)=>{
    res.render('new.ejs')
})

app.get('/budgets/:index',(req,res)=>{
    res.render('show.ejs',{budget: budget[req.params.index]})
    
})

app.post('/budgets', (req,res)=>{
    req.body.amount = parseInt(req.body.amount)
    const a = new Date(req.body.date)
    a.setDate(a.getDate()+1)
    const b = a.toLocaleString('en-us', {month: 'long'})
    const c = a.toLocaleString('en-US', {day: 'numeric'})
    req.body.date = `${b} ${c}`
    budget.push(req.body)
    console.log(budget)
    res.redirect('/budgets')
})




//add tag option to new ejs 



/* -------------------------------------------------------------------------- */
/*                               server listener                              */
/* -------------------------------------------------------------------------- */
app.listen(PORT, ()=>console.log(`(╯°□°)╯ Budget live on port ${PORT}`))
