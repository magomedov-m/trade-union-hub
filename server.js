import express from 'express';
import cors from 'cors';
import employeeRoutes from './src/backend/api/clientCreateAccount.js';
import feedbackRoutes from './src/backend/api/clientFeedback.js';
import connectRoutes from './src/backend/api/clientConnect.js';
import eventsRoutes from './src/backend/api/clientEvents.js';

let app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("🔥 Запрос:", req.method, req.url);
  next();
});

// API маршруты
app.use('/api/create-account-employee', employeeRoutes);
app.use('/api/feedback-message', feedbackRoutes);
app.use('/api/connect', connectRoutes);
app.use('/api/events', eventsRoutes);

app.get('/', function (req, res) {
  res.send('это главная страница')
});

app.listen(8080, function () {
  console.log('Сервер запущен на порте http://localhost:8080/')
});