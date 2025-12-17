import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Globalcontext } from "../../Context";

const Details = () => {
  const { id } = useParams()
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFav,
    favoritesList
  } = useContext(Globalcontext)  

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        )
        const data = await response.json()

        if (data?.data) {
          setRecipeDetailsData(data.data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getRecipeDetails()
  }, [id, setRecipeDetailsData])

  return (
    <div className="container mx-auto py-6 sm:py-10 px-4 sm:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">

      {/* TEXT SECTION */}
      <div className="flex flex-col gap-4 justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold bg-red-700 rounded-2xl p-3 text-white mb-1 sm:mb-2">
          {recipeDetailsData?.recipe?.title}
        </h2>

    

        <button
          onClick={() => handleAddToFav(recipeDetailsData?.recipe)}
          className="md:w-50 sm:w-auto p-3 px-6 sm:px-8 
                     rounded-lg text-sm uppercase font-medium tracking-wider 
                     mt-3 sm:mt-4 inline-block shadow-md 
                     bg-red-500 text-white hover:bg-gray-800 duration-200"
        >
          {
            favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              item => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? 'Remove From Favorites'
              : 'Add To Favorites'
          }
        </button>

        {/* INGREDIENTS */}
        <div className="mt-4 sm:mt-6">
          <span className="text-xl sm:text-2xl font-semibold text-white block mb-2 sm:mb-3">
            Ingredients
          </span>

          <ul className="flex bg-red-700 p-2 rounded-lg flex-col gap-2 list-disc pl-5">
            {
              recipeDetailsData?.recipe?.ingredients?.map((ingredient, index) => (
                <li key={index} className="text-sm sm:text-base font-bold  text-white">
                  {ingredient.quantity || ''} {ingredient.unit || ''} {ingredient.description}
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="h-64 sm:h-96 overflow-hidden rounded-xl group shadow-lg">
        <img
          src={recipeDetailsData?.recipe?.image_url}
          alt="recipe"
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
        />
      </div>

    </div>
  )
}

export default Details
