const express = require('express');
const fs = require('fs');
const path = require('path');
const movies = require('./movies.json');
const port = 8000;
// function findMovie(movieObj){
//     if (movieObj.id===parsedId){
//         return movieObj
//     }

//

const app = express();
app.use(express.json())

app.get('/api/movies/:id', (request, response) => {
    const id=request.params.id
    const parsedId=parseInt(id)//
    // console.log(parent)
    const movie=movies.find((movieObj)=>movieObj.id===parsedId)
    return response.send(movie)

});

//POST
app.post('/api/movies/post',(req, res)=>{
    const{id, year,rating,description,title,poster,genre}=req.body
    const newdata={id, year,rating,description,title,poster,genre}
    movies.push(newdata);
        return res.send(movies)
    
});
//PATCH-- UPDATE A SPECIFIC 

app.patch('./api/movies/patch',(req,res)=>{
    const id=req.params.id;
    const parseId=parseInt(id)// convert a string to an integer 
})
//PUT -- UPDATE 
app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
});


































//const Data={
//         "id": 1,
//         "title": "Inception",
//         "year": 2010,
//         "genre": "Sci-Fi",
//         "rating": 8.8,
//         "poster": "inception.jpg",
//         "description": "A thief enters people's dreams to steal secrets."
//    // }
    // read a value 
   // console.log(Data .description);
    //console.log(Data.rating)
   // console.log(Data.year)
    //stringfy()
   // console.log(typeof(Data))
   // const newData= JSON.stringify(Data)
   // console.log(typeof(newData));


    
