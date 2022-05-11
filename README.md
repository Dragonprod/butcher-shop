# Butcher shop

## Навигация

- [Описание проекта](#desc)
- [Стек технологий](#stack)
- [Функционал](#functionality)
- [Сборка проекта](#launch)
- [Документация](#docs)
- [Лицензия](#license)

<a name="desc"></a>

## Описание проекта

Приложение мясной лавки

<a name="stack"></a>

## Стек технологий

- Frontend:
  [![React.js](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
  [![Redux.js](https://img.shields.io/badge/Redux.js-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Backend:
  [![Spring Boot](https://img.shields.io/badge/SpringBoot-6DB33F?logo=springboot&logoColor=white)](https://spring.io/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
- Proxy:
  [![Nginx](https://img.shields.io/badge/Nginx-009639.svg?logo=nginx&logoColor=white)](https://nginx.org/)
- Work:
  [![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/)
  [![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com/)

<a name="functionality"></a>

## Функционал

- Клиент
  - Просмотр каталога
  - Оформление заказа
- Администратор
  - Добавление категории
  - Добавление продукта
  - Просмотр продуктов
  - Просмотр категорий
  - Просмотр пользователей
  - Просмотр заказов
  - Редактирование заказа
  - Редактирование пользователей


<a name="launch"></a>

## Сборка проекта

### Production

1. Склонируйте данный репозиторий:

```sh
git clone https://github.com/Dragonprod/butcher-shop.git tims
cd butcher-shop
```

2. Отредактируйте `.env.example`:

```sh
FRONTEND_PRODUCTION_URL=YOUR_FRONTEND_PRODUCTION_URL

BACKEND_JWT_SECRET=YOUR_BACKEND_JWT_SECRET
BACKEND_JWT_EXIPRATION=YOUR_BACKEND_JWT_EXIPRATION

POSTGRES_SERVER=YOUR_POSTGRES_SERVER
POSTGRES_USER=YOUR_POSTGRES_USER
POSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD
POSTGRES_DB=YOUR_POSTGRES_DB
```

3. Переименуйте `.env.example` в `.env`
4. Запустите проект с помощь Docker Compose:

```sh
docker-compose up --build -d
```

### Development

1. Склонируйте данный репозиторий:

```sh
git clone https://github.com/Dragonprod/butcher-shop.git tims
cd butcher-shop
```

2. Отредактируйте `.env.example`:

```sh
FRONTEND_PRODUCTION_URL=YOUR_FRONTEND_PRODUCTION_URL

BACKEND_JWT_SECRET=YOUR_BACKEND_JWT_SECRET
BACKEND_JWT_EXIPRATION=YOUR_BACKEND_JWT_EXIPRATION

POSTGRES_SERVER=YOUR_POSTGRES_SERVER
POSTGRES_USER=YOUR_POSTGRES_USER
POSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD
POSTGRES_DB=YOUR_POSTGRES_DB
```

3. Переименуйте `.env.example` to `.env`
4. Установите зависимости Backend части:

```sh
cd backend
gradle clean install
```

5. Установите зависимости Frontend части:

```sh
cd frontend
npm install
```

6. Запустите базу данных с помощью Docker Compose:

```sh
docker-compose up --build -d
```

7. Запустите Backend часть:

```sh
cd backend
./gradlew bootRun
```

8. Запустите Frontend часть:

```sh
cd frontend
npm start
```

<a name="docs"></a>

## Документация

Frontend запускается по адресу - [http://localhost:3000](http://localhost:3000 "url запуска frontend")
Backend запускается по адресу - [http://localhost:8080](http://localhost:8080 "url запуска backend")

### Endpoints

- Swagger - [/docs](http://localhost:8080/docs "url запуска Swagger")

### Тестовые аккаунты

- Клиент

  - Логин - `client@example.com`
  - Пароль - `client`

- Администратор
  - Логин - `admin@example.com`
  - Пароль - `admin`


<a name="license"></a>

## Лицезия

- [MIT](LICENSE)
