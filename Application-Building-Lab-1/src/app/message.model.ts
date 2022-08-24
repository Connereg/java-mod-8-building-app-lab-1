import { User } from "./user.model";

export interface Message {
    sender: User,
    text: string,
    conversationId: number,
    sequenceNumber: number
}