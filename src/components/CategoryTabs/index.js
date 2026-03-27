import React, {Component} from 'react'
import './index.css'

class CategoryTabs extends Component {
  render() {
    const {categories, activeCategory, setActiveCategory} = this.props

    return (
      <div className="tabs">
        {categories.map((cat, index) => (
          <button
            type="button"
            key={cat.menu_category_id}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => setActiveCategory(index)}
          >
            {cat.menu_category}
          </button>
        ))}
      </div>
    )
  }
}

export default CategoryTabs
