import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Shop from '../../views/shop/Shop';
import ListProduct from '../../views/list-product/ListProduct';
import ListOrder from '../../views/list-order/ListOrder';
import LoadData from '../../views/load-data/LoadData';
import ShowCart from '../../views/showcart/ShowCart';
import Checkout from '../../views/checkout/Checkout';
import Order from '../../views/order/Order';
import Login from '../../views/login/Login';
import Logout from '../../views/logout/Logout';
import Profile from '../../views/profile/Profile';
import Orders from '../../views/orders/Orders';
import Admin from '../../views/admin/Admin';
import SingleProduct from '../../views/single-product/SingleProduct';

function Main(props) {
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => props.onRouteUpdate(location));
  }, [history, props]);

  return (
    <Switch>
      <Route exact path="/" component={Shop} />
      <Route exact path="/listorder" component={ListOrder} />
      <Route exact path="/listprod" component={ListProduct} />
      <Route exact path="/loaddata" component={LoadData} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/order/:customerId" component={Order} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/showcart" component={ShowCart} />
      <Route exact path="/product/:productId" component={SingleProduct} />
    </Switch>
  );
}

export default Main;
