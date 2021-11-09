import Menus from './Menus'

const Catégorie = ({ category }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      {category.meals.map((meal, index) => {
        return <Menus className="menus" meal={meal} key={meal.id} />
      })}
    </div>
  )
}

export default Catégorie
