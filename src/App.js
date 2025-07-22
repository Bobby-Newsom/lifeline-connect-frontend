import React from "react";
import Header from "./components/Header";
import SamplePrompts from "./components/SamplePrompts";
import IconGrid from "./components/IconGrid";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <Header />
      <SamplePrompts />
      <IconGrid />
      <ChatBox />
    </div>
  );
}

export default App;
