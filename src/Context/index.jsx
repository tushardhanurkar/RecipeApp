import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Globalcontext = createContext(null)

export default function GlobalState({ children }) {

    const navigate = useNavigate()
  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false)
  const [recipeList, setRecipeList] = useState([])
  const [recipeDetailsData, setRecipeDetailsData] = useState(null)
  const [favoritesList, setFavoritesList] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  async function handleSubmit(e) {
  e.preventDefault()

  if (!searchParam.trim()) return

  try {
    setLoading(true)
    setHasSearched(true)

    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
    )
    const data = await res.json()

    setRecipeList(data?.data?.recipes || [])
    setLoading(false)

    navigate('/')  

  } catch (e) {
    console.log(e)
    setRecipeList([])
    setLoading(false)
  }
}

function resetSearch() {
  setSearchParam('')
  setRecipeList([])
  setHasSearched(false)
}


  function handleAddToFav(getCurrentItem) {
    let cpyFav = [...favoritesList]

    const index = cpyFav.findIndex(
      item => item.id === getCurrentItem.id
    )

    if (index === -1) {
      cpyFav.push(getCurrentItem)
    } else {
      cpyFav.splice(index, 1)  
    }

    setFavoritesList(cpyFav)
  }

  return (
    <Globalcontext.Provider value={{
      searchParam,
      setSearchParam,
      loading,
      recipeList,
      handleSubmit,
      recipeDetailsData,
      setRecipeDetailsData,
      handleAddToFav,
      favoritesList,
      resetSearch,
      hasSearched
    }}>
      {children}
    </Globalcontext.Provider>
  )
}
