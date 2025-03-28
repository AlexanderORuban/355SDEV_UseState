import Restaurant from "./Restaurant";

function RestaurantsContainer(props) {
  console.log(props);
  return (
    <div className="restaurantContainer">
      {props.restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
