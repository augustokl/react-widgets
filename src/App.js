import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './routes';
import Header from './components/Header';


const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
