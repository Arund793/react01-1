import { useState } from 'react';
import MyB from './MyButton';
import { Button1, Button3 } from './ButtonLib';
import AboutPage from './AboutPage';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import CountState from './CountState';
import CountState2 from './CountState2'; // 👈 추가! CountState2 임포트

import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <div className="wrapper">
        <h1>Welcome to my app</h1>
        <div>
          <p>default export example</p>
          <MyB />

          <p>named export example</p>
          <Button1 /> &nbsp;
          <Button3 />

          <p>wrapping example:</p>
          <AboutPage />
          <Profile />

          <p>Rendering lists</p>
          <ShoppingList />
        </div>

        <div>
          <p>Updating the screen</p>
          <CountState />
          <CountState />
          <CountState />
        </div>

        <div>
          <p>Sharing data between components</p>
          <CountState2 count={count} onClick={handleClick} />
          <CountState2 count={count} onClick={handleClick} />
        </div>
      </div>
  );
}
