import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json'
import './assets/scss/App.scss';

const App = () => {
  const [emails, setEmails] = useState(data);
  
  const notifyEmailAdd = function(email) {
    console.log(email);
  }

  const notifyKeywordChanged = function(keyword) {
    console.log(keyword);
  }

  return (
    <div id={'App'}>
      <RegisterForm />
      <SearchBar callback={notifyKeywordChanged}/>
      <Emaillist emails={emails} />
    </div>
  )
}

export default App