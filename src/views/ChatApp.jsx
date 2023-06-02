import { useState } from "react";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function ChatApp() {
  const [user, setUser] = useState(undefined);

  const handleAuth = (user) => {
    setUser(user);
  };

  return (
    <div>
      {!user ? (
        <AuthPage onAuth={handleAuth} />
      ) : (
        <ChatsPage user={user} />
      )}
    </div>
  );
}

export default ChatApp;
