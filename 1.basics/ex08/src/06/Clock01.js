import React from 'react';

function Clock01() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(minutes < 10) {
        minutes = '0' + minutes
    }
    
    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    let session = 'AM';
    if(hours > 12) {
        session = 'PM';
    }

    if(hours < 10) {
        hours = '0' + hours;
    }

    return (
        <div>
            {hours}:{minutes}:{seconds} {session}
        </div>
    );
}

export default Clock01;