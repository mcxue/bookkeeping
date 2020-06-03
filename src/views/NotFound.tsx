import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = ()=>{
  return (
    <div>
      <p>页面不存在，请检查输入路径</p>
      <br/>
      <Link to='/home'>返回主页</Link>
    </div>
  )
};

export {NotFound}

