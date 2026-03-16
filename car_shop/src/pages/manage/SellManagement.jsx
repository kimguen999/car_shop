import React from 'react'
import styles from './SellManagement.module.css'
import Input from '../../conponents/Input'
import Button from '../../conponents/Button'

const SellManagement = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buyer}>
          <p>구매자명</p>
          <Input />
        </div>
        <div className={styles.colorModel}>
          <div>
            <p>색상</p>
            <select name="" id="">
              <option value="">선택</option>
            </select>
          </div>
          <div>
            <p>모델</p>
            <select name="" id="">
              <option value="">선택</option>
            </select>
          </div>
        </div>
        <div className={styles.tell}>
          <p>연락처</p>
          <Input/>
        </div>
        <div className={styles.button}>
          <Button 
            title='등 록'
          />
        </div>
      </div>
    
    </>
  )
}

export default SellManagement