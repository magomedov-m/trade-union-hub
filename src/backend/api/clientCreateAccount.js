import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const dataDir = path.join(__dirname, '../', 'data');
const pathFile = path.join(dataDir, 'accounts.json')

function readEmployees() {
    try {
        const employeesList = fs.readFileSync(pathFile, 'utf-8');
        if (!employeesList) return [];
        return JSON.parse(employeesList);
    } catch (err) {
        return [];
    }
}
function writeEmployee(employee) {
    fs.writeFileSync(pathFile, JSON.stringify(employee, null, 2));
}

router.get('/', function (req, res) {
    const employees = readEmployees();
    res.json(employees);

});

router.post('/', (req, res) => {
    console.log('req.body', req.body)
    const employees = readEmployees();

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
    writeEmployee(employees);

    res.status(201).json(registeredEmployee);
});

export default router;