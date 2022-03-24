import { useState } from 'react';
import './App.scss';
import Header from './components/Main/Header/Header';
import Main from './components/Main/Main';



function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
        <Header search = {search} setSearch = {setSearch} />
        <Main  search = {search} />
    </div>
  );
}

export default App;
