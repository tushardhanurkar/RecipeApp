import React, { useContext } from 'react'
import RecipeList from '../../components/Recipe-list/index.jsx'
import { Globalcontext } from "../../Context";

import { useEffect } from "react"


const Index = () => {


  const { recipeList, loading, hasSearched } = useContext(Globalcontext)

  if (loading) return <div className="text-white font-extrabold mx-auto  my-auto">Loading... Please wait</div>

  return (
<div className="pt-8 container mx-auto flex flex-wrap justify-center gap-10">

      {/* SHOW RECIPES */}
      {recipeList.length > 0 &&
        recipeList.map(item => (
          <RecipeList key={item.id} item={item} />
        ))
      }

      {/* INITIAL MESSAGE */}
      {!hasSearched && (
       <div className="flex flex-col items-center text-center mt-0 md:mt-40 gap-4">
  
  <h1 className="text-white text-3xl lg:text-5xl font-extrabold
                 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
    Search recipes by ingredient and explore their details
  </h1>

  <h3 className="text-white text-lg lg:text-4xl font-extrabold opacity-90">
    Eg – Egg, Corn, Potato
  </h3>

</div>

      )}

      {/* NO RESULT MESSAGE */}
      {hasSearched && recipeList.length === 0 && (
        <h1 className="text-white text-3xl lg:text-5xl font-extrabold text-center
                       drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          No recipes found. Try searching with a different ingredient.
        </h1>
      )}

    </div>
  )
}

export default Index
