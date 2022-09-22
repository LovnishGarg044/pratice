import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/list.module.scss';

const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

function FullList( {todo} ) {
   


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
            <p className={styles.des}>
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
