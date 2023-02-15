import { useSession } from "next-auth/react";
import { useAuth } from "../../lib/auth/useAuth";

export default function AccountButton() {
    const { data: session } = useSession();
    const { loggedUser, loading, signInWithGithub, signOut } = useAuth();

    return (
        <>
            {session && session.user ? (
                <button className="bg-primary" onClick={signOut}>
                    Logout
                </button>
            ) : (
                // <a className="bg-primary" href="/api/auth/signin">Login</a>
                <>
                    <button className="bg-primary" onClick={signInWithGithub}>
                        Login
                    </button>
                    <button onClick={() => console.log(loggedUser)}>
                        print
                    </button>
                </>
            )}
        </>
    );
}
