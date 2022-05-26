
document.getElementById("submit").addEventListener("click",getdata);

function getdata(){
    var query=document.getElementById("movie").value;

    let res;
    // let data=[];
    // const url=`http://www.omdbapi.com/?apikey=a1333184&s=${query}`;
    
    const container=document.getElementById("container");
    
    fetch(`http://www.omdbapi.com/?apikey=a1333184&s=${query}`)
    .then(function(res){
    
        return res.json();
      
    })
    .then(function(res){
        data=res.Search;
        console.log(data);
        appendData(data);
    
    })
    .catch(function(err){
        console.log(err);
    });

   
}


function appendData(data){

    if(data==undefined){
        let img1=document.createElement("img");
        img1.src='http://i.pinimg.com/originals/ef/8b/bd/ef8bbd4554dedcc2fd1fd15ab0ebd7a1.gif';
        
        document.getElementById("container").append(img1);
            }


data.forEach(function(el){

    

let div=document.createElement("div");

let title=document.createElement("p");
title.innerText=el.Title;

let year=document.createElement("p");
year.innerText=el.Year;

let image=document.createElement("img");
image.src=el.Poster;
let imdb=document.createElement("p");

imdb.innerText=el.imdbID;

div.append(image,title,year,imdb);
document.getElementById("container").append(div);

if(data.imdb<8.5){
    container.append(imdb);
}

    });
}

