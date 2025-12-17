import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Globalcontext } from "../../Context";



const Navbar = () => {

  const { searchParam, setSearchParam, handleSubmit } = useContext(Globalcontext)

  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
      
      <h2 className='text-2xl font-semibold'>
        <NavLink to='/' className='text-white hover:text-gray-700 duration-300 text-3xl lg:text-3xl font-extrabold'>
         Recipe Finder
        </NavLink>
      </h2>

      {/* SEARCH */}
      <form onSubmit={handleSubmit} className="relative">
        <input
          type='text'
          name='search'
          placeholder='Enter Items...'
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className='bg-white p-3 px-8 pr-24 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200'
        />

        {/* BUTTON INSIDE INPUT */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600"
        >
          Search
        </button>
      </form>

      <ul className='flex gap-5'>
        <li>
          <NavLink to='/' className='text-white font-bold bg-red-500 p-2 rounded-full hover:text-gray-700 duration-300'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/favorites' className='text-white font-bold  bg-red-500 p-2 rounded-full hover:text-gray-700 duration-300'>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
