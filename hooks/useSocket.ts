import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Product } from '../services/api';

const SOCKET_URL = 'http://10.0.0.223:8000';

export const useSocket = (onProductAdded: (product: Product) => void) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = io(SOCKET_URL, {
      transports: ['websocket'],
    });

    socketInstance.on('connect', () => {
      console.log('Socket connected');
      setIsConnected(true);
    });

    socketInstance.on('disconnect', () => {
      console.log('Socket disconnected');
      setIsConnected(false);
    });

    socketInstance.on('product_added', (product: Product) => {
      console.log('New product received:', product);
      onProductAdded(product);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [onProductAdded]);

  return { socket, isConnected };
};