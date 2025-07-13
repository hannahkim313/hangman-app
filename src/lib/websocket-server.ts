'use server';

import { WebSocketServer, WebSocket } from 'ws';

export const create = async (): Promise<void> => {
  return new WebSocketServer({ port: process.env.WEBSOCKET_SERVER_PORT });
};

export const send = async (
  webSocketServer: WebSocketServer,
  data: object
): Promise<void> => {
  webSocketServer.clients.forEach((client: WebSocket) =>
    client.send(JSON.stringify(data))
  );
};

export const destroy = async (
  webSocketServer: WebSocketServer
): Promise<void> => {
  webSocketServer.destroy();
};
