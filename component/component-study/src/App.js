import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';//MyComponent 파일 불러오기

function App() {
  return (
    // <MyComponent name ={3}/> 이렇게 설정하면 3은number라 에러가 뜬다(props문법오류)
    <MyComponent name="react"  age={4}/>
    
  );
}

export default App;
