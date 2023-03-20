var bestsellers = [
  { title: "Da Vinci Code,The", author: "Brown, Dan", volumeSales: 5094805 },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "Rowling, J.K.",
    volumeSales: 4475152,
  },
  { title: "Angels and Demons", author: "Brown, Dan", volumeSales: 3193946 },
  { title: "Twilight", author: "    Meyer, Stephenie", volumeSales: 2315405 },
  {
    title: "Thousand Splendid Suns,A",
    author: "Hosseini, Khaled",
    volumeSales: 1583992,
  },
  { title: "Lost Symbol,The", author: "Brown, Dan", volumeSales: 2183031 },
  {
    title: "World According to Clarkson,The",
    author: "Clarkson, Jeremy",
    volumeSales: 1489403,
  },
  { title: "Lovely Bones,The", author: "Sebold, Alice", volumeSales: 2005598 },
  { title: "Labyrinth", author: "Mosse, Kate", volumeSales: 1181093 },
];

//1. filter()를 사용해서 댄브라운의 책들만 console.log로 출력하세요.
var byBrown = bestsellers.filter((name) => name.author === "Brown, Dan");
console.log(byBrown);

let cities = [
  { name: "Berlin", population: 3792621 },
  { name: "New York", population: 8419133 },
  { name: "Mumbai", population: 12480000 },
  { name: "Seoul", population: 9776000 },
  { name: "Tokyo", population: 13960000 },
  { name: "Beijing", population: 21540000 },
  { name: "Budapest", population: 1750000 },
];

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].population >= 10000000) {
    bigCities.push(cities[i]);
  }
}

// 2. filter()를 사용해서 인구가 천만 이상인 도시를 console.log로 출력하세요
let bigCitiesB = cities.filter((people) => people.population >= 10000000);
console.log(bigCitiesB);

// 3. filter(), sort()를 사용해 인구가 천만 미만인 도시를 인구가 적은 순서대로 반환하세요.
let smallCities = cities.filter((people) => people.population < 10000000)
                        .sort((c1, c2) => c1.population - c2.population);
console.log(smallCities);
