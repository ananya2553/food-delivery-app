import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

    const { food_list, searchQuery } = useContext(StoreContext)

    console.log("FoodDisplay Rendered");
    console.log("Category:", category);
    console.log("Food List:", food_list);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    console.log("Checking item:", item.name, "Category:", item.category);
                    if (category === "All" || category === item.category) {
                        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        }
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay