function App() {
    const App = document.createElement('div');
    App.textContent = "Hello Wolrd";
    return App;
}

document
    .getElementById('root')
    .appendChild(App());