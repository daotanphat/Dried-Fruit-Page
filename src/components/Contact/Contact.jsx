import React from "react";
import "./Contact.css";
import { assets } from '../../../assets/assets';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Liên hệ</h1>
                <p>Trang chủ &gt; Liên hệ</p>
            </div>

            <div className="contact-container">
                {/* Left Section: Contact Info & Form */}
                <div className="contact-info">
                    <h3>Tự nhiên mơ</h3>
                    <p>📍 Khu Công nghệ cao Hòa Lạc, Km29 Đại lộ Thăng Long, huyện Thạch Thất, Hà Nội</p>
                    <p>📞 033 638 4143</p>
                    <p>✉ tunhienmoorganic@gmail.com</p>
                    <a href='https://www.facebook.com/profile.php?id=61572199116710'>
                        👉 Fanpage
                    </a>

                    <h3>Liên hệ với chúng tôi</h3>
                    <form>
                        <input type="text" placeholder="Họ và tên" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Nội dung" rows="4" required></textarea>
                        <button type="submit">Gửi liên hệ</button>
                    </form>
                </div>

                {/* Right Section: Google Map */}
                <div className="contact-map">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.304033164801!2d105.52270890987286!3d21.012421688260616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc60e7d3f19%3A0x2be9d7d0b5abcbf4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgSMOgIE7hu5lp!5e1!3m2!1svi!2s!4v1740717919148!5m2!1svi!2s"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;