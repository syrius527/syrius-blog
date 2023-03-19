export type MessageType = "default" | "success" | "error";

export type MessageProps = {
    message: string;
    type: MessageType;
}