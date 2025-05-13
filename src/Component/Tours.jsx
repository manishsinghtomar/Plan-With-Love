
import Card from "./Card";

function Tours({tours, removeTour}) {
  return (
    <div className="container">
      <div>
        <h2 className="title"> Plan With Love</h2>
      </div>
      <div className="cards">
           { 
               tours.map((tour) => {
                 return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>;
              } )
            }
      </div>
    </div>
  );
}

export default Tours;

//important note** - when we apply map on list passing key as props is good practice
//if we dont have id then we can use pass index as key but that's not a good practice

// read this documentation - https://legacy.reactjs.org/docs/lists-and-keys.html