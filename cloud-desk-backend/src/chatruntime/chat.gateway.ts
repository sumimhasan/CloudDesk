// src/chat/chat.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface ChatMessage {
  id: number;
  username: string;
  avatarUrl: string;
  message: string;
  isReply?: boolean;
  repliedTo?: string;
}

@WebSocketGateway({
  cors: {
    origin: '*', // adjust for your frontend domain in production
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private users: Map<string, string> = new Map(); // socket.id -> username
  private nextMessageId = 1;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.users.delete(client.id);
  }

  // User registers their username + avatar
  @SubscribeMessage('register')
  handleRegister(
    @MessageBody() data: { username: string; avatarUrl: string },
    @ConnectedSocket() client: Socket,
  ) {
    this.users.set(client.id, data.username);
    client.data.avatarUrl = data.avatarUrl;

    client.emit('registered', {
      message: `Welcome ${data.username}`,
    });
  }

  // Send a message to ALL connected users
  @SubscribeMessage('chat')
  handleChatMessage(
    @MessageBody()
    data: {
      message: string;
      isReply?: boolean;
      repliedTo?: string;
    },
    @ConnectedSocket() client: Socket,
  ) {
    const username = this.users.get(client.id) || 'Anonymous';
    const avatarUrl = client.data.avatarUrl || '/default.png';

    const chatMessage: ChatMessage = {
      id: this.nextMessageId++,
      username,
      avatarUrl,
      message: data.message,
      isReply: data.isReply,
      repliedTo: data.repliedTo,
    };

    // Broadcast to all clients
    this.server.emit('chat', chatMessage);
  }
}
