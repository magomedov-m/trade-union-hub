import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// Путь к файлу данных
const DATA_DIR = path.join(process.cwd(), 'src', 'backend', 'data');
const CONNECT_FILE = path.join(DATA_DIR, 'connect.json');

// Функция чтения данных из JSON файла
function readDataFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Функция записи данных в JSON файл
function writeDataFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// API для получения всех сообщений связи
router.get('/', (req, res) => {
  try {
    const connectMessages = readDataFile(CONNECT_FILE);
    res.json(connectMessages);
  } catch (error) {
    console.error('Ошибка при получении сообщений связи:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// API для отправки сообщения связи
router.post('/', (req, res) => {
  try {
    const { name, mail, phone, message } = req.body;

    // Валидация обязательных полей
    if (!name || !mail || !message) {
      return res.status(400).json({ error: 'Не все обязательные поля заполнены' });
    }

    const connectMessages = readDataFile(CONNECT_FILE);

    const newMessage = {
      name,
      mail,
      phone: phone || '',
      message,
      created_at: Date.now(),
      is_read: false
    };

    connectMessages.push(newMessage);
    writeDataFile(CONNECT_FILE, connectMessages);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Ошибка при отправке сообщения связи:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// API для отметки сообщения как прочитанного
router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { is_read } = req.body;

    const connectMessages = readDataFile(CONNECT_FILE);
    const messageIndex = connectMessages.findIndex(item => item.created_at === parseInt(id));

    if (messageIndex === -1) {
      return res.status(404).json({ error: 'Сообщение не найдено' });
    }

    connectMessages[messageIndex].is_read = is_read;
    writeDataFile(CONNECT_FILE, connectMessages);

    res.json(connectMessages[messageIndex]);
  } catch (error) {
    console.error('Ошибка при обновлении сообщения:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// API для удаления сообщения связи
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const connectMessages = readDataFile(CONNECT_FILE);
    const messageIndex = connectMessages.findIndex(item => item.created_at === parseInt(id));

    if (messageIndex === -1) {
      return res.status(404).json({ error: 'Сообщение не найдено' });
    }

    connectMessages.splice(messageIndex, 1);
    writeDataFile(CONNECT_FILE, connectMessages);

    res.status(204).send();
  } catch (error) {
    console.error('Ошибка при удалении сообщения:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

export default router;
