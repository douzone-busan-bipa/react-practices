import React from 'react'
import styles from './assets/scss/Email.scss';
import PropTypes from 'prop-types';

export default function Email({firstName, lastName, email}) {
  return (
    <li className={styles.Email}>
      <h4>{`${firstName} ${lastName}`}</h4>
      <span>{email}</span>
      <a href=''></a>
    </li>
  );
}

Email.propType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,  
  email: PropTypes.string.isRequired
}