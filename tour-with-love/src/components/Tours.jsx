import "./Tours.css";
import Cards from './Cards';

function Tours({ tours, removeTour }) {
    return (
        <div>
            <div>
                <h2>Plan With Love</h2>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Cards key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div> 
        </div> 
    );
}

export default Tours;
