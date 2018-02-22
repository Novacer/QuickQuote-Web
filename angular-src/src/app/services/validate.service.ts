import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
      return false;
    }

    else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateQuote(client, house) {
    // check client basic fields
    if (client.name == undefined || client.account_num == undefined || client.dob == undefined || client.claims_free == undefined) {
      return false;
    }

    // check mailing
    if (client.mailing.street == undefined || client.mailing.province == undefined || client.mailing.postal_code == undefined) {
    return false;
    }

    // check house basic fields
    if (house.build_quality == undefined || house.year_built == undefined || house.sqft == undefined ||
    house.basement_sqft == undefined || house.num_floors == undefined || house.updated == undefined ||
    house.alarm_type == undefined) {
      return false;
    }

    // check house address
    if (house.address.street == undefined || house.address.province == undefined || house.address.province == 'Pick a province' ||
    house.address.postal_code == undefined) {
      return false;
    }

    else {
      return true;
    }
  }
}
