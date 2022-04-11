import React, { useState, useEffect } from "react"
import { check_session } from "./src/utils/auth"
import type { GatsbyBrowser } from 'gatsby'

// https://miyauchi.dev/posts/gatsby-typescript/
// JSX:Element
const SessionCheck = ({ children  } : any) => {
// const SessionCheck = ({ children  } : { children: React.ReactNode }) => {
  const [loading, still_loading] = useState(true);
  useEffect(() => check_session(() => still_loading(false)));
  return <>{children}</>
  // return loading === false && <>{children}</>
};

// export default SessionCheck;

// const wrapRootElement = ({ element } : any) => (
//   <SessionCheck>{element}</SessionCheck>
// );

const wrapRootElement :GatsbyBrowser['wrapRootElement'] = ({ element, }) => {
  return <SessionCheck>{element}</SessionCheck> 
};

export {wrapRootElement};
