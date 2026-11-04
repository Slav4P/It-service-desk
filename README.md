# It-service-desk

Учебная информационная система для учета заявок на обслуживание оборудования.

## Технологии

- **Backend:** Python, Flask, MySQL (Connector/Python)
- **Frontend:** Angular, TypeScript, Reactive Forms
- **Тесты:** Pytest (backend), Vitest (frontend), Playwright (E2E)

## Установка и запуск

### 1. Подготовка базы данных

Убедитесь, что MySQL запущен. Создайте базу данных и пользователя (если еще не сделано):

```bash
cd database
python bootstrap.py
```
### 2. Запуск Backend (Flask)

Активируйте виртуальное окружение:
- Windows: .\backend\.venv\Scripts\Activate.ps1
- macOS/Linux: source backend/.venv/bin/activate
Создайте файл backend/.env на основе .env.example и укажите данные от БД:
```.env
STORAGE=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=service_desk_course
DB_USER=course_app
DB_PASSWORD=ваш_пароль
```
Запустите сервер:
```bash
cd backend
python -m flask --app app run --debug --port 5000
```

### 3. Запуск Frontend (Angular)
В новом терминале:
```bash
cd frontend
npm ci
npm start
```
Приложение будет доступно по адресу: http://localhost:4200.

## Проверки (Тесты)

### Модульные тесты фронтенда:
```bash
cd frontend
npm test -- --watch=false
npm run build
```
### E2E-тесты (Playwright):
Запускаются при работающих Flask и Angular
```bash
cd e2e
npm ci
npm playwright install chromium
npm test
```

## Безопасность
В проекте не реализована система авторизации и ролей. Это учебная локальная ИС, не предназначенная для публичного доступа. Файлы .env и пароли не публикуются в репозитории (добавлены в .gitignore).