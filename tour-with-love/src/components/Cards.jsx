import { useState } from "react";
import "./Cards.css";

function Cards({ id, image, price, info, name, removeTour }) {                              
    const [readmore, setReadmore] = useState(false);
    
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="Card" >
            <img src={image} className="image" alt={name} />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="Description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? "Show less" : "Read more"}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Cards;
