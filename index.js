// 2. Task: Object Manipulation

const allBooks = [
  { title: "Book One", author: "Author A", year: 2001 },
  { title: "Book Two", author: "Author B", year: 2005 },
  { title: "Book Three", author: "Author C", year: 2010 },
];

const bookTitles = allBooks.map(book => book.title);

console.log(bookTitles);

// 4. Task: Sorting Objects

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Nissan", model: "Altima", year: 2013 },
  { make: "BMW", model: "X5", year: 2015 },
];

cars.sort((a, b) => a.year - b.year);

console.log(cars);

// 6. Task: Array Reduction

function sum_even_numbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sum = numbers.reduce(
      (sum, num) => (num % 2 === 0 ? sum + num : sum),
      0
    );
    return sum;
  }

//   7. Task: Leap Year Checker
  function isLeapYears(year) {
    const currentYear = year || new Date().getFullYear();
    const isLeapYear =
      (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
      currentYear % 400 === 0;
  
    // console.log(isLeapYear);
    return isLeapYear;
  }

// 10. Task: Functional Programming - Reduce

const ObjectOfItems = [
    { quantity: 10, price: 40 },
    { quantity: 15, price: 50 },
    { quantity: 20, price: 60},
  ];
  
  const totalValueOfArry = ObjectOfItems.reduce((total, item) => total + item.quantity * item.price, 0);
  
  console.log(totalValueOfArry);