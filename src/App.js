import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "../src/globalStyles";
import Footer from "./components/customHooks/Footer";
import Header from "./components/Hearder";
import SearchResult from "./components/pages/SearchResult";


function App() {
  const Content = React.lazy(() => import('./components/Contents/index'));
  const CartoonFilm =React.lazy(() => import('./components/pages/categories/CartoonFilm'));
  const Cinema=  React.lazy(() => import('./components/pages/categories/Cinema'));
  const DramaFilm=  React.lazy(() => import('./components/pages/categories/DramaFilm'));
  const FeatureFilm=  React.lazy(() => import('./components/pages/categories/FeatureFilm'));
  const MovieDetail = React.lazy(() => import('./components/pages/MovieDetails/index'));
 
  

   return( <Router>
      <GlobalStyle />
      <Header />
      
      <Switch>
       <Route path="/" component={Content}  exact />
       <Route path="/phim-hoat-hinh" component={CartoonFilm}  exact />
       <Route path="/phim-chieu-rap" component={Cinema}  exact />
       <Route path="/phim-bo" component={DramaFilm}  exact />
       <Route path="/phim-le" component={FeatureFilm}  exact />
       <Route path="/search" component={SearchResult}  exact />


        <Route path="/detail/:id"  component={MovieDetail}  ></Route>
      </Switch>
     
      <Footer/>

    </Router>
  );
}

export default App;
