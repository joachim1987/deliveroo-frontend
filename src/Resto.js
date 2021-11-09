const Resto = ({ restaurant }) => {
  return (
    <div className="blocresto">
      <div>
        <h1>{restaurant.name}</h1>
        <p className="textresto">{restaurant.description}</p>
      </div>
      <img
        style={{ height: 200, width: 350, marginRight: 20 }}
        src={restaurant.picture}
        alt=""
      />
    </div>
  )
}

export default Resto
