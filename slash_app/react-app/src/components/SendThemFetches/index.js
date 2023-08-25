import { useState } from 'react';

export default function SendIt() {
  const [responseText, setResponseText] = useState("");

  // Fetches
  const sendNoSlash2Slash = async () => {
    const res = await fetch('/api/slash');

    const temp = await res.json();
    setResponseText(temp);
  }

  const sendNoSlash2NoSlash = async () => {
    const res = await fetch('/api/no_slash');

    const temp = await res.json();
    setResponseText(temp);
  }

  const sendSlash2NoSlash = async () => {
    const res = await fetch('/api/no_slash/');

    const temp = await res.json();
    setResponseText(temp);
  }

  const sendSlash2Slash = async () => {
    const res = await fetch('/api/slash/');

    const temp = await res.json();
    setResponseText(temp);
  }

  return (
    <div>
      <button onClick={sendNoSlash2Slash} style={{ display: "block"}}>SEND: no trailing slash REQ to '/' endpoint</button>
      <button onClick={sendNoSlash2NoSlash} style={{ display: "block" }}>SEND: no trailing slash REQ to '' endpoint</button>
      <button onClick={sendSlash2NoSlash} style={{ display: "block" }}>SEND: trailing slash REQ to '' endpoint</button>
      <button onClick={sendSlash2Slash} style={{ display: "block" }}>SEND: trailing slash REQ to '/' endpoint</button>
      <div>{responseText}</div>
    </div>
  )
}
