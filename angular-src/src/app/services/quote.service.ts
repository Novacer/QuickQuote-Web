import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class QuoteService {

  m_client: Object;
  m_house: Object;
  quote: Quote;
  gore: Company;
  intact: Company;
  wawanesa: Company;
  family: Company;

  constructor(private authService: AuthService) { }

  approxRCTWithBasement(sqft: number, custom: string) {
    if (custom == "Standard") {
      return sqft*200;
    }
    else if (custom == "Semi-custom") {
      return sqft*275;
    }
    else if (custom == "Custom") {
      return sqft*310;
    }
    else {
      return -1;
    }
  }

  approxRCTNoBasement(sqft: number, custom: string) {
    if (custom == "Standard") {
      return sqft*200;
    }
    else if (custom == "Semi-custom") {
      return sqft*250;
    }
    else if (custom == "Custom") {
      return sqft*300;
    }
    else {
      return -1;
    }
  }

  approxRCT1StoreyBase(sqft: number, custom: string) {
    if (custom == "Standard") {
      return sqft*200;
    }
    else if (custom == "Semi-custom") {
      return sqft*225;
    }
    else if (custom == "Custom") {
      return sqft*275;
    }
    else {
      return -1;
    }
  }

  approxRCT1Storey(sqft: number, custom: string) {
    if (custom == "Standard") {
      return sqft*180;
    }
    else if (custom == "Semi-custom") {
      return sqft*210;
    }
    else if (custom == "Custom") {
      return sqft*250;
    }
    else {
      return -1;
    }
  }

  createAndSaveQuote(client: Object, house: Object) {

  }

}

interface Quote {
  client_name: string;
  companies: Company[];
}

interface Company {
  company_name: string;
  discountList: string[];
  score: number;

}
