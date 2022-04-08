/* -------------------------------------------------------------------------- */
/*                 SET UP - Import deps and create app object                 */
/* -------------------------------------------------------------------------- */
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const budgets = require('./models/budget.js')

/* -------------------------------------------------------------------------- */
/*                          Delcare Middleware                                */
/* -------------------------------------------------------------------------- */
app.use(express.urlencoded({extended: false}))
/* -------------------------------------------------------------------------- */
/*                          Declare routes and router                         */
/* -------------------------------------------------------------------------- */
app.get('/budgets',(req,res)=>{
    res.render("index.ejs",{allBudgets: budgets})
})

app.get('/budgets/new',(req,res)=>{
    res.render('new.ejs', {})
})

app.get('/budgets/:index',(req,res)=>{
    res.render('show.ejs',{budget: budgets[req.params.is]})
})

app.post('/budgets', (req,res)=>{
    console.log(req.body)
})





/* -------------------------------------------------------------------------- */
/*                               server listener                              */
/* -------------------------------------------------------------------------- */
app.listen(PORT, ()=>console.log(`Budget app is listening on port ${PORT}`))
