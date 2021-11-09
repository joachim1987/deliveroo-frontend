const Menus = ({ meal }) => {
  return (
    <div
      onClick={() => {
        console.log("J'ai cliqué sur le menu : ", meal.id)
      }}
    >
      <h3>{meal.title}</h3>
      <p>{meal.description}</p>
      <span>{meal.price}</span>
      {meal.picture && (
        <img style={{ height: 100 }} src={meal.picture} alt="" />
      )}
      {meal.popular && (
        <div>
          <span>Icon</span>
          <span>Populaire</span>
        </div>
      )}
    </div>
  )
}

export default Menus
