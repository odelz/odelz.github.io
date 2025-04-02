'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
  deadline?: string;
}

export const TaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', deadline: '' });

  // Fetch tasks from the API
  useEffect(() => {
    axios.get('/tasks/api').then((response) => setTasks(response.data));
  }, []);

  // Handle drag-and-drop
  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
    axios.put('/tasks/api', movedTask); // Update task status in the backend
  };

  // Add a new task
  const addTask = () => {
    axios.post('/tasks/api', newTask).then((response) => {
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '', deadline: '' });
    });
  };

  return (
    <div className="w-full mb-auto p-4">
      <h2 className="text-xl mb-4">Task Management Board</h2>

      {/* Add Task Form */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2 mr-2 text-black placeholder-pink-500"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="border p-2 mr-2 text-black placeholder-pink-500"
        />
        <input
          type="date"
          value={newTask.deadline}
          onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
          className="border p-2 mr-2 text-black placeholder-pink-500"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2">
          Add Task
        </button>
      </div>

      {/* Task Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-4">
          {['To Do', 'In Progress', 'Done'].map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-4 rounded shadow text-black ${
                    status === 'To Do'
                      ? 'bg-red-200'
                      : status === 'In Progress'
                      ? 'bg-yellow-200'
                      : 'bg-green-200'
                  }`}
                >
                  <h3 className="font-bold text-lg mb-2">{status}</h3>
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="bg-white p-2 mb-2 rounded shadow"
                          >
                            <h4 className="font-bold">{task.title}</h4>
                            <p>{task.description}</p>
                            {task.deadline && (
                              <p className="text-sm text-gray-500">Due: {task.deadline}</p>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};