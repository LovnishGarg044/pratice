import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';

const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

function FullList( {todo} ) {
   console.log(todo);


  return (
    <>
     <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <div className={styles.texts}>
            <p
             className={styles.todoText} 
            >
             Title: {todo.title}
            </p>
            <p className={styles.time}>
            Description:{todo.description}
            </p>
            <p className={styles.time}>
            Priority:{todo.status}
            </p>
            <p className={styles.time}>
             Due-Date:{todo.date}
            </p>
          </div>
        </div>
        
        </motion.div>
    </>
  );
}

export default FullList;
