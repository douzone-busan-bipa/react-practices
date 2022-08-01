import React from 'react';
import styles from './assets/scss/ImageListItem.scss';

export default function ImageListItem({no, url, comment, callback}) {
    return (
        <li className={styles.ImageListItem}>
            <span style={{
                backgroundImage: `url(${url})`
            }}/>
            <a onClick={() => callback(no)}>삭제</a>
        </li>
    )
}