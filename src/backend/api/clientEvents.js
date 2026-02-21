import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// Путь к файлу данных
const DATA_DIR = path.join(process.cwd(), 'src', 'backend', 'data');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');

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

// API для получения всех событий
router.get('/', (req, res) => {
  try {
    const events = readDataFile(EVENTS_FILE);
    // Сортировка по дате (ближайшие события первыми)
    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
    res.json(sortedEvents);
  } catch (error) {
    console.error('Ошибка при получении событий:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// API для получения события по id
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const events = readDataFile(EVENTS_FILE);
    const event = events.find(item => item.id === parseInt(id));

    if (!event) {
      return res.status(404).json({ error: 'Событие не найдено' });
    }

    res.json(event);
  } catch (error) {
    console.error('Ошибка при получении события:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// API для добавления события
router.post('/', (req, res) => {
  try {
    const { title, description, date, time, location, category, organizer, participants, image } = req.body;

    // Валидация обязательных полей
    if (!title || !description || !date) {
      return res.status(400).json({ error: 'Не все обязательные поля заполнены' });
    }

    const events = readDataFile(EVENTS_FILE);

    const newEvent = {
      id: events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1,
      title,
      description,
      date,
      time: time || '',
      location: location || '',
      category: category || '',
      organizer: organizer || '',
      participants: participants || 0,
      image: image || '/images/event-placeholder.jpg',
      created_at: Date.now()
    };

    events.push(newEvent);
    writeDataFile(EVENTS_FILE, events);

    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Ошибка при добавлении события:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// API для обновления события
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, time, location, category, organizer, participants, image } = req.body;

    const events = readDataFile(EVENTS_FILE);
    const eventIndex = events.findIndex(item => item.id === parseInt(id));

    if (eventIndex === -1) {
      return res.status(404).json({ error: 'Событие не найдено' });
    }

    // Обновляем только переданные поля
    events[eventIndex] = {
      ...events[eventIndex],
      ...(title && { title }),
      ...(description && { description }),
      ...(date && { date }),
      ...(time !== undefined && { time }),
      ...(location !== undefined && { location }),
      ...(category !== undefined && { category }),
      ...(organizer !== undefined && { organizer }),
      ...(participants !== undefined && { participants }),
      ...(image !== undefined && { image })
    };

    writeDataFile(EVENTS_FILE, events);

    res.json(events[eventIndex]);
  } catch (error) {
    console.error('Ошибка при обновлении события:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// API для удаления события
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const events = readDataFile(EVENTS_FILE);
    const eventIndex = events.findIndex(item => item.id === parseInt(id));

    if (eventIndex === -1) {
      return res.status(404).json({ error: 'Событие не найдено' });
    }

    events.splice(eventIndex, 1);
    writeDataFile(EVENTS_FILE, events);

    res.status(204).send();
  } catch (error) {
    console.error('Ошибка при удалении события:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

export default router;
