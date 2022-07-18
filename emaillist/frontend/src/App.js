import React from 'react'
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import emails from './assets/json/data.json'
import './assets/scss/App.scss';

const App = () => {
  return (
    <div id={'App'}>
      <RegisterForm />
      <SearchBar />
      <Emaillist emails={emails} />
    </div>
  )
}

export default App