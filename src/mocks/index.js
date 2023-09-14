export const EXPENSECATEGORIES = [
  {
    id: 1689271774041,
    name: "Коммунальные платежи",
    isEdditing: false,
  },
  {
    id: 1689271776341,
    name: "Еда",
    isEdditing: false,
  },
  {
    id: 1689931776341,
    name: "Бензин",
    isEdditing: false,
  },
  {
    id: 1688331776341,
    name: "Одежда",
    isEdditing: false,
  },
  {
    id: 1693331776341,
    name: "Транспорт",
    isEdditing: false,
  },
];

export const EXPENSES_DATA = [
  {
    id: 1687621776364,
    date: new Date(2023, 4, 12).getTime(),
    description: "Куртка",
    category: "Одежда",
    amount: 100,
    isEdditing: false,
  },
  {
    id: 1688331776876,
    date: new Date(2023, 2, 3).getTime(),
    description: "Продукты",
    category: "Еда",
    amount: 50,
    isEdditing: false,
  },
  {
    id: 1688331776236,
    date: new Date(2023, 4, 12).getTime(),
    description: "40 литров",
    category: "Бензин",
    amount: 100,
    isEdditing: false,
  },
  {
    id: 1688331776364,
    date: new Date(2023, 4, 12).getTime(),
    description: "ЖЭС",
    category: "Коммунальные платежи",
    amount: 95,
    isEdditing: false,
  },
  {
    id: 1688823776364,
    date: new Date(2021, 4, 12).getTime(),
    description: "Велосипед",
    category: "Транспорт",
    amount: 100,
    isEdditing: false,
  },
  {
    id: 1693731472392,
    isEdditing: false,
    date: new Date(2023, 8, 2).getTime(),
    description: "20 литров",
    category: "Бензин",
    amount: 50,
  },
];

/* export const ExpenseDropdown1 = [
  ...new Set(EXPENSECATEGORIES.map((category) => category.name)),
];

export const ExpenseDropdown = ["Все категории", ...ExpenseDropdown1]; */

//--------------Incomes----------------------------------------------------------

export const INCOMESCATEGORIES = [
  {
    id: 1689321774041,
    name: "Зарплата",
    isEdditing: false,
  },
  {
    id: 1680781776341,
    name: "Фриланс",
    isEdditing: false,
  },
];

export const INCOMES_DATA = [
  {
    id: 1754621776364,
    date: new Date(2023, 4, 12).getTime(),
    description: "ЗП",
    category: "Зарплата",
    amount: 1000,
    isEdditing: false,
  },
  {
    id: 1688331098876,
    date: new Date(2023, 5, 12).getTime(),
    description: "ЗП",
    category: "Зарплата",
    amount: 1000,
    isEdditing: false,
  },
  {
    id: 1688874776236,
    date: new Date(2023, 6, 12).getTime(),
    description: "ЗП",
    category: "Зарплата",
    amount: 1000,
    isEdditing: false,
  },
  {
    id: 1688834776364,
    date: new Date(2023, 6, 18).getTime(),
    description: "подработка",
    category: "Фриланс",
    amount: 200,
    isEdditing: false,
  },
  {
    id: 1688823456364,
    date: new Date(2021, 7, 12).getTime(),
    description: "ЗП",
    category: "Зарплата",
    amount: 1000,
    isEdditing: false,
  },
  {
    id: 1693731472392,
    isEdditing: false,
    date: new Date(2023, 8, 2).getTime(),
    description: "ЗП",
    category: "Зарплата",
    amount: 500,
  },
];

/* export const IncomesDropdown1 = [
  ...new Set(INCOMESCATEGORIES.map((category) => category.name)),
];

export const IncomesDropdown = ["Все категории", ...IncomesDropdown1]; */
