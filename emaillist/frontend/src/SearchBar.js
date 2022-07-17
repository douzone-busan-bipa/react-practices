import React from 'react'
import styles from './assets/css/SearchBar.css';

export default function SearchBar() {
  return (
    <div className={styles.Searchbar}>
        <input
          type='text'
          placeholder='찾기' />
    </div>
  )
}