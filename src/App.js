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
    console.log(cart,cartItemsCount);
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
        <div class="shopping-cart">
          <img className="cart-icon" src={cartIcon}></img>
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
        {cart.length<=0? 'Cart is empty':cart.map((item)=>{
                return(
                  <div className="modal-cart">
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
    <section class="pricing py-5">
    <div class="container">
    <div class="row">
     {/* <!-- Free Tier --> */}
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a onClick={()=>{handleCartItems(FREE)}} class="btn btn-primary text-uppercase">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plus Tier --> */}
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a onClick={()=>{handleCartItems(PLUS)}} class="btn btn-primary text-uppercase">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pro Tier --> */}
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a onClick={()=>{handleCartItems(PRO)}} class="btn btn-primary text-uppercase">Add to cart</a>
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