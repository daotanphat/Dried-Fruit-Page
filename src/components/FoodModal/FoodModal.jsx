import React, { useContext, useState } from 'react';
import './FoodModal.css';
import { StoreContext } from '../../Context/StoreContext';
import Slider from 'react-slick';

const FoodModal = ({ initialFood, onClose }) => {
    const { food_list } = useContext(StoreContext);
    const [selectedFood, setSelectedFood] = useState(initialFood); // Store selected product

    // Filter related products (excluding the current one)
    const relatedFoods = food_list.filter(item => item._id !== selectedFood._id);

    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="food-modal-overlay">
            <div className="food-modal">
                <button className="close-btn" onClick={onClose}>×</button>

                <div className="food-modal-content">
                    {/* Product Image */}
                    <div className="food-modal-image">
                        <img src={selectedFood.image} alt={selectedFood.name} />
                    </div>

                    {/* Product Information */}
                    <div className="food-modal-info">
                        <h2>{selectedFood.name}</h2>
                        <p className="price">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedFood.price)}
                        </p>
                        <p><strong>Khối lượng:</strong> 200 gram</p>
                        <p><strong>Tình trạng:</strong> Còn hàng</p>
                        <p className="description">{selectedFood.description}</p>

                        {/* "Mua hàng" Button */}
                        <button
                            className="buy-button"
                            onClick={() => window.open(`https://www.facebook.com/messages/t/572325159288591`, '_blank')}
                        >
                            Mua hàng
                        </button>
                    </div>
                </div>

                {/* Related Products Slider */}
                <h3 className="related-title">Sản phẩm liên quan</h3>
                <div className="related-slider">
                    <Slider {...sliderSettings}>
                        {relatedFoods.map(item => (
                            <div key={item._id} className="related-item" onClick={() => setSelectedFood(item)}>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p className="related-price">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FoodModal;