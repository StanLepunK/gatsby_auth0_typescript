import React from "react"
import { PageProps } from "gatsby"

import { Link } from "gatsby"
import { logout } from "../utils/auth"

const Callback = ({} : PageProps) => {
  return(
    <>
      <p>Callback</p>
      <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/account/">My Account</Link>{" "}
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
    </>
  )
}

export default Callback
