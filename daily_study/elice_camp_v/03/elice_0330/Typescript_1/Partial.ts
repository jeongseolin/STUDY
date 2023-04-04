interface Todo {
  title: string
  description: string
}

// obj매개변수 타입에 Partial Utility types을 추가해주세요
function updateTodo(obj: Partial<Todo>) { 
  return obj;
}

const result = updateTodo({
  title: "title",
})

console.log(result); // { title: 'title' } 출력