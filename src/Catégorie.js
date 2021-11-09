import Menus from './Menus'

const Catégorie = ({ category }) => {
  return (
    <div className="Carte">
      <h2 className="typeplats">{category.name}</h2>
      {category.meals.map((meal, index) => {
        return <Menus meal={meal} key={meal.id} />
      })}
      <div className="panier">panier</div>
    </div>
  )
}

export default Catégorie
