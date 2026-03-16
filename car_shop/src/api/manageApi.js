import axios from "axios"


// 차량 등록 axios
export const regCarAxios = async(regCar)=>{
  try{
    const response = await axios.post(`http://localhost:8080/cars`, regCar)
    return response;
  } catch(e){
    console.log('차량 등록 중 axios 오류',e)
  }
}


// 차량 등록시 목록 조회 axios
export const showCarAxios = async()=>{
  try{
    const response = await axios.get(`http://localhost:8080/cars`);
    return response;
  }catch(e){
    console.log("차량 목록 조회 axios 오류", e) 
  }
}