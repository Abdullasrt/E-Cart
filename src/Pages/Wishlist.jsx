import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';

function Wishlist() {
  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
  // console.log(wishlist);
  const handleRemoveWishlist = (product) => {
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }
  return (
    <>
    <Header/>
    <div style={{ marginTop: '150px' }}>
      <div className='container'>
        <Row className='mt-5'>
          {wishlist?.length > 0 ? wishlist?.map((product, index) => (
            <Col key={index} style={{ marginBottom: '10px' }}>
              <Card className='card shadow' style={{ width: '18rem' }}>
                <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product?.title.slice(0, 20)}....</Card.Title>
                  <div className='d-flex justify-content-between '>
                    <button onClick={() => dispatch(removeFromWishlist(product?.id))} className='btn btn-link'><i className='fa-solid fa-heart-circle-minus text-danger'></i></button>
                    <button onClick={() => handleRemoveWishlist(product)} className='btn btn-link'><i className='fa-solid fa-cart-plus text-success'></i></button>

                  </div>
                </Card.Body>
              </Card>

            </Col>
          )) :
            <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
              <img src="data:image/png;base64,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" alt="empty cart" />
              <h2>Your wishlist is Empty!!!</h2>

            </div>
          }
        </Row>
      </div>
    </div>
    </>
  )
}

export default Wishlist