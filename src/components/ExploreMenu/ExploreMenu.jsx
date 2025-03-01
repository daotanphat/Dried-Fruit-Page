import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Sản phẩm</h1>
      <p className='explore-menu-text'>Khám phá thực đơn đa dạng với các món ăn vặt tự nhiên, được chế biến từ những nguyên liệu hữu cơ tốt nhất.
        Chúng tôi cam kết mang đến những sản phẩm không hóa chất, không phụ gia, đảm bảo an toàn và dinh dưỡng, giúp bạn tận hưởng hương vị thuần khiết từ thiên nhiên.</p>
      {/* <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div> */}
      <hr />
    </div>
  )
}

export default ExploreMenu
