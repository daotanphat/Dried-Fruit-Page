import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import FoodModal from '../FoodModal/FoodModal';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <div className='food-display' id='food-display'>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={index} onClick={() => setSelectedFood(item)}>
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Popup hiển thị khi có sản phẩm được chọn */}
      {selectedFood && <FoodModal initialFood={selectedFood} onClose={() => setSelectedFood(null)} />}
    </div>
  );
};

export default FoodDisplay;