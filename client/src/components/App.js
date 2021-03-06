import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../hoc/auth';
// pages for this product
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import NavBar from './views/NavBar';
import Footer from './views/Footer';
import UploadProductPage from './views/UploadProductPage';
import DetailProductPage from './views/DetailProductPage';
import CartPage from './views/CartPage';
import MovieApp from './views/MovieApp';
import MovieDetailPage from './views/MovieApp/MovieDetailPage';
import FavoritePage from './views/MovieApp/FavoritePage';
import UploadVideoPage from './views/YoutubePage/UploadVideoPage';
import YoutubePage from './views/YoutubePage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie" component={Auth(MovieApp, null)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
          <Route
            exact
            path="/movie/:movieId"
            component={Auth(MovieDetailPage, null)}
          />
          <Route
            exact
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          />
          <Route
            exact
            path="/product/:productId"
            component={Auth(DetailProductPage, null)}
          />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/youtube" component={Auth(YoutubePage, null)} />
          <Route
            exact
            path="/uploadvideo"
            component={Auth(UploadVideoPage, true)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
