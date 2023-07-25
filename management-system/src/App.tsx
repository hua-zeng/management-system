import React from 'react'
import { useState } from 'react'
import { Button, Space } from 'antd';
import {UpCircleOutlined} from "@ant-design/icons"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "App">
      顶级组件
      <Button type = "primary">按钮</Button>
      <UpCircleOutlined style={{fontSize: '40px', color:'red'}}/>
    </div>
  )
}

export default App
