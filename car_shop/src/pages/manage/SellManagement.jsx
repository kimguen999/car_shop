import React, { useEffect, useState } from 'react'
import styles from './SellManagement.module.css'
import Input from '../../conponents/Input'
import Button from '../../conponents/Button'
import { regSaleAxios, showCarAxios } from '../../api/manageApi'  // ← showCarAxios 추가
import { useNavigate } from 'react-router-dom'

const SellManagement = () => {

  const nav = useNavigate();

  // 판매 정보 등록시 저장 state
  const [regSale, setRegSale] = useState({
    buyerName: '',
    tel1: '',
    tel2: '',
    tel3: '',
    buyerContact: '',
    salesColor: '0',
    carNum: '0'
  })

  // 차량 카테 state
  const [carList, setCarList] = useState([])

  // 유효성검사 에러 state
  const [error, setError] = useState({
    buyerName: '',
    buyerContact: '',
    salesColor: '',
    carNum: ''
  })



  // 마운트 시 차량 목록 조회
  useEffect(() => {
    getCarList()
  }, [])

  // 차량 목록 조회 함수
  const getCarList = async() => {
    const response = await showCarAxios()
    setCarList(response.data)
  }




  // 필드별 유효성 검사 함수 (onChange 시 실행)
  const validateFieldOnChange = (name, value) => {
    let errorMsg = '';
    switch(name) {
      case 'tel1':
        const telPattern1 = /^[0-9]{3}$/;
        if(value.length > 0 && !telPattern1.test(value)) {
          errorMsg = '연락처 형식이 맞지 않습니다.'
        }
        break;
      case 'tel2':
        const telPattern2 = /^[0-9]{4}$/;
        if(value.length > 0 && !telPattern2.test(value)) {
          errorMsg = '연락처 형식이 맞지 않습니다.'
        }
        break;
      case 'tel3':
        const telPattern3 = /^[0-9]{4}$/;
        if(value.length > 0 && !telPattern3.test(value)) {
          errorMsg = '연락처 형식이 맞지 않습니다.'
        }
        break;
    }
    return errorMsg;
  }


  // 등록 시 유효성 검사 함수
  const validateField = () => {
    let isValid = true
    const newerror = {
      buyerName: '',
      buyerContact: '',
      salesColor: '',
      carNum: ''
    }

    // 구매자 검사
    if (regSale.buyerName === '') {
      newerror.buyerName = '구매자명은 필수 입력입니다.'
      isValid = false
    }

    // 차량색상 검사
    if (regSale.salesColor === '0') {
      newerror.salesColor = '색상을 선택해주세요.'
      isValid = false
    }

    // 모델 검사
    if (regSale.carNum === '0') {
      newerror.carNum = '모델을 선택해주세요.'
      isValid = false
    }

    setError(newerror)
    return isValid
  }




  // onChange시 실행 함수
  const handleRegSale = (e) => {
    const {name, value} = e.target;

    setRegSale(prev => ({...prev, [name]: value}));

    // 연락처
    if(name === 'tel1' || name === 'tel2' || name === 'tel3') {
      const newTel1 = name === 'tel1' ? value : regSale.tel1;
      const newTel2 = name === 'tel2' ? value : regSale.tel2;
      const newTel3 = name === 'tel3' ? value : regSale.tel3;
      
      setRegSale(prev => ({
        ...prev,
        buyerContact: `${newTel1}-${newTel2}-${newTel3}`
      }));
    }

    
    // onChange 유효성 검사
    const errorMsg = validateFieldOnChange(name, value);
    if(errorMsg) {
      setError(prev => ({...prev, buyerContact: errorMsg}));
    } else {
      setError(prev => ({...prev, buyerContact: ''}));
    }
  }



  // onClick시 등록 실행 함수
  const clickRegSale = async() => {
    // 유효성 검사
    const isValid = validateField()
    if (!isValid) {
      return
    }


    const response = await regSaleAxios(regSale)
    if (response?.status === 201) {
      alert('판매 정보를 등록하였습니다.')
      setRegSale({
        buyerName: '',
        tel1: '',
        tel2: '',
        tel3: '',
        buyerContact: '',
        salesColor: '0',
        carNum: '0'
      })
      setError({
        buyerName: '',
        buyerContact: '',
        salesColor: '',
        carNum: ''
      })
      nav("/sellList")
    } else {
      alert('오류발생. 판매 정보 등록에 실패하였습니다.')
    }
  }

  return (
    <>

      <div className={styles.container}>
        <div className={styles.regDiv}>
          <p>판매 정보 등록</p>
          <div className={styles.inputDiv}>
            

            <div className={styles.input2}>
              <p>구매자명</p>
              <Input 
                name='buyerName'
                value={regSale.buyerName}
                onChange={handleRegSale}
                placeholder='이순신'
              />
              {error.buyerName && <p className={styles.error}>{error.buyerName}</p>}
            </div>

            
            <div className={styles.input2}>
              <p>연락처</p>
              <div className={styles.tel_div}>
                <Input 
                  name='tel1'
                  value={regSale.tel1}
                  onChange={handleRegSale}
                  placeholder='010'
                  maxLength='3'
                />
                <span>-</span>
                <Input 
                  name='tel2'
                  value={regSale.tel2}
                  onChange={handleRegSale}
                  placeholder='1111'
                  maxLength='4'
                />
                <span>-</span>
                <Input 
                  name='tel3'
                  value={regSale.tel3}
                  onChange={handleRegSale}
                  placeholder='2222'
                  maxLength='4'
                />
              </div>
              {error.buyerContact && <p className={styles.error}>{error.buyerContact}</p>}
            </div>




            <div className={styles.colorModel}>

              <div className={styles.input2}>
                <p>색상</p>
                <select 
                  className={styles.select}
                  name='salesColor'
                  value={regSale.salesColor}
                  onChange={handleRegSale}
                >
                  <option value="0">선택</option>
                  <option value="화이트">화이트</option>
                  <option value="블랙">블랙</option>
                  <option value="레드">레드</option>
                </select>
                {error.salesColor && <p className={styles.error}>{error.salesColor}</p>}
              </div>


              <div className={styles.input2}>
                <p>모델</p>
                <select 
                  className={styles.select}
                  name='carNum'
                  value={regSale.carNum}
                  onChange={handleRegSale}
                >
                  <option value="0">선택</option>
                  {/* ← 변경됨: 동적으로 차량 목록 렌더링 */}
                  {
                    carList.map((car) => (
                      <option key={car.carNum} value={car.carNum}>
                        {car.carName}
                      </option>
                    ))
                  }
                </select>
                {error.carNum && <p className={styles.error}>{error.carNum}</p>}
              </div>
            </div>

          </div>
        </div>

        <div className={styles.buttonDiv}>
          <Button 
            title='등 록'
            onClick={clickRegSale}
          />
        </div>
      </div>





    </>
  )
}

export default SellManagement