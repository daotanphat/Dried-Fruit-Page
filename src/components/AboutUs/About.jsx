import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>Giới Thiệu Về Dự Án</h1>
        <p className="about-description">
          "Tự nhiên mơ" là một dự án cung cấp các sản phẩm ô mai và trái cây sấy hữu cơ, không hóa chất, không phụ gia, 
          đảm bảo an toàn và tốt cho sức khỏe. Hướng đến lối sống lành mạnh, chúng tôi mang đến giải pháp ăn vặt tự nhiên, 
          giàu dinh dưỡng, phù hợp cho mọi lứa tuổi.
        </p>

        <div className="about-content">
          <div className="about-card">
            <h3>Sứ Mệnh</h3>
            <p>Đem đến các sản phẩm ăn vặt an toàn, bổ dưỡng, góp phần nâng cao sức khỏe cộng đồng.</p>
          </div>

          <div className="about-card">
            <h3>Tầm Nhìn</h3>
            <p>Trở thành thương hiệu hàng đầu trong lĩnh vực thực phẩm tự nhiên và hữu cơ tại Việt Nam.</p>
          </div>

          <div className="about-card">
            <h3>Cam Kết</h3>
            <p>Sản phẩm không chất bảo quản, không phẩm màu, giữ trọn hương vị tự nhiên.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;