import * as React from "react";

const authContext = React.createContext();

//pass setUser into this function as props
export default function useAuth() {
 const [authed,setAuthed] = React.useState(false);
  return { authed, login () {
//login function.

    return new Promise((res)=>{
//check db for a matching user or use OAuth
//update our user variable with user info
      setAuthed(true);
    res();
  });
  },
  logout () {
    return new Promise((res)=>{
      setAuthed(false);
      res();
    })
  }
}
}

//create the custom wrapper for protected components/routes
export function AuthProvider({children}){
  const auth = useAuth();
 // console.log("auth provider ", auth )
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}


export function AuthConsumer() {
  return React.useContext(authContext);
}