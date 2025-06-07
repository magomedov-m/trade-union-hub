"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.scss";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className={styles.btn}>
        Прочитать историю
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style, width: '80%', maxWidth: '800px', margin: '0 auto'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2>Краткая история ДГМУ</h2>
          </Typography>
          <Typography
            className={styles.text}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <div className={styles.text}>
              В 1932 году в столице Дагестана был основан медицинский институт,
              ставший третьим высшим учебным заведением республики. Решение о
              его создании было принято на Вседагестанском съезде Советов, а
              официальное открытие состоялось 7 ноября 1932 года, в день
              15-летия Октябрьской революции. <br/>
              Институт получил наименование
              «Дагестанский государственный медицинский институт имени XV
              годовщины Октября». Первым директором стал Муслим Нахибашев,
              прошедший путь от фельдшера до Наркома здравоохранения Дагестана.
              Заместителем по учебной и научной части был назначен профессор
              Омар Байрашевский, который организовал привлечение преподавателей
              из других городов. Институт стал важным шагом в подготовке
              медицинских кадров для региона, устраняя дефицит врачей и
              медицинских учреждений.
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
