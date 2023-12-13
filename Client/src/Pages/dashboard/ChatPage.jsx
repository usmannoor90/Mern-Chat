import React from "react";

import { PrettyChatWindow } from "react-chat-engine-pretty";

function ChatPage({ user }) {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="6570553c-8817-4cbc-9b16-54cf820e17c3"
        username={user.username}
        secret={user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default ChatPage;
