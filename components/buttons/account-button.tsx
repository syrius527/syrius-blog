import { useAuth } from "../../lib/auth/useAuth";

export default function AccountButton() {
    const { loggedUser, loggedIn, loading, signInWithGithub, signOut } = useAuth();

    return (
        <>
            {loggedIn ? (
                <>
                    <button className="bg-primary" onClick={signOut}>
                        Logout
                    </button>
                    <button onClick={() => console.log(loggedUser)}>
                        print
                    </button>
                </>
            ) : (
                <button className="bg-primary" onClick={signInWithGithub}>
                    Login
                </button>
            )}
        </>
    );
}
