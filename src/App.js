import React, {Component} from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import DishList from './components/DishList'
import './App.css'

class App extends Component {
  state = {
    restaurantName: '',
    categories: [],
    activeCategory: 0,
    cartCount: 0,
    dishCounts: {},
  }

  componentDidMount() {
    this.fetchMenu()
  }

  fetchMenu = async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const data = await response.json()

    const restaurantData = data[0]

    this.setState({
      restaurantName: restaurantData.restaurant_name,
      categories: restaurantData.table_menu_list,
    })
  }

  setActiveCategory = index => {
    this.setState({activeCategory: index})
  }

  updateCount = (dishId, change) => {
    this.setState(prev => {
      const prevCount = prev.dishCounts[dishId] || 0

      // Prevent negative
      if (prevCount === 0 && change === -1) {
        return null
      }

      const newCount = prevCount + change

      const updatedCounts = {
        ...prev.dishCounts,
        [dishId]: newCount,
      }

      const cartCount = Object.values(updatedCounts).reduce((a, b) => a + b, 0)

      return {dishCounts: updatedCounts, cartCount}
    })
  }

  render() {
    const {restaurantName, categories, activeCategory, cartCount, dishCounts} =
      this.state

    const activeDishes =
      categories.length > 0 ? categories[activeCategory].category_dishes : []

    if (categories.length === 0) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <Header cartCount={cartCount} restaurantName={restaurantName} />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={this.setActiveCategory}
        />
        <DishList
          dishes={activeDishes}
          updateCount={this.updateCount}
          dishCounts={dishCounts}
        />
      </div>
    )
  }
}

export default App
