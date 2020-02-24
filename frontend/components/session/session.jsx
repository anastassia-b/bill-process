import React from 'react';
import Login from './login';
import Signup from './signup';

import OktaSignIn from '@okta/okta-signin-widget';

class Session extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let signIn = new OktaSignIn({baseUrl: 'https://dev-674561.oktapreview.com'});
    let login = this.props.login;
    return (
      <div>
        { signIn.renderEl({el: '#widget-container'}, function success(res) { 
            if (res.status === 'SUCCESS') { 
              let user = {
                name: res.user.profile.login,
                token: res.session.token
              }
              console.log(user);
              login(user).then(() => {
                signIn.remove();
              });
            }
          })
        }
      </div>
    )
  }
}

export default Session;
