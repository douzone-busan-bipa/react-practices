import React from 'react';
import ImageListItem from './ImageListItem';
import styles from './assets/scss/ImageList.scss';

export default function ImageList({imageList, callback}) {
    return (
        <ul className={styles.ImageList}>
            {imageList.map(item => <ImageListItem
                key={item.no}
                no={item.no}
                url={item.url}
                comment={item.comment}
                callback={callback}/>)}
        </ul>
    )
}