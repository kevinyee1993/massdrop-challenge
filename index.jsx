import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import Forms from './components/forms';

// import { HashRouter } from 'react-router-dom';


// function Root() {
//   return(
//     <div>
//       Hello this is working!!
//     </div>
//   );
// }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Forms />, document.getElementById('main'));
});
