export interface PostProps {
    id: number;
    user_id: string;
    user_email: string;
    title: string;
    content: string;
    inserted_at: string;
}

export default function PostList({ post }: { post: PostProps }) {
    const { id, user_id, user_email, title, content, inserted_at } = post;
    return (
        // <div className="container px-5 py-5 mx-auto">
        //     <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/2">
                    <div className="h-full bg-gray-100 dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-500 mb-1">CATEGORY</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">Title: {title} Id: {id}</h1>
                    <p className="leading-relaxed mb-3">{content}</p>
                    <a className="text-indigo-500 dark:text-indigo-400 inline-flex items-center">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-gray-400 dark:text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 dark:border-gray-700 dark:border-opacity-50">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                        </span>
                        <span className="text-gray-400 dark:text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                        </span>
                        <span className="text-gray-400 dark:text-gray-500 inline-flex items-center leading-none text-sm">
                            {inserted_at}
                        </span>
                    </div>
                </div>
            </div>
    //     </div>
    // </div>
    );
};