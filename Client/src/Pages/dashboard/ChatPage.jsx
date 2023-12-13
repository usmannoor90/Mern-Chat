import React from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

import { PrettyChatWindow } from "react-chat-engine-pretty";

function ChatPage({ user }) {
  const chatProps = useMultiChatLogic(
    "6570553c-8817-4cbc-9b16-54cf820e17c3",
    user.username,
    user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <PrettyChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
}

export default ChatPage;
