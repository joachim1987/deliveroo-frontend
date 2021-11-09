const Menus = ({ meal }) => {
  return (
    <div className="menus">
      <div>
        <h3 className="namemenu">{meal.title}</h3>

        <p className="menudescription">{meal.description}</p>

        <div className="menudetails">
          <span>{meal.price}</span>
          {meal.popular && (
            <div>
              <span>Icon</span>
              <span>Populaire</span>
            </div>
          )}
        </div>
      </div>
      {meal.picture && (
        <img
          style={{
            height: 130,
            width: 130,
            objectFit: 'cover',
            borderRadius: 5,
            marginTop: 20,
          }}
          src={meal.picture}
          alt=""
        />
      )}
    </div>
  )
}

export default Menus
