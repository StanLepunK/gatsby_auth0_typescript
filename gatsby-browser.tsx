/**
 * Gatsby-Browser type script version
 * v 0.1.0
 * 2022-2022
 * */
import React, { useState, useEffect } from "react"
import { check_session } from "./src/utils/auth"
import type { GatsbyBrowser } from 'gatsby'


const SessionCheck = ({ children } : any) => {
  const [loading, still_loading] = useState(true);
  useEffect(() => check_session(() => still_loading(false)));
  if(loading !== false ) {
    return null;
  } else {
    return <>{children}</>;
  }
};

const wrapRootElement :GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck> 
};

export {wrapRootElement};
