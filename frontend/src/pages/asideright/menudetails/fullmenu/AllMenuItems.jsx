import React from 'react'

function AllMenuItems({menuitems}) {
  return (
//     <div className="all-products-section">
//     <h2>All Products</h2>
//     <div className="menu-items">
//       {menuitems.map((menu) => (
//         <div key={menu.id} className="menu-item">
//           <img src={menu.img} alt={menu.title} className="menu-img" />
//           <h3>{menu.title}</h3>
//           <p>{menu.description}</p>
//           <span>Price: ${menu.price}</span>
//         </div>
//       ))}
//     </div>
//   </div>
<div className="row">
  {menuitems.map((menu) => (
    <div className="col-md-4 text-center" key={menu.id}>
      <div className="special-img">
        <a href="#">
          <img src={menu.images[0].image} alt={menu.name} />
        </a>
      </div>
      <a href="#" className="ser-title text-uppercase fw-bold">
        {menu.name}
      </a>
    </div>
  ))}
 
</div>
  )
}

export default AllMenuItems
