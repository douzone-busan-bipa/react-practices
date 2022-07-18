import React from 'react';

export default function () {
    return (
        <div>
            <h1
                onClick={e => console.log('click!')}
                style={{
                    cursor: 'pointer'
                }}>
                Inline Handler
            </h1>
        </div>
    );
}