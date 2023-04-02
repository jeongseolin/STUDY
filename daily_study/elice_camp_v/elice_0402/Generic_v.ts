// generic function getMiddle을 작성하세요.
function getMiddle<T>(arr: T[]): T {
  const middleIndex = Math.floor(arr.length / 2);
  return arr[middleIndex];
}





const numArray: number[] = [500, 893, 68, 87, 345, 411, 345, 92, 625, 767, 534, 16, 246, 351];
const numMiddle = getMiddle(numArray);
console.log(`${typeof numMiddle} ${numMiddle}`);

const strArray: string[] = ["a", "getmiddle", "elice", "function", "typescript", "type", "array", "aaa", "s", "swtrack", "generic", "str", "string"];
const strMiddle = getMiddle(strArray);
console.log(`${typeof strMiddle} ${strMiddle}`);

const boolArray: boolean[] = [true, true, true, false, false, true, false, false, true, false, false, true, false, true, false, false];
const boolMiddle = getMiddle(boolArray);
console.log(`${typeof boolMiddle} ${boolMiddle}`);