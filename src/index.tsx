import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './components/title/Title.tsx'
import './index.css'
import Navigation from './components/navigation/Navigation.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation/>
    <div className="title-main"><Title/></div>
  </React.StrictMode>
)