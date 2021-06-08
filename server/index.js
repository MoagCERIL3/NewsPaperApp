const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();
const PORT = 3001;
const db = require('./db/dbConnection');

// API
const businessApi = require("./models/businessCategory");
const sportsApi = require('./models/sportsCategory');
const entertainmentApi = require('./models/entertainmentCategory');
const healthApi = require('./models/healthCategory');
const allCategoriesApi = require('./models/allCategories')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.disable('etag');

//db connection;
db.connect((err) => {
    if(err)  console.error('error connecting: ' + err.stack);
    else console.log("MySql db connected ")

});

//Routes
app.get('/breakingNews',(req, res) => {

    //Loading from API
    businessApi.load();
    sportsApi.load();
    entertainmentApi.load();
    healthApi.load();

    
    let query ='SELECT * FROM nabaatv.article order by publishedAt DESC';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });
});

app.get('/business',(req,res)=> {

    businessApi.load();

    let query ='SELECT * FROM article WHERE category LIKE "business" ORDER BY publishedAt DESC ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });
});

app.get('/sports',(req,res)=> {

    sportsApi.load();

    let query ='SELECT * FROM article WHERE category LIKE "sports" ORDER BY publishedAt DESC';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });
});

app.get('/entertainment',(req,res)=> {

    entertainmentApi.load();

    let query ='SELECT * FROM article WHERE category LIKE "entertainment" ORDER BY publishedAt DESC ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });
});

app.get('/health',(req,res)=> {

    healthApi.load();

    let query ='SELECT * FROM article WHERE category LIKE "health" ORDER BY publishedAt DESC';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });
});

app.get('/topbreakingnews',(req,res)=> {

    //Loading from API
    businessApi.load();
    sportsApi.load();
    entertainmentApi.load();
    healthApi.load();

    let query ='SELECT * FROM nabaatv.article order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/topbusiness',(req,res)=> {

    //Loading from API
    businessApi.load();
    

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "business" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/topsports',(req,res)=> {

    //Loading from API
    
    sportsApi.load();
    

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "sports" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/topentertainment',(req,res)=> {

    //Loading from API
    entertainmentApi.load();


    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "entertainment" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/tophealth',(req,res)=> {

    //Loading from API
    healthApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "health" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/allcategories',(req,res)=> {

    //Loading from API
    allCategoriesApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "none" order by publishedAt DESC  ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/topallcategories',(req,res)=> {

    //Loading from API
    allCategoriesApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "none" order by publishedAt DESC limit 1 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/healthMostPopular',(req,res)=> {

    //Loading from API
    healthApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "health" order by publishedAt DESC limit 4 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/sportsMostPopular',(req,res)=> {

    //Loading from API
    sportsApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "sports" order by publishedAt DESC limit 4 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/businessMostPopular',(req,res)=> {

    //Loading from API
    businessApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "business" order by publishedAt DESC limit 4 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});

app.get('/entertainmentMostPopular',(req,res)=> {

    //Loading from API
    entertainmentApi.load();

    let query ='SELECT * FROM nabaatv.article WHERE category LIKE "entertainment" order by publishedAt DESC limit 4 ';
    db.query(query,(err,result) =>{
        if(err) {
            console.error('Error fetching data: ' + err.stack);
        }else {
            console.log("Data fetched ");
            res.json(result);
            
        }
    });

});



//Port
app.listen(PORT,() => {
    console.log("running on port",PORT );
})