export const defaultOrders = [
  {
    id: 0,
    products: [
      {
        id: 0,
        name: 'Чикен бургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Гамбургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 2,
        name: 'Чизбургер',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '16.05.2002',
    sum: 999,
    isCompleted: false,
  },
  {
    id: 1,
    products: [
      {
        id: 0,
        name: 'Стейк из баранины',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Стейк из говядины',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '10.05.2002',
    sum: 5500,
    isCompleted: true,
  },
  {
    id: 2,
    products: [
      {
        id: 0,
        name: 'Вода',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Пиво',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 2,
        name: 'Лимонад',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '10.05.2002',
    sum: 1500,
    isCompleted: true,
  },
];

export const defaultUsers = [
  {
    id: 0,
    username: 'user0',
    email: 'user0@mail.ru',
    password: '$2a$10$mqFdnZjD6MTtF1CPTAc1Ke1UjRblWybWDUEO9IyuOWjxdNMwsII1',
    orderAmount: 10,
    role: 'Пользователь',
  },
  {
    id: 1,
    username: 'admin',
    email: 'admin@mail.ru',
    password: '$2a$10$mqFdnZjD6MTtF1CPTAc1Ke1UjRblWybWDUEO9IyuOWjxdNMwsII1',
    role: 'Администратор',
  },
];

export const defaultAdminOrders = [
  {
    id: 0,
    email: 'user0@mail.ru',
    products: [
      {
        id: 0,
        name: 'Чикен бургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Гамбургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 2,
        name: 'Чизбургер',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '16.05.2002',
    sum: 999,
    isCompleted: false,
  },
  {
    id: 1,
    email: 'user1@mail.ru',
    products: [
      {
        id: 0,
        name: 'Чикен бургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Гамбургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 2,
        name: 'Чизбургер',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '17.11.2002',
    sum: 6375,
    isCompleted: false,
  },
  {
    id: 2,
    email: 'user2@mail.ru',
    products: [
      {
        id: 0,
        name: 'Чикен бургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Гамбургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 2,
        name: 'Чизбургер',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '17.11.2002',
    sum: 7482,
    isCompleted: true,
  },
];

export const defaultAdminProducts = [
  {
    id: 0,
    email: 'user0@mail.ru',
    products: [
      {
        id: 0,
        name: 'Чикен бургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Гамбургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 2,
        name: 'Чизбургер',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '16.05.2002',
    sum: 999,
    isCompleted: false,
  },
  {
    id: 1,
    email: 'user1@mail.ru',
    products: [
      {
        id: 0,
        name: 'Чикен бургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Гамбургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 2,
        name: 'Чизбургер',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '17.11.2002',
    sum: 6375,
    isCompleted: false,
  },
  {
    id: 2,
    email: 'user2@mail.ru',
    products: [
      {
        id: 0,
        name: 'Чикен бургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 1,
        name: 'Гамбургер',
        photoUrl: './assets/images/1.png',
      },
      {
        id: 2,
        name: 'Чизбургер',
        photoUrl: './assets/images/1.png',
      },
    ],
    createDate: '17.11.2002',
    sum: 7482,
    isCompleted: true,
  },
];
