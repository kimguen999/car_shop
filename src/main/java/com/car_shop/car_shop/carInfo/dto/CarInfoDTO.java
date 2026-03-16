package com.car_shop.car_shop.carInfo.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter

public class CarInfoDTO {

  private int carNum;
  private String carName;
  private int carPrice;
  private String carCompany;


}
