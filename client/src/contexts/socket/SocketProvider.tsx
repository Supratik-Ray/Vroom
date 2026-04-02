import { SocketContext } from "./useSocket";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000", {
  withCredentials: true,
});

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
