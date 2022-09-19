import { AnimatePresence, motion } from 'framer-motion';
import React ,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import Button from './Button';
import TodoItem from './TodoItem';
import moment from 'moment';
import DatePicker from 'react-datepicker'
import { getDate } from 'date-fns';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const [search,setSearch]=useState('')
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const [startDate, setStartDate] = useState(null);
  // const isWeekday = (date) => {
  //   const day = getDate(date);
  //   return day !== 0 && day !== 6;
  // };

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });
  // console.log(filteredTodoList);
  const dateHandler = (e) => {
    const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
    setDate(newDate);
  };
  useEffect(() => {
    console.log(date);
    if(date !== 'YYYY-MM-DD'){
      const a = filteredTodoList.filter(date => new Date(date.date).getTime() === new Date(`${date}`).getTime())
      console.log(a,"kk");
    }
  }, [date]);
  return (
    <> 
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    > 
     <AnimatePresence>
      <input className={styles.search} onChange={(e)=>setSearch(e.target.timesp)}placeholder='Seach'></input>
      <input type="date" onChange= {dateHandler} value={date} placeholder='Seach'></input>
      
      {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDate={isWeekday}
      placeholderText="Select a weekday"
    /> */}
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.filter((todo)=>{
            return search.toLowerCase() === ''? todo : todo.title.toLowerCase().includes(search) 
          }).map((todo,index) => (
            <TodoItem key={index} todo={todo} />
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Todos
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  </>
  );
}

export default AppContent;
