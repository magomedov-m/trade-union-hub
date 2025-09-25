"use client";
import { useState } from "react";
import styles from "./ChatBox.module.scss";
import { TextField, Button } from "@mui/material";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  action?: "showEmployee";
  answer?: string;
  data?: {
    text: string;
  };
}

export default function ChatBox() {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data: ChatResponse = await res.json();

    if (data.action === "showEmployee" && data.data) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.data.text },
      ]);
    } else if (data.answer) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer as string },
      ]);
    }

    setInput("");
  };

  return (
    <>
      <Button
        className={styles.openButton}
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Открыть чат
      </Button>

      {open && (
        <div className={styles.modal}>
          <div className={styles.chatBox}>
            <div className={styles.header}>
              <h3>ИИ-агент на базе GPT-4o</h3>
              <Button onClick={() => setOpen(false)}>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/sf-black/64/delete-sign.png"
                  alt="delete-sign"
                />
              </Button>
            </div>

            <div className={styles.messages}>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? styles.userMessage
                      : styles.assistantMessage
                  }
                >
                  {m.content.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.inputSection}>
              <TextField
                className={styles.input}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Задайте Ваш вопрос..."
              />
              <Button className={styles.sendBtn} onClick={sendMessage}>
                <img
                  className={styles.sendIcon}
                  width="28"
                  height="28"
                  src="https://img.icons8.com/material-rounded/24/sent.png"
                  alt="sent"
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
