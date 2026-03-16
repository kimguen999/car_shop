package com.car_shop.car_shop.carInfo.service;


import com.car_shop.car_shop.carInfo.dto.CarInfoDTO;
import com.car_shop.car_shop.carInfo.dto.SaleInfoDTO;
import com.car_shop.car_shop.carInfo.mapper.CarInfoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarInfoService {
  private final CarInfoMapper carInfoMapper;

  // 차량 하나씯 등록 기능
  public void insertCar(CarInfoDTO carInfoDTO){
    carInfoMapper.insertCar(carInfoDTO);
  }

  // 차량 등록시 목록 조회 기능
  public List<CarInfoDTO> manageList(){
    return carInfoMapper.manageList();
  }

  // 판매 정보 등록 기능
  public void insertSale(SaleInfoDTO saleInfoDTO){
    carInfoMapper.insertSale(saleInfoDTO);
  }






}
