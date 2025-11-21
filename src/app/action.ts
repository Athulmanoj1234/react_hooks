import { Todo } from "./react-query/components/Todos";

let todos = [
  { title: "Learn React Query" },
  { title: "Complete Chat App" },
  { title: "Study for MERN Interviews" },
  { title: "Practice TypeScript" },
  { title: "Work on Next.js Project" }
];

export async function fetchTodos(id: string): Promise<Todo[]> {
    await new Promise((resolve, rejected) => setTimeout(resolve, 3000));

    // const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log("refeched");
    return todos;
};

export async function addToDo(title: string) {
    todos = [...todos, { title: title }];
    // debugger;
}