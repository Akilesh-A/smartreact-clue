// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function SingleMenudetails() {
//   const { id } = useParams(); // Get the ID from the URL
//   const [menuItem, setMenuItem] = useState([]); // State for the menu item details
//   const [loading, setLoading] = useState(true); // State for loading
//   const [error, setError] = useState(null); // State for error handling

//   useEffect(() => {
//     // Fetch the menu item details
//     const fetchMenuItem = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${process.env.REACT_APP_PRODUCT_API}/getmenu/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch menu item');
//         }
//         const data = await response.json();
//         setMenuItem(data.productMenu); 
//       } catch (err) {
//         setError(err.message); 
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchMenuItem();
//   }, [id]);

//   // Handle loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Render the menu item details
//   return (
//     <div>
//       {menuItem ? (
//         <>
//           <h1>{menuItem.name}</h1>
        
//         </>
//       ) : (
//         <div>Menu item not found</div>
//       )}
//     </div>
//   );
// }

// export default SingleMenudetails;






// import React from 'react';
// import { useParams } from 'react-router-dom';

// function SingleMenudetails({ menuitems }) {
//   const { id } = useParams(); // Get the 'id' from the URL
//   console.log(id);

//   // Find the product using the id
//   const product = menuitems?.find((item) => item._id === id);

//   if (!product) {
//     return <div>Product not found</div>; // Handle case where product is not found
//   }

//   return (
//     <div className="row whole_product">
//       <div
//         className="col-md-5 col-12 img-fluid animate__animated animate__bounceInLeft"
//         id="product_image"
//       >
//         <img src={product.images[0]?.image} alt="Product" />
//       </div>

//       <div className="col-md-7 col-12 mt-5 animate__animated animate__bounceInRight">
//         <h3>{product.name}</h3>
//         <p id="product_id">
//           Product ID: <br /> {product._id}
//         </p>

//         <hr />

//         <div className="rating-outer">
//           <div
//             className="rating-inner"
//             style={{ width: `${(product.ratings / 5) * 100}%` }}
//           ></div>
//         </div>

//         <hr />

//         <p id="product_price">
//           <i className="fa fa-inr" aria-hidden="true"></i> {product.price}
//         </p>

//         <div className="stockCounter">
//           <span className="btn btn-danger minus">-</span>
//           <input
//             type="number"
//             className="form-control count"
//             value="1"
//             readOnly
//           />
//           <span className="btn btn-primary plus">+</span>
//         </div>
//         <button
//           type="button"
//           id="cart_btn"
//           className="btn btn-secondary cartButton"
//         >
//           Add to Cart
//         </button>

//         <hr />

//         <div className="statusCheck">
//           <p className="statusCheck">Status: </p>
//           <span
//             id="stock_status"
//             className={product.stock > 0 ? 'text-success' : 'text-danger'}
//           >
//             {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
//           </span>
//         </div>

//         <hr />

//         <h4 className="mt-2">Description:</h4>
//         <p>{product.description}</p>

//         <hr />

//         <p id="product_seller" className="mb-3">
//           Sold by: <strong>{product.seller}</strong>
//         </p>

//         <div className="rating w-50">
//           {/* This is where your rating component or rating display logic could go */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleMenudetails;


import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SingleMenudetails() {

  const {id}=useParams();  
  console.log(id);
  
  return (
    <div>
      
    </div>
  )
}

export default SingleMenudetails

