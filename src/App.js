import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Catégorie from './Catégorie'
import Resto from './Resto'

function App() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://my-deliveroobackend.herokuapp.com/',
        )
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
  }, [])

  return isLoading ? (
    <div>En chargement..</div>
  ) : (
    <div>
      <Resto restaurant={data.restaurant} />
      {data.categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Catégorie className="categories" category={category} key={index} />
          )
        )
      })}
    </div>
  )
}

export default App
