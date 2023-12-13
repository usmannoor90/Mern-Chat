import { useState } from "react";
import "./App.css";
import AuthPage from "./Pages/accounts/AuthPage";
import ChatPage from "./Pages/dashboard/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatPage user={user} />;
  }
}

export default App;
