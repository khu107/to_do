import 'App.css';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import Working from 'components/Working';

export default function App() {
  const [user, setUser] = useState([
    {
      id: 0,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다.',
      isDone: false,
    },
    {
      id: 1,
      title: 'Js 공부하기',
      body: 'Js 기초를 공부해봅시다.',
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };
  const clickHandler = () => {
    const newObj = {
      id: user.length + 1,
      title,
      body,
      isDone: false,
    };

    setUser([...user, newObj]);
    setTitle('');
    setBody('');
  };
  const removeHandler = (id) => {
    const removeList = user.filter((user) => user.id !== id);
    setUser(removeList);
  };
  const chek = (id) => {
    setUser(
      user.map((v) => {
        if (v.id === id) {
          return { ...v, isDone: !v.isDone };
        }
        return v;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="form-body">
          <div className="input">
            <label className="form-label">제목:</label>
            <input
              className="add-input"
              type="text"
              value={title}
              onChange={titleChangeHandler}
            />
            <label className="form-label">내용:</label>
            <input
              className="add-input"
              type="text"
              value={body}
              onChange={bodyChangeHandler}
            />
          </div>
          <Button
            onClick={clickHandler}
            className="add-button"
            variant="success"
          >
            추가하기
          </Button>{' '}
        </div>
        <div className="list-cont">
          <h2>Working... 🔥</h2>
          <div className="list-wrapper">
            {user
              .filter((v) => v.isDone === false)
              .map((e) => {
                return (
                  <Working
                    key={e.id}
                    e={e}
                    chek={chek}
                    removeHandler={removeHandler}
                  />
                );
              })}
          </div>
          <h2>Done... 👍</h2>
          <div className="list-wrapper">
            {user
              .filter((v) => v.isDone === true)
              .map((e) => {
                return (
                  <Working
                    key={e.id}
                    e={e}
                    chek={chek}
                    removeHandler={removeHandler}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
