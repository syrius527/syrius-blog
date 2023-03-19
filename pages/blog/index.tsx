import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase/supabase";
import { GetServerSideProps } from "next";
import { Session, User } from "@supabase/supabase-js";
import { useAuth } from "../../lib/auth/useAuth";
import { PostProps } from "../../components/blog/PostList";
import PostList from "../../components/blog/PostList";

export default function Blog() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const { loggedUser } = useAuth();
    
    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const { data: postList, error } = await supabase
            .from("posts")
            .select("*")
            .order("inserted_at", { ascending: false });
        if (error) {
            console.log(error);
        } else setPosts(postList);
    };

    return (
        <>
            <div className="flex flex-col item-center justify-start py-4 min-h-screen">
                <h1>blog</h1>
                {loggedUser && <p>this is {loggedUser.user_metadata.preferred_username}'s blog page!</p>}
                <section className="text-gray-600 dark:text-gray-400 dark:bg-zinc-800/20 body-font">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {posts ? (
                                posts.map((post) => (
                                    <PostList key={post.id} post={post} />
                                ))
                            ) : (
                                <p>No post yet</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
        
    );
}
