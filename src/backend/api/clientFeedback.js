import path from 'path';
import { Router } from 'express';
import { fileURLToPath } from 'url';
import { readData, writeData } from '../utils/readWriteFunctions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const dataDir = path.join(__dirname, '../', 'data');
const pathFile = path.join(dataDir, 'feedback.json');

const feedbackMsgList = readData(pathFile);

router.get('/', function (req, res) {
    res.json(feedbackMsgList);
});

router.post('/', function (req, res) {

    const sentFbMsg = {
        is_approved: false,
        created_at: Date.now(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        msg: req.body.msg,
    }

    feedbackMsgList.push(sentFbMsg);
    writeData(pathFile, feedbackMsgList);

    res.status(201).json(sentFbMsg);
});

router.patch('/:created_at', function (req, res) {
    const { created_at } = req.params;
    const { is_approved } = req.body;

    const index = feedbackMsgList.findIndex(fb => fb.created_at == created_at);

    if (index === -1) {
        return res.status(404).json({ error: "Отзыв не найден" });
    }

    feedbackMsgList[index].is_approved = is_approved;
    writeData(pathFile, feedbackMsgList);

    res.json(feedbackMsgList[index]);
});

export default router;