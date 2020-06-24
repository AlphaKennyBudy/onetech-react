import React from 'react';
import FilterableContactTable from './FilterableContactTable';
import '../css/App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <FilterableContactTable users={users}/>
      </div>
    </div>
  );
}

const users = [
	{"name": "Alex", "phone": "1234584"},
	{"name": "Jack", "phone": "6846846"},
	{"name": "Arman", "phone": "7984849"},
	{"name": "Fedor", "phone": "1234584"},
	{"name": "Lebron", "phone": "6846846"},
	{"name": "Messi", "phone": "7984849"},
]

export default App;
