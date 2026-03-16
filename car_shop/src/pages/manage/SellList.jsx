import React from 'react'
import styles from './SellList.module.css'

const SellList = () => {
  return (
    <>
      <div className={styles.tableDiv}>
        <table>
          <colgroup>
            <col width='5%'/>
            <col width='10%'/>
            <col width='25%'/>
            <col width='20%'/>
            <col width='10%'/>
            <col width='15%'/>
            <col width='15%'/>
          </colgroup>
          <thead className={styles.thead}>
            <tr>
              <td rowSpan='2'>No</td>
              <td colSpan='3'>구매자정보</td>
              <td colSpan='3'>차량정보</td>
            </tr>
            <tr>
              <td>구매자명</td>
              <td>연락처</td>
              <td>구매일</td>
              <td>색상</td>
              <td>모델명</td>
              <td>가격</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr>
              <td>1</td>
              <td>이름</td>
              <td>010-2343-6542</td>
              <td>날짜</td>
              <td>색상</td>
              <td>G80</td>
              <td>3000원</td>
            </tr>
          </tbody>
        </table>
      </div>
    
    
    
    
    </>
  )
}

export default SellList