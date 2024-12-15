 import React from 'react' ;
 import ReactDom from 'react-dom' ;
import ArrMethods from './componenet';

 const rootDiv = document.getElementById("root") ;

 ReactDom.createRoot(rootDiv).render(
    // <h1>Umar</h1>
    <div>
    <ArrMethods  />  {/* Correctly using the component here */}
  </div>
  );
