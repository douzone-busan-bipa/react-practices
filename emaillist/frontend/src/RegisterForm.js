import React, {useRef} from 'react'
import styles from './assets/scss/RegisterForm.scss';

const RegisterForm = ({callback}) => {
  const refForm = useRef(null);

  return (
    <form
      ref={refForm}
      className={styles.RegisterForm}
      onSubmit={function(e) {
        e.preventDefault();

        try {
          const newEmail = Array.from(e.target, input => {
            // simple validation
            if(input.value === ''){
              throw new Error(`${input.placeholder}이 비어 있습니다. `);
            }
            return {n: input.name, v:input.value};
          })
          .filter(({n}) => n !== '')
          .reduce((res, {n, v}) => {
            res[n] = v;
            return res;
          }, {});

          refForm.current.reset();
          callback(newEmail);
        } catch(err) {
          console.log(err.message);
        }
      }}>
        <input type={'text'} name={'firstName'} placeholder={'성'} className={styles.InputFirstName} />
        <input type={'text'} name={'lastName'} placeholder={'이름'} className={styles.InputLastName} />
        <input type={'text'} name={'email'} placeholder={'이메일'} className={styles.InputEmail} />
        <input type={'submit'} value={'등록'} />
    </form>
  )
}

export default RegisterForm