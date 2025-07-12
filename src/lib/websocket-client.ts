'use server';

import WebSocket from 'ws';

export const open = async (): Promise<WebSocket> => {
  // TODO change to server url
  return new WebSocket('ws://*HOST*:*PORT*');
};

export const close = async (webSocket: WebSocket): Promise<void> => {
  webSocket.close();
};

export const send = async (
  webSocket: WebSocket,
  data: object
): Promise<void> => {
  return webSocket.send(JSON.stringify(data));
};
