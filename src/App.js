import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import FullList from './components/FullList';
import styles from './styles/modules/app.module.scss';
import { Switch, Route, Redirect } from "react-router-dom";
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
        
        <Switch>
        <Route exact path="/"  component={AppContent }/>
        <Route exact path="/about" component={TodoList } />
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
