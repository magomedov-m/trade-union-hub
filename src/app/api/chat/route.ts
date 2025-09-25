import { OpenAI } from "openai";
import path from "path";
import fs from "fs";

interface Employee {
  id: number;
  fullName: string;
  key: string;
  faculty: string;
  phone: string;
  email: string;
  experience: string;
  education: string;
  skills: string;
  photo: string;
  socialMedia: string;
  position: string;
}

interface ChatRequestBody {
  message: string;
}

interface ChatResponseSuccess {
  action: "showEmployee";
  data: {
    text: string;
  };
}

interface ChatResponseError {
  action: "chat";
  answer: string;
}

const employeesFile = path.join(process.cwd(), "src", "backend", "data", "accounts.json");

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_PROXY_API_RU_KEY,
  baseURL: process.env.NEXT_PUBLIC_PROXY_API_RU,
});

function readEmployees(): Employee[] {
  if (!fs.existsSync(employeesFile)) return [];
  const raw = fs.readFileSync(employeesFile, "utf8");
  return JSON.parse(raw) as Employee[];
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: ChatRequestBody = await req.json();
    const { message } = body;

    if (!message) {
      return new Response(JSON.stringify({ error: "Сообщение пустое" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const employees = readEmployees();

    const prompt = `
Ты — помощник сайта профсоюза. У тебя есть список сотрудников:
${JSON.stringify(employees, null, 2)}

Если пользователь пишет только имя или фамилию, попробуй найти единственного сотрудника с таким именем или фамилией. Если совпадений несколько — попроси уточнить. Ответ давай в том же стиле, в каком пишет пользователь и не выдавай информацию в виде объекта, а в разговорном стиле расскажи все пункты о нем. Про фото в профиле не говори. Строго запрещено говорить с пользователем на темы, не связанные с данным сайтом.

Запрос пользователя: "${message}"
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      max_completion_tokens: 300,
    });

    const reply: string = completion.choices?.[0]?.message?.content || "Пустой ответ от GPT";

    const responseBody: ChatResponseSuccess = {
      action: "showEmployee",
      data: { text: reply },
    };

    return new Response(JSON.stringify(responseBody), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);

    const errorResponse: ChatResponseError = {
      action: "chat",
      answer: "Ошибка при запросе к GPT",
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}