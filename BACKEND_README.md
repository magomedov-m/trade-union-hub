# Бэкенд для сайта первичной профсоюзной организации

## Описание

Бэкенд реализован на Node.js с использованием Express.js. Данные хранятся в JSON-файлах в директории `src/backend/data/`.

## API Эндпоинты

### 1. Форма обратной связи (Connect)
- `GET /api/connect` - получить все сообщения
- `POST /api/connect` - отправить сообщение
  - Тело запроса: `{ name, mail, phone, message }`
- `PATCH /api/connect/:id` - отметить как прочитанное
- `DELETE /api/connect/:id` - удалить сообщение

### 2. Отзывы (Feedback)
- `GET /api/feedback-message` - получить одобренные отзывы
- `GET /api/feedback-message/all` - получить все отзывы (включая неодобренные)
- `POST /api/feedback-message` - добавить отзыв
  - Тело запроса: `{ first_name, last_name, msg }`
- `PATCH /api/feedback-message/:id` - обновить статус одобрения
- `DELETE /api/feedback-message/:id` - удалить отзыв

### 3. События (Events)
- `GET /api/events` - получить все события
- `GET /api/events/:id` - получить событие по id
- `POST /api/events` - добавить событие
  - Тело запроса: `{ title, description, date, time, location, category, organizer, participants, image }`
- `PUT /api/events/:id` - обновить событие
- `DELETE /api/events/:id` - удалить событие

### 4. Аккаунты сотрудников (Accounts)
- `GET /api/create-account-employee` - получить всех сотрудников
- `POST /api/create-account-employee` - создать аккаунт сотрудника
  - Тело запроса: `{ first_name, last_name, middle_name, position, department, email, phone, avatar }`

## Запуск

### Запуск только бэкенда
```bash
npm run server
```

Сервер будет доступен по адресу: http://localhost:8080

### Запуск фронтенда и бэкенда одновременно
```bash
npm run dev:all
```

Фронтенд: http://localhost:3000
Бэкенд: http://localhost:8080

## Структура данных

### connect.json
```json
[
  {
    "name": "Имя",
    "mail": "email@example.com",
    "phone": "+79001234567",
    "message": "Текст сообщения",
    "created_at": 1704067200000,
    "is_read": false
  }
]
```

### feedback.json
```json
[
  {
    "first_name": "Иван",
    "last_name": "Иванов",
    "msg": "Отличный сервис!",
    "is_approved": true,
    "created_at": 1704067200000
  }
]
```

### events.json
```json
[
  {
    "id": 1,
    "title": "Название мероприятия",
    "description": "Описание",
    "date": "2025-06-01",
    "time": "10:00",
    "location": "Место",
    "category": "Конференция",
    "organizer": "Организатор",
    "participants": 150,
    "image": "/images/event1.jpg",
    "created_at": 1704067200000
  }
]
```

## Важно

- По умолчанию новые отзывы не одобрены (`is_approved: false`)
- Публичный API `/api/feedback-message` возвращает только одобренные отзывы
- Для управления всеми отзывами используйте `/api/feedback-message/all`
- Сортировка событий происходит по дате (ближайшие события первыми)
