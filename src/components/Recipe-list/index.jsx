import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({ item }) => {
  return (
    <div className='flex flex-col w-full sm:w-70 overflow-hidden p-4 sm:p-5  m-3
                    bg-red-700 shadow-xl gap-4 sm:gap-0 
                    rounded-2xl '>
      
      <div className='h-36 sm:h-40 flex justify-center overflow-hidden items-center rounded-xl'>
        <img 
          src={item?.image_url} 
          alt='recipe item' 
          className='block w-full h-full object-cover'
        />
      </div>

      <div>
        <span className='text-xs sm:text-sm text-white font-medium'>
          {item?.publisher}
        </span>

        <h4 className='font-bold text-lg sm:text-2xl truncate text-white'>
          {item?.title}
        </h4>

       <Link 
  to={`/details/${item.id}`} 
  className="text-xs sm:text-sm mt-4 sm:mt-5 
             p-2 sm:p-3 px-5 sm:px-8 
             rounded-lg uppercase font-medium tracking-wider 
             inline-block shadow-md bg-green-500 text-white">
  Recipe Details
</Link>

      </div>

    </div>
  )
}

export default RecipeList
