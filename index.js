//Event Listerner 
    //Event Listener for submit button
    document.getElementById('submitButton').addEventListener('click', ) /*works*/

    //Event Listener for Delete button 
    //document.getElementById('delete').addEventListener('click', () =>{ console.log('delete')})/*can't work here*/

//Definig Var
    //const recipeCard = 



//Interaction with Json Server 
    //Submitting Data to Json
   function recipeSubmit(){
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
        .then(data => createCards(data))
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
            console.log(Recipes);
            Recipes.forEach(Recipes => createCards(Recipes))
        })
        .catch(console.error)
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
            <p>Cooked ${Recipes.cooked} Times</p>
        </div>
        <div>
        <button class="cooked"> I Made This </button>
        <button class="delete"> Delete me </button>
        </div>
        `

        recipeList.appendChild(card)
       // document.querySelector('#container').appendChild(card);S
        //document.getElementById('delete').addEventListener('click', console.log('delete'))
    }

    //Record data
    function addRecipes(e){
        e.preventDefault()
          let recipe = {
            name:e.target.name.value,
            description:e.target.description.value,
            time:e.target.time.value,
            cooked: 0  }
        recipeSubmit(recipe)
      }


//Calling Functions
RecipeBook()




//Debugg Test 
function debug(){
    console.log('click')
}