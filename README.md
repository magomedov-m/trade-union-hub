# 🔮 Next.js + React + Supabase — Учебно-практический проект

# Чтобы посмотреть на работу приложения перейдите по ссылке: [перейти](https://trade-union-hub.vercel.app/)

**Кратко:** проект демонстрирует интеграцию Next.js (App Router) + React на фронтенде, простую серверную логику (Express) и работу с внешней БД через Supabase (в данный момент не работает, т.к. срок работы таблиц истек после 7 дней использования - в качестве замены написал свой бек). Используются Zustand для управления состоянием, Framer Motion для анимаций и SCSS Modules для стилизации.

---

## 📌 Особенности проекта

* Полноценный фронтенд на **Next.js (App Router)** с разделением `layout`, `server` и `client` компонентов.
* Примеры анимаций и переходов через **Framer Motion**.
* Изолированная стилизация компонент через **SCSS Modules**.
* Глобальное состояние реализовано на **Zustand**.
* Небольшой встроенный **Express**-бэкенд в `src/backend/` с демонстрационными REST-эндпоинтами и обработкой файлов.
* Интеграция с **Supabase**: настройки клиента и примеры функций для чтения/записи.

---

## 📂 Содержание README

1. Стек технологий
2. Быстрый старт
3. Переменные окружения
4. Структура проекта
5. Коротко о ключевых модулях
6. Запуск backend

---

## 🧰 Технологии

* **Next.js (App Router)**
* **React**
* **Zustand**
* **Framer Motion**
* **SCSS Modules**
* **Express** (локальный backend внутри `src/backend/`)
* **Supabase** (хостинг БД и API) - срок работы истек
* **Node.js**, **npm**

---

## ⚙️ Быстрый старт

1. Клонируйте репозиторий:

```bash
git clone <https://github.com/magomedov-m/trade-union-hub>
cd <trade-union-hub>
```

2. Установите зависимости:

```bash
npm install
# или
pnpm install
```

3. Создайте `.env.local` и заполните переменные окружения (см. раздел «Переменные окружения»).

4. Запустите dev-сервер Next.js:

```bash
npm run dev
```

5. Откройте в браузере: `http://localhost:3000`.

---

## 🔐 Переменные окружения (пример `.env.local`)
Необходимо создать и указать свои ключи на https://supabase.com/

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=public-anon-key
# (Опционально) секретный ключ для серверных операций:
SUPABASE_SERVICE_ROLE_KEY=service-role-key
```

* `Секретные ключи (например, `SUPABASE_SERVICE_ROLE_KEY`) **не** должны попадать в клиентский код или в публичные репозитории.

---

## 🗂 Структура проекта (основное)
Детальную структуру см. на этой странице выше или в клонированном проекте.

```
src/
├── app/                  # Next.js App Router: layout, страницы и роутиг
│   ├── layout.js
│   ├── page.js
    ├── globals.scss      # Глобальные и модульные SCSS
    └── *.module.scss
├── components/           # UI-компоненты (SCSS Modules)
│   ├── Header/
│   ├── Footer/
│   └── ServiceCard/
├── zustand/                # Zustand-хранилища (useStore.js)
├── api/                  # Клиент Supabase и вспомогательные API-функции
│   ├── supabaseClient.js
│   └── supabaseClientConnect.js
├── backend/              # Мини-бэкенд на Express (демо-эндпоинты)
│   ├── api/
│   └── data/
└── css/                 # Все стили из .module.scss хранятся тут, также и файл с переменными цветов.
```

---

## 🔍 Ключевые модули — кратко

### `src/supabaseApi/supabaseClient.js`

Хранит и экспортирует настроенный клиент Supabase (инициализация по URL и ключу из `.env`).

### `src/backend/api/`

Здесь просходит обработка данных которые создают пользователи и админ.

### `src/store/useStore.js`

Zustand-хранилище: глобальные флаги, данные пользователя и настройки приложения. (в текущее время не используется)

### `src/backend/`
Здесь настроены router для post/get/patch запросов.

---

## 🚀 Запуск backend (опционально)

* Для запуска бекенда используйте команду node server.js - находится в корневой папке.
```

