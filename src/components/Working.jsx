import React from 'react';
import Button from 'react-bootstrap/Button';

function Working({ e, chek, removeHandler }) {
  return (
    <div key={e.id} className="todo-cont">
      <div>
        <h2>{e.title}</h2>
        <div>{e.body}</div>
      </div>
      <div className="todo-btn">
        <Button
          className="btn1"
          onClick={() => removeHandler(e.id)}
          variant="outline-danger"
        >
          삭제하기
        </Button>
        <Button
          className="btn2"
          onClick={() => chek(e.id)}
          variant="outline-success"
        >
          {e.isDone === false ? '완료' : '최소'}
        </Button>
      </div>
    </div>
  );
}

export default Working;
