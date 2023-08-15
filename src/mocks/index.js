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

export const EXPENSESDATA = [
  {
    id: 1687621776364,
    date: new Date(2023, 4, 12),
    description: "Куртка",
    category: "Одежда",
    amount: 100,
    isEdditing: false,
  },
  {
    id: 1688331776876,
    date: new Date(2023, 2, 3),
    description: "Продукты",
    category: "Еда",
    amount: 50,
    isEdditing: false,
  },
  {
    id: 1688331776236,
    date: new Date(2023, 4, 12),
    description: "40 литров",
    category: "Бензин",
    amount: 100,
    isEdditing: false,
  },
  {
    id: 1688331776364,
    date: new Date(2023, 4, 12),
    description: "ЖЭС",
    category: "Коммунальные платежи",
    amount: 95,
    isEdditing: false,
  },
  {
    id: 1688823776364,
    date: new Date(2021, 4, 12),
    description: "Велосипед",
    category: "Транспорт",
    amount: 100,
    isEdditing: false,
  },
];

export const ExpenseDropdown1 = [
  ...new Set(EXPENSECATEGORIES.map((category) => category.name)),
];

export const ExpenseDropdown = ["Все категории", ...ExpenseDropdown1];
