import { createContext, useState } from "react";
import { MessageProps } from "./message.types";

export type MessageContextProps = {
    messages: MessageProps[];
    handleMessage: (message: MessageProps) => void;
};

export const MessageContext = createContext<Partial<MessageContextProps>>({});

export const MessageProvider = (props: any) => {
    const [messages, setMessages] = useState<MessageProps[]>([]);

    const handleMessage = (message: MessageProps) => {
        setMessages((prevMessages) => prevMessages.concat([message]));
        setTimeout(() => {
            setMessages((prevMessages) => prevMessages.slice(1));
        }, 3000);
    };

    return (
        <MessageContext.Provider value={{ messages, handleMessage }}>
            {props.children}
        </MessageContext.Provider>
    );
};