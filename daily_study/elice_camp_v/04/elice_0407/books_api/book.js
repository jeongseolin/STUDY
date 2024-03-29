// 책 데이터입니다. 수정되는 경우 오답 처리가 될 수 있습니다.
let books = [
  { id: 1, title: "War and Peace", author: "Leo Tolstoy" },
  { id: 2, title: "The Old Man and the Sea", author: "Ernest Hemingway" },
  { id: 3, title: "The Republic", author: "Plato" },
  { id: 4, title: "Meditations", author: "Marcus Aurelius" },
  { id: 5, title: "Anna Karenina", author: "Leo Tolstoy" },
  { id: 6, title: "A Farewell to Arms", author: "Ernest Hemingway" },
];

// 전체 책 리스트를 조회하기 위한 함수를 구현하세요.
exports.list = () => {
  return books.map(({ id, title, author }) => ({
    id,
    title,
    author,
  }));
};

// 특정 id의 책 정보를 조회하기 위한 함수를 구현하세요.
exports.get = (id) => {
  const book = books.find((book) => book.id === id);

  if (!book) {
    throw new Error("Book not found");
  }

  return book;
};
