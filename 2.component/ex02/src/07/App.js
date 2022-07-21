import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

// addtional...
import {library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

function App() {
    library.add(faBell, far, fab);

    return (
        <div>
            { /* example */ }
            <FontAwesomeIcon icon={faBell}/>
            <FontAwesomeIcon icon={faCheckCircle}/>
            <FontAwesomeIcon icon={faTimesCircle}/>

            { /* solid */ }
            <FontAwesomeIcon icon={["fas", "bell"]}/>
            <FontAwesomeIcon icon={"bell"}/>

            { /* regular */ }
            <FontAwesomeIcon icon={["far", "bell"]}/>

            { /* brands */ }
            <FontAwesomeIcon icon={["fab", "apple"]}/>
            <FontAwesomeIcon icon={["fab", "github"]}/>
            <FontAwesomeIcon icon={["fab", "google"]}/>
            <FontAwesomeIcon icon={["fab", "facebook"]}/>

        </div>
    );
}

export default App;