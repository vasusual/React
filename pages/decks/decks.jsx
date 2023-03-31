// import React, { useContext } from 'react'
// import {ShopContext} from '../../context/shop-context'

// export const Decks = (props) => {
// const {deckId, deckName, price, deckImage} = props.data || {};
//     const {addToCart, cartItems} = useContext(ShopContext)
//     const cartItemAmount=cartItems[deckId]
//   return (
//     <div className='deck'>
//         <img src={deckImage}/>
//         <div className='description'>
//             <p><b>{deckName}</b></p>
//             <p>${price}</p>

//         </div>
//         <button className='addToCartBttn' onClick={()=>addToCart(deckId)}>
//             Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
//             </button>
//     </div>
//   )
// }