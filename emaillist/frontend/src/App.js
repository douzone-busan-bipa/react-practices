import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json'
import './assets/scss/App.scss';

const App = () => {
  const [emails, setEmails] = useState(data);

  const notifyEmailDelete = function(no) {
    console.log(no);
  }

  const notifyEmailAdd = function(email) {
    console.log(email);
  }

  const notifyKeywordChanged = function(keyword) {
    const result = data.filter(e => e.firstName.indexOf(keyword) !== -1 || e.lastName.indexOf(keyword) !== -1 || e.email.indexOf(keyword) !== -1);
    setEmails(result);
  }

  return (
    <div id={'App'}>
      <RegisterForm callback={notifyEmailAdd} />
      <SearchBar callback={notifyKeywordChanged} />
      <Emaillist emails={emails} />
    </div>
  )
}

export default App