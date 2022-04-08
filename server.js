/* -------------------------------------------------------------------------- */
/*                 SET UP - Import deps and create app object                 */
/* -------------------------------------------------------------------------- */
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const budget = require('./models/budget.js')

/* -------------------------------------------------------------------------- */
/*                          Delcare Middleware                                */
/* -------------------------------------------------------------------------- */
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
/* -------------------------------------------------------------------------- */
/*                          Declare routes and router                         */
/* -------------------------------------------------------------------------- */
app.get('/budgets',(req,res)=>{
    res.render("index.ejs",{allBudgets: budget})
})

app.get('/budgets/new',(req,res)=>{
    res.render('new.ejs', {})
})

app.get('/budgets/:index',(req,res)=>{
    res.render('show.ejs',{budget: budget[req.params.index]})
})

app.post('/budgets', (req,res)=>{
    console.log(req.body)
})





/* -------------------------------------------------------------------------- */
/*                               server listener                              */
/* -------------------------------------------------------------------------- */
app.listen(PORT, ()=>console.log(`Budget app is listening on port ${PORT}`))
