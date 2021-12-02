function Card(props) {
    const { name, image, switchClicked, id } = props;
    return (
        <div onClick={switchClicked} id={id} className="card">
            <img alt={name} src={image}></img>
            <p className="plant-name">{name}</p>
        </div>
    );
}

export default Card;
