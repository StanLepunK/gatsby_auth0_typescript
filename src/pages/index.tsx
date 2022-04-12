/**
 *  INDEX / HOME for LOGIN or CREATE NEW ACCOUNT
 * v 0.1.0
 * 2019-2022
 * */
import React from "react"
import { Link } from "gatsby"

// Migrating to typescipt 
// https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/
// https://github.com/gatsbyjs/gatsby/blob/master/examples/using-typescript/src/components/layout.tsx

const GoToAccount = () => {
  console.log("je suis là");
  return(
    <div>
      <p>Are you ready for a new world account ?</p>
      <Link to="/account/">If yes, go to your account or create new world</Link>
    </div>
  )
}

export default GoToAccount;
