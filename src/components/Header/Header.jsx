import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Tự nhiên mơ</h2>
        <p>Tự nhiên mơ mang đến các sản phẩm ô mai và trái cây sấy hữu cơ, không hóa chất, không phụ gia,
          đảm bảo an toàn và tốt cho sức khỏe. Hướng đến lối sống lành mạnh, dự án cung cấp giải pháp ăn vặt tự nhiên,
          giàu dinh dưỡng, phù hợp cho mọi lứa tuổi.
        </p>
        <a href='#explore-menu'><button type='button'>Xem sản phẩm</button></a>
      </div>

    </div>
  )
}

export default Header
