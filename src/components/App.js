import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { HomePage, RegisterPage, NotFoundPage, LoginPage, EmailPage,NewPasswprdPage  } from 'components'
import { withCookies, Cookies } from 'react-cookie'
import PropTypes, { instanceOf } from 'prop-types'


// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

class App extends React.Component{

  static propTypes = {
		cookies: instanceOf(Cookies).isRequired
  }
  
  componentWillMount() {
		global.cookies = this.props.cookies
	}


  render() {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/register" component={RegisterPage} exact/>
          <Route path="/login" component={LoginPage} exact/>
          <Route path="/resetpassword" component={EmailPage} exact/>
          <Route path="/newpassword" component={NewPasswprdPage} exact/>
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    )
  }
}


export default withCookies(App)
