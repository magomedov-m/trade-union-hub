import { OpenAI } from "openai";
import path from "path";
import fs from "fs";

const employeesFile = path.join(process.cwd(), "src", "backend", "data", "accounts.json");

const openai = new OpenAI({
  apiKey: process.env.PROXY_API_RU_KEY,
  baseURL: process.env.PROXY_API_RU,
});

function readEmployees() {
  if (!fs.existsSync(employeesFile)) return [];
  const raw = fs.readFileSync(employeesFile, "utf8");
  return JSON.parse(raw);
}

export async function POST(req) {
  try {
    const body = await req.json();
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

    const reply = completion.choices?.[0]?.message?.content || "Пустой ответ от GPT";

    return new Response(
      JSON.stringify({ action: "showEmployee", data: { text: reply } }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ action: "chat", answer: "Ошибка при запросе к GPT" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
