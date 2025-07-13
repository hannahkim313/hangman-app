'use server';

import { WebSocket } from 'ws';
import { headers } from 'next/headers';

export const open = async (): Promise<WebSocket> => {
  const headersList = await headers();
  return new WebSocket(
    'ws://' + headersList.get('host') + ':' + process.env.WEBSOCKET_SERVER_PORT
  );
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
