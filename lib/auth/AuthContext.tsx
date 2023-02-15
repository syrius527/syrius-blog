import { User } from "@supabase/supabase-js";
import React, { createContext, FunctionComponent, useState, useEffect, SyntheticEvent, ReactNode, ReactElement } from "react";
import { supabase } from "../supabase/supabase";

export type AuthContextProps = {
  loggedUser: User;
  signInWithGithub: (evt: SyntheticEvent) => void;
  signOut: (evt: SyntheticEvent) => void;
  loading: boolean;
  loggedIn: boolean;
  userLoading: boolean;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loggedUser, setLoggedUser] = useState<User>();
  const [response, setResponse] = useState<any>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const signInWithGithub = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({ provider: "github" });
    // const { data: { user } } = await supabase.auth.getUser();
    const { session, user } = data;
    if(user) setLoggedUser(user);
  };

  const signOut = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        signInWithGithub,
        signOut,
        loading,
        loggedIn,
        userLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
};
