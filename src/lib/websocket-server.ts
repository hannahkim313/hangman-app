'use server';

import { WebSocketServer } from 'ws';

export const create = async (): Promise<void> => {
  // TODO make env var
  return new WebSocketServer({ port: *PORT* });
};

export const send = async (
  webSocketServer: WebSocketServer,
  data: object
): Promise<void> => {
  // TODO Change so client has declared type instead of any
  webSocketServer.clients.forEach((client) =>
    client.send(JSON.stringify(data))
  );
};

export const destroy = async (
  webSocketServer: WebSocketServer
): Promise<void> => {
  webSocketServer.destroy();
};
