import { MessageContextProps, MessageProps } from "../../lib/message";
import classNames from "classnames";
interface Iprops {
    messages: MessageProps[];
}
export default function MessageComponent({ messages }: Iprops) {
    return (
        <>
            {messages && messages.map((message) => (
                <div
                    className={classNames(
                        "shadows-md rounded px-3 py-2 text-shadow transition-all mt-2 text-center",
                        message.type === "success"
                        ? "bg-green-500 text-white"
                        : message.type === "error"
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-800" //default
                    )}
                >
                    {message.message}
                </div>
            ))}
        </>
    );
}