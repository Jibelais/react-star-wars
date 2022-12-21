//i would probably use object destructing

const Card = ({ shipNames, model, manufacturer, capacity, consumables }) => {



    return (
        <div className = "card">
            <p id = "ship-name">{shipNames}</p>
            <p>Model : {model}</p>
            <p>Manufacturer : {manufacturer}</p>
            <p>Cargo-Capacity : {capacity}</p>
            <p>Consumables : {consumables}</p>
        </div>
        
    )

}

export default Card