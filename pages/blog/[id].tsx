import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import MessageComponent from "../../components/message/MessageComponent";
import { useMessage } from "../../lib/message/useMessage";
import { supabase } from "../../lib/supabase/supabase";
import { PostProps } from "../../components/blog/PostListComponent";
import { useAuth } from "../../lib/auth/useAuth";

const PostDetailPage = ({ post }: { post: PostProps }) => {
    const { messages, handleMessage } = useMessage();
    const [date, setDate] = useState<string>();

    useEffect(() => {
        if (post === null) {
            handleMessage?.({
                message: "No post found",
                type: "error",
            });
        } else {
            const date = new Date(post.inserted_at).toLocaleDateString("kr-KR");
            setDate(date);
        }
    }, []);

    return (
        <div>
            {messages && <MessageComponent messages={messages} />}
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetailPage;

export type NextAppPagePostProps = {
    props: {
        // loggedIn: boolean;
        post: PostProps;
    };
};

export const getServerSideProps: GetServerSideProps = async ({
    req,
    params,
}): Promise<NextAppPagePostProps> => {
    // const { loggedIn } = useAuth();
    // const { handleMessage } = useMessage();

    const { data: post, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", Number(params?.id))
        .limit(1)
        .single();

    if (error) {
        // handleMessage?.({
        //     message: error.message,
        //     type: "error",
        // });
    }

    return {
        props: {
            // loggedIn: !!loggedIn,
            post,
        },
    };
};
