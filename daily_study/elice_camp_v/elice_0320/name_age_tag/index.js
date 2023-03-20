import { inputExample, makeAdultList, makeChildList } from "./makeList.js"

// 지시사항의 예시와 같은 구현 화면이 나오도록, 코드를 자유롭게 작성해 보세요.
const adultNamesElement = document.querySelector('#adultnamelist')
const adultAgesElement = document.querySelector('#adultagelist')

const childNamesElement = document.querySelector('#childnamelist')
const childAgesElement = document.querySelector('#childagelist')

const [adultNameLiTags, adultAgeLiTags] = makeAdultList(inputExample)
const [childNameLiTags, childAgeLiTags] = makeChildList(inputExample)

adultNamesElement.innerHTML = adultNameLiTags
adultAgesElement.innerHTML = adultAgeLiTags

childNamesElement.innerHTML = childNameLiTags
childAgesElement.innerHTML = childAgeLiTags