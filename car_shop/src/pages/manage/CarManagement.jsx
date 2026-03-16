import React, { useEffect, useState } from 'react'
import styles from './CarManagement.module.css'
import Button from '../../conponents/Button'
import Input from '../../conponents/Input'
import { regCarAxios, showCarAxios } from '../../api/manageApi'


const CarManagement = () => {

  // 차량 등록시 저장 state
  const [regCar, setRegCar] = useState({
    
    carName : ''
    , carPrice : ''
    , carCompany : '0'
  })

  // 차량 목록 조회 저장 state
  const [showCarList, setShowCarList] = useState([])


  // 마운트시 차량 목록 조회
  useEffect(()=>{
    showCar();
  },[])

  // 차량 목록 조회 함수
  const showCar = async()=>{
    const response = await showCarAxios();
    setShowCarList(response.data)
  }
  
  console.log('showCarList : ',showCarList)





  // onChange시 실행 함수
  const handleRegCar=(e)=>{
    setRegCar(()=>{
      return{
        ...regCar
        , [e.target.name] : e.target.value
      }
    })
    if (error[e.target.name]) {
      setError({
        carName : ''
        , carPrice : ''
        , carCompany : ''
      })
    }
  }
  console.log(regCar)

  // onClick시 등록 실행 함수
  const clickRegCar= async()=>{
    // 유효성 검사
    const isValid = validateField()
    if (!isValid) {
      return
    }

    const response = await regCarAxios(regCar)
    if (response?.status === 201) {
      alert('차량을 등록하였습니다.')
      setRegCar({
        carName: '',
        carPrice: '',
        carCompany: '0'
      })
      setError({
        carName: '',
        carPrice: '',
        carCompany: ''
      })
      await showCar()
    } else {
      alert('오류발생. 차량 등록에 실패하였습니다.')
    }
  }



  // 제조사, 모델명 가격 필수입력
  // 에러 메시지 state
  const [error, setError] = useState({
    carName: '',
    carPrice: '',
    carCompany: ''
  })

  // 유효성 검사 함수
  const validateField = () => {
    let isValid = true
    const newerror = {
      carName: '',
      carPrice: '',
      carCompany: ''
    }

    // 모델명 검사
    if (regCar.carName === '') {
      newerror.carName = '모델명은 필수 입력입니다.'
      isValid = false
    }

    // 가격 검사
    if (regCar.carPrice === '') {
      newerror.carPrice = '차량가격은 필수 입력입니다.'
      isValid = false
    } else if (isNaN(regCar.carPrice)) {
      newerror.carPrice = '숫자를 입력해주세요.'
      isValid = false
    }

    // 제조사 검사
    if (regCar.carCompany === '0') {
      newerror.carCompany = '제조사를 선택해주세요.'
      isValid = false
    }

    setError(newerror)
    return isValid
  }





  return (
    <>
      <div className={styles.container}>

        <div className={styles.regDiv}>
          <p>차량 등록</p>
          <div className={styles.inputDiv}>
            <div className={styles.input2}>
              <p>제조사</p>
  
              <select 
                className={styles.select}
                name='carCompany'
                value={regCar.carCompany}
                onChange={e=>handleRegCar(e)}
              >
                <option value="0">선택</option>
                <option value="현대">현대</option>
                <option value="기아">기아</option>
              </select>
            
              {
                error.carCompany 
                &&
                <p 
                  className={styles.error}
                >{error.carCompany}</p>
              }
            </div>
  
  
            <div className={styles.input2}>
              <p>모델명</p>
              <Input 
                
                name='carName'
                value={regCar.carName}
                onChange={e=>handleRegCar(e)}
              />
              {
                error.carName 
                &&
                <p 
                  className={styles.error}
                >{error.carName}</p>
              }
            </div>
  
  
            <div className={styles.input2}>
              <p>차량가격</p>
              <Input 
                name='carPrice'
                value={regCar.carPrice}
                onChange={e=>handleRegCar(e)}
              />
              {
                error.carPrice 
                &&
                <p 
                  className={styles.error}
                >{error.carPrice}</p>
              }
            </div>
          </div>
          </div>




        <div className={styles.buttonDiv}>
          <Button 
            title='등 록'
            onClick={e=>clickRegCar(e)}
          />
        </div>


        <div className={styles.tableDiv}>
          <p>등록된 차량 목록</p>
          <table>
            <colgroup>
              <col width='25%'/>
              <col width='25%'/>
              <col width='25%'/>
              <col width='25%'/>
            </colgroup>
            <thead className={styles.thead}>
              <tr>
                <td>No</td>
                <td>모델번호</td>
                <td>모델명</td>
                <td>제조사</td>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {
                showCarList.length===0
                ?
                <tr><td colSpan={4}>등록된 차량이 없습니다.</td></tr>
                :
                showCarList.map((car,i)=>{
                  return(
                    <tr key={car.carNum}>
                      <td>{i+1}</td>
                      <td>{car.carNum}</td>
                      <td>{car.carName}</td>
                      <td>{car.carCompany}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    
   
    </>
  )
}

export default CarManagement