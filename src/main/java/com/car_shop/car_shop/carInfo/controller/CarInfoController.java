package com.car_shop.car_shop.carInfo.controller;


import com.car_shop.car_shop.carInfo.dto.CarInfoDTO;
import com.car_shop.car_shop.carInfo.dto.SaleInfoDTO;
import com.car_shop.car_shop.carInfo.service.CarInfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequestMapping("/cars")
@RestController
@RequiredArgsConstructor
public class CarInfoController {
  public final CarInfoService carInfoService;

  // 차량 등록 api
  // (post) localhost:8080/cars
  @PostMapping("")
  public ResponseEntity<?> insertCar(@RequestBody CarInfoDTO carInfoDTO){
    try {
      carInfoService.insertCar(carInfoDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    } catch (Exception e){
      log.error("차량 등록 중 오류" , e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  // 차량 등록시 목록 조회 api\
  // (get) localhost:8080/cars
  @GetMapping("")
  public ResponseEntity<?> manageList(){
    try {
      List<CarInfoDTO> carInfoDTOList = carInfoService.manageList();
      return ResponseEntity.status(HttpStatus.OK).body(carInfoDTOList);
    } catch (Exception e){
      log.error("차량 등록시 마운트되는 목록 조회 오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  // 판매 정보 등록 api
  // (post) localhost:8080/cars/sale
  @PostMapping("/sale")
  public ResponseEntity<?> insertSale(@RequestBody SaleInfoDTO saleInfoDTO){
    try {
      carInfoService.insertSale(saleInfoDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    } catch (Exception e){
      log.error("차량 등록 중 오류" , e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  // 차량 판매 목록 조회 api
  // (get) localhost:8080/cars/sale
  @GetMapping("/sale")
  public ResponseEntity<?> salesList(){
    try {
      List<SaleInfoDTO> list = carInfoService.salesList();
      return ResponseEntity.status(HttpStatus.OK).body(list);
    } catch (Exception e){
      log.error("차량판매 목록 조회 api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}
