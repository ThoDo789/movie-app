import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Hearder";
import GlobalStyle from "./constants/globalStyles";

import { listRoute } from "./constants/listRouter";
import OnTop from "./components/OnTop";

function App() {
 
  

   return (
     <Router>
       <GlobalStyle />
       <Header />

       <Switch>
         
         {listRoute.map((item,key)=>(
         <Route key={key} path={item.path} component={item.main} exact={item.exact} />

         ))}
       </Switch>
           
       <Footer />
       <OnTop/>
     </Router>
   );
}

export default App;
