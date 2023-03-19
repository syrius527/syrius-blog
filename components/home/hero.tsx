import Lottie from "react-lottie-player";
import animationData from "../../public/happy-programmer.json";
// import CodeBlock from "../code-block";
import { useAuth } from "../../lib/auth/useAuth";
import { supabase } from "../../lib/supabase/supabase";
import { useMessage } from "../../lib/message";
import MessageComponent from "../message/MessageComponent";

export default function Hero() {
    const { loggedUser } = useAuth();
    const { messages, handleMessage } = useMessage();

    const printSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        console.log(session);
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Lottie
                        loop
                        animationData={animationData}
                        play
                        style={{ width: 600, height: 500 }}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Before they sold out
                        <br className="hidden lg:inline-block" />
                        readymade gluten
                    </h1>
                    {/* <p>{loggedUser ? loggedUser.email : "none"}</p> */}
                    <div>
                        {/* <CodeBlock
                          text={
                            `function copyCode(dom) {
                              window.getSelection().selectAllChildren(dom.parentElement.querySelector('pre'));
                              document.execCommand('copy');
                              const origin = dom.innerHTML;
                              dom.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-icon="check" class="i-check"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>';
                              setTimeout(() => dom.innerHTML = origin, 1000);
                          }`}
                          language="javascript"
                          showlineNumbers={false}
                          wrapLines={true}
                        /> */}
                    </div>
                    <p className="mb-8 leading-relaxed">
                        {loggedUser ? loggedUser.email : "none"}
                    </p>
                    <div className="flex justify-center">
                        <button onClick={printSession} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button onClick={() => handleMessage?.({message: "hi", type: "success"})} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Button
                        </button>
                    </div>
                    {/* {messages && <MessageComponent messages={messages}/>} */}
                </div>
            </div>
        </section>
    );
}
