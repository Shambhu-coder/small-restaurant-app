import React, {Component} from 'react'
import DishItem from '../DishItem'
import './index.css'

class DishList extends Component {
  render() {
    const {dishes, updateCount, dishCounts} = this.props

    return (
      <div>
        {dishes.map(dish => (
          <DishItem
            key={dish.dish_id}
            dish={dish}
            updateCount={updateCount}
            count={dishCounts[dish.dish_id] || 0}
          />
        ))}
      </div>
    )
  }
}

export default DishList
