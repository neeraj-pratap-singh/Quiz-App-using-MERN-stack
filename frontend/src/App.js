import React from 'react';
import '../src/styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
// import { CheckUserExist } from '../helper/helper';
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <Quiz></Quiz>
  },
  {
    path : '/result',
    element : <Result></Result>
  },
])

function App() {
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;