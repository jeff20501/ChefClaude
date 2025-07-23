import { useState } from "react"
import { IngredientsList } from "./IngredientsList"
import { ClaudeRecipe } from "./ClaudeRecipe"
export function Main(){
    const [ingredients, setIngredients]=useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    
    const [recipeShown, setRecipeShown] = useState(false)

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredients(formData){
        // when we put the addIngredients on the action attribute it prevents the page reload and also reset our input field  
        const newIngredient = formData.get("ingredient") // get data from the form element
        setIngredients((prevIngredients)=>[...prevIngredients, newIngredient])
        console.log(ingredients)
    }
 
    return(
        <main className="wrapper">
            <form action={addIngredients} className="input"> 
                <input
                id="ingredient" 
                aria-label="Add ingredients" 
                className="input-field"
                placeholder="eg. oregon"  
                name="ingredient">
                </input>
                <button  className="add-ingredients">Add ingredients</button>
            </form>

           {ingredients.length > 0 ? <IngredientsList 
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                /> 
            : null}
            {recipeShown ? <ClaudeRecipe/>:undefined}
        </main>
    )
} 