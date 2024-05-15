//Event Listerner 
    //Event Listener for submit button
    document.getElementById('submitButton').addEventListener('click', console.log('click'))/*works*/

    //Event Listener for Delete button 
    //document.getElementById('delete').addEventListener('click', console.log('delete'))/*can't work here*/




//Interaction with Json Server 
    //Submitting Data to Json
    function recipeSubmit(){
        fetch('http://localhost:3000/Recipes', {
            method : 'POST',
            headers: {
                "content-type": application/json
            },
            body : JSON.stringify(recipeCard)
        })
        .then(response => {

            if(!response.ok){
                throw new Error("I can not submit the recipe, Sorry!")
            }
        })
        .then (response => response.json())
        .then(response => Createcards(response))
        .catch(console.error())
    }
    // Get Data from json server 
    function RecipeBook(){
        fetch ('http://localhost:3000/Recipes')
        .then(response => response.json())
        .then(Recipes => console.log(Recipes))
        .then(Recipes => Recipes.forEach(Createcards(Recipes)))
    }

//Interaction with the DOM
    //Making recipe cards 
    function Createcards(){
        const card = document.createElement('li')
        card.className ='card', card.innerHTML = 
        `
        <div>
            <h4>${Recipes.name}</h4>
            <p>${Recipes.time} Minutes </p>
            <p>${Recipes.description}</p>
            <p>${Recipes.cooked}</p>
        </div>
        <div>
        <button id="cooked"> I Made This </button>
        <button id="delete"> Delete me </button>
        </div>
        `
        //document.getElementById('delete').addEventListener('click', console.log('delete'))
    }

    //


//Calling Functions
function startUp(){
    RecipeBook();
    Createcards(Recipes);
    Console.log('called function')
}
startUp()