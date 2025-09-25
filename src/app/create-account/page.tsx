"use client";
import React, { useState } from "react";
import styles from "./CreateAccount.module.scss";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import useStore from "../../zustand/store";

const KeyInputForm: React.FC = () => {
  const [key, setKey] = useState<string>("");
  const router = useRouter();
  const updateKey = useStore((state) => state.updateKey);

  const handleSubmit = (): void => {
    updateKey(key)
    router.push("/account");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Вход в систему</h1>
      <form className={styles.form}>
        <TextField
          label="Ключ"
          type="text"
          className={styles.input}
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="** * *** **** ** ****"
        />
        <br/>
        <Button className={styles.button} variant="outlined" onClick={() => handleSubmit()}>
          Войти
        </Button>
      </form>
    </div>
  );
};

export default KeyInputForm;
