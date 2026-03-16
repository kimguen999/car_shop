import React, { useEffect, useState } from 'react'
import styles from './SellList.module.css'
import { salesListAxios } from '../../api/manageApi'

const SellList = () => {


  
  // 판매 목록 state
  const [salesList, setSalesList] = useState([])

  // 마운트 시 판매 목록 조회
  useEffect(() => {
    getSalesList()
  }, [])

  // 판매 목록 조회 함수
  const getSalesList = async() => {
    const response = await salesListAxios()
    setSalesList(response.data)
  }

  

  console.log('salesList :', salesList)

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
            {/* 판매 등록 정보 없을때 */}
            {
              salesList.length === 0
              ?
              <tr>
                <td 
                  colSpan={7}
                >등록된 판매 정보가 없습니다.</td>
              </tr>
              :

              salesList.map((sale, i) => {
                return (
                  <tr 
                    key={sale.salesNum}
                  >
                    <td>
                      {i + 1}
                    </td>
                    <td>
                      {sale.buyerName}
                    </td>

                    {/* 연락처 없을때 - 출력 */}
                    <td>
                      {sale.buyerContact ? sale.buyerContact : '-'}
                    </td>

                    {/* 날짜. 시간 형식 클로드 도움*/}
                    <td>
                      {sale.salesDate ? 
                        new Date(sale.salesDate).toLocaleString('ko-KR', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: false
                        }).replace(/\. /g, '.')
                        : '-'
                      }
                    </td>

                    <td>{sale.salesColor}</td>
                    <td>{sale.carName}</td>
                    <td>{sale.carPrice.toLocaleString()}원</td>
                  </tr>
                )
              })
            }
          </tbody>



        </table>
      </div>





    </>
  )
}

export default SellList