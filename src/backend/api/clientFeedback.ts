import path from 'path';
import { Router, Request, Response } from 'express';
import { fileURLToPath } from 'url';
import { readData, writeData } from '../utils/readWriteFunctions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const dataDir = path.join(__dirname, '../', 'data');
const pathFile = path.join(dataDir, 'feedback.json');

const feedbackMsgList: SendFeedbackMessage[] = readData(pathFile) as SendFeedbackMessage[];

interface SendFeedbackMessage {
    is_approved: boolean;
    created_at: number;
    first_name: string;
    last_name: string;
    msg: string;
}

router.get('/', (req: Request, res: Response<SendFeedbackMessage[]>) => {
    res.json(feedbackMsgList as SendFeedbackMessage[]);
});

router.post('/', (req: Request<{}, {}, SendFeedbackMessage>, res: Response<SendFeedbackMessage>) => {

    const sentFbMsg: SendFeedbackMessage = {
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

interface UpdateFeedbackBody {
    is_approved: boolean;
}

router.patch('/:created_at', (req: Request<{ created_at: string }, {}, UpdateFeedbackBody>, res: Response<SendFeedbackMessage | { error: string }>) => {
    const { created_at } = req.params;
    const { is_approved } = req.body;

    const index = feedbackMsgList.findIndex(fb => fb.created_at === Number(created_at));

    if (index === -1) {
        return res.status(404).json({ error: "Отзыв не найден" });
    }

    feedbackMsgList[index].is_approved = is_approved;
    writeData(pathFile, feedbackMsgList);

    res.json(feedbackMsgList[index]);
});

export default router;