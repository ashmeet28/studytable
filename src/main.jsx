import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignInScene from './SignInScene.jsx'
import LoaderDiv from './LoaderDiv'

ReactDOM.createRoot(document.getElementById('mainrootdiv')).render(
  <React.StrictMode>
    <LoaderDiv />
    <SignInScene />
  </React.StrictMode>,
)
