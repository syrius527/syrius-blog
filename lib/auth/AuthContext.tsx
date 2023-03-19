import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React, {
    createContext,
    useState,
    useEffect,
    SyntheticEvent,
} from "react";
import { supabase } from "../supabase/supabase";

export type AuthContextProps = {
    loggedUser: User|null;
    signInWithGithub: (evt: SyntheticEvent) => void;
    // signOut: (evt: SyntheticEvent) => void;
    signOut: () => void;
    loading: boolean;
    loggedIn: boolean;
    userLoading: boolean;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider = (props: any) => {
    const [loggedUser, setLoggedUser] = useState<User|null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    // const [response, setResponse] = useState<any>(null);
    const [userLoading, setUserLoading] = useState<boolean>(true);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const router = useRouter();

    const signInWithGithub = async (evt: SyntheticEvent) => {
        evt.preventDefault();
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        });
        if (error) {
            alert(error);
        }
    };

    // const router = useRouter();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        
        if (error) {
            alert(error);
        } else {
            setLoggedUser(null);
            setLoggedIn(false);
        }
    };

    const setServerSession = async (event: AuthChangeEvent, session: Session) => {
        await fetch("/api/auth", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ event, session }),
        });
    };

    useEffect(() => {
        const settingUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setLoggedUser(user);
                setLoggedIn(true);
                // router.push("/");
            } else {
                setUserLoading(false);
            }

            const { data: authListener } = supabase.auth.onAuthStateChange(
                async (event, session) => {
                    const user = session?.user! ?? null;
                    // await setServerSession(event, session!);

                    if (user) {
                        setLoggedUser(user);
                        setLoggedIn(true);
                        // router.push("/");
                    } else {
                        setLoggedUser(null);
                        setLoggedIn(false);
                        // router.push("/");
                    }
                }
            );

            return () => {
                authListener.subscription.unsubscribe();
            };
        };

        settingUser();
    }, []);

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
    );
};
