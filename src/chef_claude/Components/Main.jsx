import { useState } from "react"
import { IngredientsList } from "./IngredientsList"
import { ClaudeRecipe } from "./ClaudeRecipe"
import { getRecipeFromMistral } from "./AI"
export function Main(){
    const [ingredients, setIngredients]=useState([])

    const [recipe, setRecipe] = useState("")
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredients(formData){
        // when we put the addIngredients on the action attribute it prevents the page reload and also reset our input field  
        const newIngredient = formData.get("ingredient") // get data from the form element
        setIngredients((prevIngredients)=>[...prevIngredients, newIngredient])
        console.log(ingredients)
    }
 
    return(
        <article className="wrapper">
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
                    getRecipe={getRecipe}
                /> 
            : null}
            <ClaudeRecipe recipe={recipe}/>
        </article>
    )
} 