import React from 'react'
import styles from './Head.module.css'
import { Outlet, useNavigate } from 'react-router-dom'


const Head = () => {

  const nav = useNavigate();

  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.headList}>
          <li
            onClick={()=>nav('')}
          >홈</li>
          <li
            onClick={()=>nav('/carInfo')}
          >차량관리</li>
          <li
            onClick={()=>nav('/sellInfo')}
          >판매정보등록</li>
          <li
            onClick={()=>nav('/sellList')}
          >판매목록조회</li>
        </ul>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Head