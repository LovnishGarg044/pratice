import React from 'react'
import { useSelector } from 'react-redux';
import FullList from './FullList';

export const TodoList = () => {

  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  
    const filteredTodoList = sortedTodoList.filter((item) => {
      if (filterStatus === 'all') {
        return true;
      }
      return item.status === filterStatus;
    });
    return (
    <div>{filteredTodoList.map((todo) => (
        <FullList key={todo} todo={todo} />
      ))}</div>
  )
}
