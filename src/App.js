import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import { Switch, Route, Redirect } from "react-router-dom";
import { TodoList } from './components/TodoList';
import DateFilter from './components/DateFilter';
import { TodoModal } from './components/TodoModal';

function App() {
  return (
    <>
      <div >
        <PageTitle>TODO List</PageTitle>
           
        <div className={styles.app__wrapper}>
        <AppHeader /> 
        
        <Switch>
        <Route exact path="/"  component={AppContent }/>
        <Route exact path="/about" component={TodoList } />
        <Route exact path="/filter" component={DateFilter } />
        <Route exact path="/add" component={TodoModal } />
        <Redirect to="/" />
      </Switch>
      </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
