import { useState } from 'react';
import {Modal,Button,ToastContainer, Toast} from 'react-bootstrap';

import './App.css';
import cartIcon from  './shopping-cart.png';


function App(){

  const FREE='Free';
  const PLUS='Plus';
  const PRO='Pro';

  const [cart,setCartItem]= useState([]);
  const [cartItemsCount,setCartItemsCount]= useState(0);
  const [showCart,setShowCart]= useState(false);
  const [showAlert,setShowAlert]= useState(false);

 const handleCartItems=(item)=>{
    let itemsInCart=[...cart];
    if(!itemsInCart.includes(item)) { 
      itemsInCart.push(item);
      setCartItemsCount(cartItemsCount+1);
      setShowCart(true);
    } else {
      setShowAlert(true);
      setTimeout(()=>{
        setShowAlert(false);
      },4000)
    }
    setCartItem(itemsInCart);
  }

  const removeFromCart=(item)=>{
    const itemIndex= (eachItem)=> eachItem===item;
    const removeIndex=cart.findIndex(itemIndex);
    cart.splice(removeIndex,1);
    setCartItem(cart);
    setCartItemsCount(cartItemsCount-1);

  }

  const toggleShowCart=()=>setShowCart(!showCart);
  const toggleHideCart=()=>setShowCart(!showCart);

  return(
    <>
    <ToastContainer className="p-3" position="top-center" variant="danger">
    <Toast show={showAlert} variant="danger">
          <Toast.Header closeButton={false}>Already in cart</Toast.Header>
          <Toast.Body>The item you are trying to add already exists in cart</Toast.Body>
      </Toast>
    </ToastContainer>
    <section className="header-container">
      <div className= "brand">
        <h4>Host Project</h4>
      </div>
      <div className= "cart-container" onClick={toggleShowCart}>
        <div className="shopping-cart">
          <img className="cart-icon" src={cartIcon} alt=""></img>
        </div>
        <div className="cart"> Cart
          <div className="cart-items">{cartItemsCount}</div>
        </div>
      </div>
      <Modal show={showCart} onHide={toggleHideCart}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Cart : {cartItemsCount} item(s)</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cart.length<=0? 'Cart is empty':cart.map((item,index)=>{
                return(
                  <div key={index} className="modal-cart">
                  <h5>{item}</h5>
                  <Button className="btn-cart-remove" onClick={()=>{removeFromCart(item)}} variant="danger" size="sm">Remove</Button>
                  </div>
                )
              })
          }
        </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleHideCart}>Close</Button>
            </Modal.Footer>
      </Modal>
    </section>
    <section className="pricing py-5">
    <div className="container">
    <div className="row">
     {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <Button onClick={()=>{handleCartItems(FREE)}} className="btn btn-primary text-uppercase">Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plus Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <Button onClick={()=>{handleCartItems(PLUS)}} className="btn btn-primary text-uppercase">Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pro Tier --> */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
              <Button onClick={()=>{handleCartItems(PRO)}} className="btn btn-primary text-uppercase">Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default App;