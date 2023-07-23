import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化置顶
import "reset-css"
// UI框架样式

// 全局样式
import "@/assets/styles/global.scss"
// 组件样式
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
