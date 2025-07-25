import ReactMarkdown from 'react-markdown'

export function ClaudeRecipe(props){
return(
        <section className="suggested-recipe-container" aria-live="polite">
            {props.recipe?<h2>Chef Claude Recommends:</h2>:null}
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
)}