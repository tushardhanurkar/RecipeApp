import React, { useContext } from 'react'
import RecipeList from '../../components/Recipe-list/index.jsx'
import { Globalcontext } from "../../Context";

const Favorites = () => {

    

   
  const { favoritesList} = useContext(Globalcontext)


  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeList key={item.id} item={item} />)
      ) : (
        <div className='lg:text-4xl text-xl text-center text-black font-extrabold'>
          <h1>Nothing to Added in Favorites</h1>
        </div>
      )}
    </div>
  )
}
  


export default Favorites