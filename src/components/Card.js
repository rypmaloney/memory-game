
function Card(props) {
    const {name, image} = props;
    return (
      <div className="card">
        <img alt={name} src={image}></img>
        <p className="plant-name">{name}</p>
      </div>
    );
  }
  
  export default Card;