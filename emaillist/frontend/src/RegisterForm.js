import React, {useCallback, useRef} from 'react'
import styles from './assets/scss/RegisterForm.scss';

const RegisterForm = ({callback}) => {

  return (
    <form
      className={styles.RegisterForm}
      onSubmit={e => {
        e.preventDefault();
        callback({
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
        })
      }}>
        <input type={'text'} name={'firstName'} placeholder={'성'} className={styles.InputFirstName} />
        <input type={'text'} name={'lastName'} placeholder={'이름'} className={styles.InputLastName} />
        <input type={'text'} name={'email'} placeholder={'이메일'} className={styles.InputEmail} />
        <input type={'submit'} value={'등록'} />
    </form>
  )
}

export default RegisterForm