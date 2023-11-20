// import React, { useEffect, useState } from 'react';
// import { w3cwebsocket as WebSocket } from 'websocket-extensions';
//
// const Chat = () => {
//     const [socket, setSocket] = useState(null);
//     const [message, setMessage] = useState('');
//     const [chatLog, setChatLog] = useState([]);
//
//     useEffect(() => {
//         const newSocket = new WebSocket('ws://localhost:8080/chat');
//         newSocket.onopen = () => {
//             console.log('WebSocket connected');
//         };
//         newSocket.onmessage = (event) => {
//             const message = event.data;
//             setChatLog((prevChatLog) => [...prevChatLog, message]);
//         };
//         setSocket(newSocket);
//
//         return () => {
//             newSocket.close();
//         };
//     }, []);
//
//     const handleSendMessage = () => {
//         if (socket && message.trim() !== '') {
//             socket.send(message);
//             setMessage('');
//         }
//     };
//
//     return (
//         <div>
//             <div>
//                 {chatLog.map((message, index) => (
//                     <div key={index}>{message}</div>
//                 ))}
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <button onClick={handleSendMessage}>Send</button>
//             </div>
//         </div>
//     );
// };
//
// export default Chat;