// "use client"

import { addToDo, fetchTodos } from '@/app/action'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

export interface Todo {
    // userId: number;
    // id: number;
    title: string;
    // completed: boolean;
};

const Todos = () => {
   
    const queryclient = useQueryClient();

    const [title, setTitle] = useState("");
    const [id, setId] = useState("");

    const { data, isLoading } = useQuery({
        queryFn: () => fetchTodos(id), //the function to perform in the useQuery  
        queryKey: ["todos", {id}], //the query key for the usequery   //for sending parms to function the id is to be passed to todos ie the query key because each time query refreches the key will not notice and we cannot refrch with the mutuation
        // refetchInterval: () => 4000,  refreches in certain intervals
    });

    const { mutateAsync: addToDoAsync } = useMutation({
        mutationFn: addToDo,
        onSuccess: () => {
            queryclient.invalidateQueries(["todos"]);  //the query with the query name todos will get called/refeched
        },  //calls when mutation is success
    });

    if(isLoading) return <div>Loading....</div>

  return (
    <div>
        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} />
        <button onClick={async () => {
            console.log("title", title);
            await addToDoAsync(title);
            setTitle("");
        }}>Add To Do</button>

      { data?.map((todo: Todo) => {
        return (
            <div>
                {/* <h1>{todo.id}</h1> */}
                {/* <h1>{todo.userId}</h1> */}
                <p>{todo.title}</p>
                {/* <p>{todo.completed}</p> */}
            </div>
        )
      }) }
    </div>
  )
}

export default Todos
