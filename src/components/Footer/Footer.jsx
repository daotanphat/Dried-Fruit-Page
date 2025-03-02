import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt='' />
                    <p>Tự nhiên mơ mang đến các sản phẩm ô mai và trái cây sấy hữu cơ, không hóa chất, không phụ gia,
                        đảm bảo an toàn và tốt cho sức khỏe. Hướng đến lối sống lành mạnh, dự án cung cấp giải pháp ăn vặt tự nhiên,
                        giàu dinh dưỡng, phù hợp cho mọi lứa tuổi.</p>
                    <div className="footer-social-icons">
                        <a href='https://www.facebook.com/profile.php?id=61572199116710'><img src={assets.facebook_icon} alt='' /></a>
                        <a href='https://zalo.me/0336384143'><img src={assets.zalo_icon} alt='' /></a>
                        {/* <img src={assets.linkedin_icon} alt='' /> */}
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>MENU</h2>
                    <ul>
                        <a href='#'><li>Trang chủ</li></a>
                        <a href='/'><li>Sản phẩm</li></a>
                        <a href='/about'><li>Dự án</li></a>
                        <a href='/contact'><li>Liên hệ</li></a>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>CONTACT</h2>
                    <ul>
                        <li>033 638 4143</li>
                        <li>tunhienmoorganic@gmail.com</li>
                        <a href='https://www.facebook.com/profile.php?id=61572199116710'><li>Fanpage</li></a>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 © Tu Nhien Mo - All Rights Reserved.
            </p>

        </div>
    )
}

export default Footer
