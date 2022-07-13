import './assets/scss/App.scss';
import logo from './assets/images/logo.svg';

function App() {
    const App = document.createElement('div');
    App.className = 'App';
    App.innerHTML = 
        `<header className="App-header">
            <img src=${logo} className="App-logo" alt="logo" />
            <p>Hello World</p>
        </header>`;
    return App;
}

export {App}