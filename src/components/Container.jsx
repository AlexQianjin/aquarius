import React from 'react';
import { Redirect } from 'react-router-dom';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: sessionStorage.getItem('login')
    };
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <Redirect to='/' />
      );
    }
    // else if (this.state.loggedIn && location.pathname === '/') {
    //     console.log(location);
    //   return (
    //     <Redirect to='/main' />
    //   )
    // }

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Container;
