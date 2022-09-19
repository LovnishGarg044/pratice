import React, { useEffect, useState ,useRef} from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

const dropIn = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: 'scale(0.9)',
    opacity: 0,
  },
};

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Low');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
      setDate(todo.date);
      setDescription(todo.description);
      setImage(todo.image);
    } else {
      setTitle('');
      setStatus('Low');
      setDate('');
      setDescription('');
      
    }
  }, [type, todo, modalOpen,image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title, status,description,image && date) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            date,
            description,
            image,
          })
        );
        toast.success('Task added successfully');
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status || todo.date !== date || todo.description !== description || todo.image !== image) {
          dispatch(updateTodo({ ...todo, title, status, date ,description}));
          toast.success('Task Updated successfully');
        } else {
          toast.error('No changes made');
          return;
        }
      }
      setModalOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={styles.closeButton}
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
              // animation
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>

            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}>
                {type === 'add' ? 'Add' : 'Update'} TODO
              </h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="type">
              Priority
                <select
                  id="type"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </label>
              <label htmlFor="date">
                 Due-Date 
              <input type="date" id="date" value={date}
              onChange={((e) => setDate(e.target.value) )}/>
              </label>
              <label htmlFor="type">
                 Description 
              <input type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}/>
              </label>
              <label htmlFor="files">
                 Image 
              <input type="file"
                  id="image"
                  
                  value={""}
                  onChange={(e) => setImage(e.target.files[0])}/>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  {type === 'add' ? 'Add Task' : 'Update Task'}
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal;
