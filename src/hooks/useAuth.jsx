import * as React from "react";

const authContext = React.createContext();

export default function useAuth() {
  const [authed,setAuthed] = React.useState(false);
  return { authed, login () {
    return new Promise((res)=>{
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

//create the custom wrapper for protectedcomponents/routes
export function AuthProvider({children}){
  const auth = useAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}


export function AuthConsumer() {
  return React.useContext(authContext);
}