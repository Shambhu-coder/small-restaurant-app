import React, {Component} from "react";
import "./index.css";

class DishItem extends Component {
  render() {
    const {dish, updateCount, count} = this.props;

    const isAvailable = dish.dish_Availability;

    return (
      <div className="dish">
        <div>
          {/* Dish Name */}
          <h1>{dish.dish_name}</h1>

          {/* Price */}
          <p>
            {dish.dish_currency} {dish.dish_price}
          </p>

          {/* Description */}
          <p>{dish.dish_description}</p>

          {/* Calories */}
          <p>{dish.dish_calories} calories</p>

          {/* Availability */}
          {!isAvailable ? (
            <p>Not available</p>
          ) : (
            <>
              {/* Counter */}
              <div className="counter">
                <button
                  onClick={() => updateCount(dish.dish_id, -1)}
                >
                  -
                </button>

                <p>{count}</p>

                <button
                  onClick={() => updateCount(dish.dish_id, 1)}
                >
                  +
                </button>
              </div>
            </>
          )}

          {/* Customization */}
          {dish.addonCat.length > 0 && (
            <p>Customizations available</p>
          )}
        </div>

        <img src={dish.dish_image} alt={dish.dish_name} />
      </div>
    );
  }
}

export default DishItem;