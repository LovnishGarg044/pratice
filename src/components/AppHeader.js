import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import {TodoModal} from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';

import { NavLink } from "react-router-dom";
function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appH}>
    <div className={styles.appHeader}>
       <NavLink to="" style={{ textDecoration: 'none',
    color:"var(--black-2)" }}>
    <Button variant="secondary" >  Home</Button>
      </NavLink>
      <NavLink to="/add" style={{ textDecoration: 'none',
    color:"white" }}><Button variant="primary" onClick={() => setModalOpen(true)}>
       Add Task
      </Button></NavLink>
       <NavLink to="/about" style={{ textDecoration: 'none',
    color:"var(--black-2)" }}><Button variant="secondary">Full List</Button></NavLink>
     <NavLink to="/filter" style={{ textDecoration: 'none',
    color:"white" }}>
     <Button variant="primary" >Check Due Date</Button> 
      </NavLink> 
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        
        <option value="all">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
    </div>
  );
}

export default AppHeader;
