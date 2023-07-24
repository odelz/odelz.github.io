'use client'
import React, { useState, useEffect } from 'react';
import { ref, set, push, onValue } from "firebase/database";
import { db } from "../firebase"; // Assuming you have already set up Firebase and imported the Firestore instance
import Layout from '../components/Layout';
const Todo = () => {
  const [todo, setTodo] = useState({ title: "", note: "" });
  const [todos, setTodos] = useState<{ title: string, note: string }[]>([]); // Specify the type explicitly

  const reference = ref(db, "todos/");
  
  const addTodo = async () => {
    push(reference, {
      title: todo.title,
      note: todo.note,
    });
  }

  const fetchTodos = async () => {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      if (Array.isArray(data)) {
        const todoList = data.filter((todo: any) => typeof todo === 'object' && todo !== null && 'title' in todo && 'note' in todo);
        setTodos(todoList);
      } else {
        setTodos([]);
      }
    }
    );
  }

  
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Layout>
      <div className="todo-container">
        <div className="todo">
          <div className="todo-header">
            Todo-App
          </div>
          <form>
            <div className="todo-input">
              <label htmlFor="todo">
                What do you have to do today?
              </label>
              <input
                text-align="center"
                type="text"
                placeholder="To do..."
                value={todo.title}
                onChange={(e) => {
                  const newToDo = {
                    ...todo,
                    title: e.target.value
                  };
                  setTodo(newToDo);
                }}
              />
            </div>
            <div className="todo-input">
              <label htmlFor="todo">
                Any notes on the task?
              </label>
              <input
                type="text"
                placeholder="Notes..."
                value={todo.note}
                onChange={(e) => {
                  const newNote = {
                    ...todo,
                    note: e.target.value
                  };
                  setTodo(newNote);
                }}
              />
            </div>

            <button
              type="submit"
              className="todo-btn"
              onClick={addTodo}
            >
              Submit
            </button>
          </form>
        </div>


        <div className="todo-content">
          {todos?.map((i) => (
            <p key={i.title}>
              {todo.title}
              {todo.note}
            </p>
          ))}
        </div>
      </div>
    </Layout >
  )
}

export default Todo;
