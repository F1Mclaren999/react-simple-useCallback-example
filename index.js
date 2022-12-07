import React, { useCallback, useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import generateWords from './fetchData';
import './style.css';

const ObserveWithoutMemo = ({ term, onTermClick }) => {
  const terms = generateWords.generateWords(10);
  const map = (e) => <div onClick={onTermClick}>{e}</div>;
  return <div id="main">{terms.map(map)}</div>;
};

const ObserveWithMemo = React.memo(ObserveWithoutMemo);

const List = ({ term }) => {
  const [currentValue, setCurrentValue] = useState('PingPong');
  // As long as term is the same, useCallback() returns the same function object.
  const onTermClick = useCallback(
    (event) => {
      console.log('term click -> ', event.target.innerHTML);
      setCurrentValue(event.target.innerHTML);
    },
    [term]
  );
  return (
    <div>
      <h3>List</h3>
      <ObserveWithMemo term={term} onTermClick={onTermClick} />
      {/* <ObserveWithoutMemo term={term} onTermClick={onTermClick} /> */}
      <h5>Clicked Item :</h5> {currentValue}
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <List />
  </StrictMode>
);
