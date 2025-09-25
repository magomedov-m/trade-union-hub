interface ContactData {
  name: string;
  created_at: number | string;
  mail: string;
  phone: string;
  text: string;
}

const contacts: ContactData[] = [
  {
    name: "Иван Иванов",
    created_at: "2025-09-01",
    mail: "ivan.ivanov@example.com",
    phone: "+7 900 123-45-67",
    text: "Здравствуйте, хотел бы узнать о предстоящих событиях.",
  },
  {
    name: "Светлана Петрова",
    created_at: "2025-09-02",
    mail: "svetlana.pet@example.com",
    phone: "+7 901 234-56-78",
    text: "Можно ли получить доступ к материалам прошлых конференций?",
  },
  {
    name: "Алексей Смирнов",
    created_at: "2025-09-03",
    mail: "aleksey.smirnov@example.com",
    phone: "+7 902 345-67-89",
    text: "Есть вопрос по регистрации на тренинг для студентов.",
  },
  {
    name: "Мария Кузнецова",
    created_at: "2025-09-04",
    mail: "maria.kuznetsova@example.com",
    phone: "+7 903 456-78-90",
    text: "Хочу предложить новую идею для образовательного мероприятия.",
  },
];

export default contacts;
