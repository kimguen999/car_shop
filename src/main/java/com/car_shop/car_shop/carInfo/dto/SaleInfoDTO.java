package com.car_shop.car_shop.carInfo.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class SaleInfoDTO {

  private int salesNum;
  private String buyerName;
  private String buyerContact;
  private String salesColor;
  private int carNum;
  private LocalDateTime salesDate;
  private String carName;
  private int carPrice;

}
