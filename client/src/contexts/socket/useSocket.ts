import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";

export const SocketContext = createContext<{ socket: Socket } | null>(null);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context)
    throw new Error("SocketContext cannot be accessed outside SocketProvider");
};
