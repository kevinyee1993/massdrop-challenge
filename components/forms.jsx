import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class Forms extends React.component {
  render() {
    return(
      <div>
        <form class="" action="/todo" method="post">
          <input type="text" name="name" />
          <input type="text" name="priority" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
