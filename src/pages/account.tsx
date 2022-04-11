import React from "react"
import { Router } from "@reach/router"
import { login, logout, auth_token_is, get_profile } from "../utils/auth"
import { Link } from "gatsby"
import { PageProps } from "gatsby"

// const Home = () => <p>Home</p>
// const MyAccount = () => <p>My Account</p>
// const Settings = () => <p>Settings</p>
// const Portfolio = () => <p>Portfolio</p>
const Home = ({path : string} : any) => <p>Home</p>
const MyAccount = ({path : string} : any) => <p>My Account</p>
const Settings = ({path : string} : any) => <p>Settings</p>
const Portfolio = ({path : string} : any) => <p>Portfolio</p>

const Account = () => {
  if (!auth_token_is()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = get_profile()

  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/account/">My Account</Link>{" "}
        <Link to="/account/settings/">Settings</Link>{" "}
        <Link to="/account/portfolio/">Portfolio</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Router>
        <Home path="/" />
        <MyAccount path="/account/" />
        <Settings path="/account/settings" />
        <Portfolio path="/account/portfolio" />
      </Router>
    </>
  )
}

export default Account
