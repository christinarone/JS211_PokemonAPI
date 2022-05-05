fetch("https://pokeapi.co/api/v2/pokemon")
//the fetch function allows me to fetch info from the url
//fetch function returns a promise
    .then(results => results.json()) 
    //using method .then
    //js object notation; format for storing data
    //method .then is used to handle the response
    .then(data => {
        let list = document.getElementById('pokemonList')
        data.results.map(pokemon => {
            let li = document.createElement('li')
            console.log(pokemon)
            //this is the next promise; .then

            fetch(pokemon.url).then(response=>response.json()).then(data=>{
                //the response is the stream of data
                //we get the response, but need to read the data and store it
                console.log(data)
                li.innerHTML=`
                    <p>${pokemon.name}</p>
                    <img src="${data.sprites.front_default}" />
                `
        
            let searchButton = document.getElementById("searchButton");
            searchButton.addEventListener("click", function(){
                let input = document.getElementById("input");
                let getPokemonInfo = input.value;
                console.log("text = ", getPokemonInfo);
            })
            
                // searchButton.addEventListener("click",function(){
                //     let input = document.getAnimations().forEach(
                //         function(animation){
                //             animation.playbackRate *= .10;
                //             console.log(animation);
                //         }
                    // )
                // var shrinkPokemon = function(){
                //     pokemonChange.playbackRate = -1;
                //     pokemonChange.play();
                // }
                // //click where pokemon shrinks
                // bottle.addEventListener("mousedown", pokemonChange, false);
                // bottle.addEventListener("touchstart", pokemonChange, false);
                // //     fetchNewPokemon(id + 1);
                //     console.log(id)
                // });

                
                //add search or click--easiest..like choose characters that have fire
            })
            
            list.appendChild(li)
        })
        console.log(data)
    })
