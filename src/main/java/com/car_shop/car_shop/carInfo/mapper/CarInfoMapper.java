package com.car_shop.car_shop.carInfo.mapper;

import com.car_shop.car_shop.carInfo.dto.CarInfoDTO;
import com.car_shop.car_shop.carInfo.dto.SaleInfoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CarInfoMapper {

  // 차량 하나씩 등록 쿼리 실행 메서드
  void insertCar(CarInfoDTO carInfoDTO);

  // 차량 등록시 목록 조회 쿼리 실행 메서드
  List<CarInfoDTO> manageList();

  // 판매 정보 등록 쿼리 실행 메서드
  void insertSale(SaleInfoDTO saleInfoDTO);

  // 차량 판매 목록 조회 쿼리 실행 메서드
  List<SaleInfoDTO> salesList();

}
