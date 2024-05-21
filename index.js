//Event Listerner 
    //Event Listener for submit button
    document.getElementById('submitButton').addEventListener('click', () => {
        let recipe ={
            name:document.getElementById('recipeName').value ,
            time:document.getElementById('cookTime').value,
            description:document.getElementById('description').value,
            cooked : 0
    }
            recipeSubmit(recipe)

    });

//Interaction with Json Server 
    //Submitting Data to Json
   function recipeSubmit(recipe){
        fetch('http://localhost:3000/Recipes', {
            method : 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body : JSON.stringify(recipe)
        })
        /*.then(response => {

            if(!response.ok){
                throw new Error("I can not submit the recipe, Sorry!")
            }
        })*/
        .then (response => response.json())
        .then(data => console.log(data))
        .catch(console.error)
    }
    // Get Data from json server 
    function RecipeBook(){
        fetch('http://localhost:3000/Recipes')
        /*.then(response => {
            if(!response.ok){
                throw new Error("I can't find the Recipes, Sorry!")
            }
        })*/
        .then(response => response.json())
        .then(data => {
            Recipes = data;
            Recipes.forEach(Recipes => createCards(Recipes))
        })
        .catch(console.error)
    }

    //Remove data From json server
        //Deleting dat from json server
        function removeRecipe(id){
            fetch(`http://localhost:3000/Recipes/${id}`,{
                method : 'DELETE',
        },)
        .then(response => response.json())
        .then(data => console.log( data))
        }

    //updating Json data
    function addCook(id){
        let update = {
            cooked: ++cooked
        }
        fetch(`http://localhost:3000/Recipes/${id}`,{
            method : 'PUT',
            headers : {'content-type' : 'application/json'},
            body :JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
//Interaction with the DOM
    //Making recipe cards 
    function createCards(Recipes){

        const card = document.createElement('li')
        card.className ='card', card.innerHTML = 
        `
        <div>
            <h4>${Recipes.name}</h4>
            <p>${Recipes.time} Minutes </p>
            <p>${Recipes.description}</p>
            <p id=log>Cooked ${Recipes.cooked} Times</p>
        </div>
        <div>
        <button id="cooked"> I Made This </button>
        <button id="delete"> Delete me </button>
        </div>
        `

        recipeList.appendChild(card);
       // document.querySelector('#container').appendChild(card);S
    card.querySelector('#delete').addEventListener('click', () => {
        card.remove(),
        removeRecipe(Recipes.id)     
    });  
//I want it to acess an element in the recipes array and change it by adding 1 to it 
    card.querySelector('#cooked').addEventListener('click', () => {
        addCook(Recipes.id)
    })
    }

//Calling Functions
RecipeBook()

//Debugg Test 
function debug(){
    console.log('click')
}