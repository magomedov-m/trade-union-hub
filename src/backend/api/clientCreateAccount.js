import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readData, writeData } from '../utils/readWriteFunctions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const dataDir = path.join(__dirname, '../', 'data');
const pathFile = path.join(dataDir, 'accounts.json');

router.get('/', function (req, res) {
    const employees = readData(pathFile);
    res.json(employees);

});

router.post('/', (req, res) => {
    const employees = readData(pathFile);

    const registeredEmployee = {
        id: Date.now(),
        fullName: req.body.fullName || "😎 Имя в процессе заполнения",
        key: req.body.key,
        faculty: req.body.faculty || "🤷‍♂️ Нет информации",
        phone: req.body.phone || "📞 Пока нет",
        email: req.body.email || "😅 Секрет!",
        experience: req.body.experience || "💼 В процессе накопления",
        education: req.body.education || "🎓 Пока в пути",
        skills: req.body.skills || "😉 В процессе изучения",
        photo: req.body.photo || "📸 Пока нет",
        socialMedia: req.body.socialMedia || "🌐 Пока скрыто",
        position: req.body.position || "🏢 Пока не назначена",
    };

    employees.push(registeredEmployee);
    writeData(pathFile, employees);

    res.status(201).json(registeredEmployee);
});

export default router;