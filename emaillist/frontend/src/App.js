import React from 'react'
import styles from './assets/css/App.css';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

import emails from './assets/json/data.json'

const App = () => {
  return (
    <div id={styles.App}>
      <RegisterForm />
      <SearchBar />
      <Emaillist emails={emails} />
    </div>
  )
}

export default App