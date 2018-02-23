import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  same_mailing: boolean;
  validForm: boolean;

  client: Client;
  client_name: string;
  client_account_num: string;
  client_dob: number;
  client_claims_free: number;
  client_comments: string;

  client_street: string;
  client_province: string;
  client_postal_code: string;
  client_mailing: Address;

  house_street: string;
  house_province: string;
  house_postal_code: string;

  house: House;
  house_address: Address;
  house_build: string;
  house_year_built: number;
  house_sqft: number;
  house_basement_sqft: number;
  house_num_floors: string;
  house_updated: boolean;
  house_alarm_type: string;

  constructor(private authService: AuthService,
    private router: Router,
    private validateService: ValidateService,
    private quoteService: QuoteService) {
    this.same_mailing = true;
    this.validForm = true;
    this.client_province = "BC";
    this.house_province = "BC";
    this.house_build = "Standard";
    this.house_num_floors = "1";
    this.house_updated = true;
    this.house_alarm_type = "None";
    this.client_comments = "";
    this.client_claims_free = 0;

  }

  ngOnInit() {
  }

  onQuoteClick() {
    this.client_mailing = {
      street: this.client_street,
      province: this.client_province,
      postal_code: this.client_postal_code
    }

    if (this.same_mailing) {
      this.house_address = this.client_mailing;
    }
    else {
      this.house_address = {
        street: this.house_street,
        province: this.house_province,
        postal_code: this.house_postal_code
      }
    }

    this.client = {
      name: this.client_name,
      account_num: this.client_account_num,
      dob: this.client_dob,
      claims_free: this.client_claims_free,
      mailing: this.client_mailing,
      comments: this.client_comments
    }

    this.house = {
      address: this.house_address,
      build_quality: this.house_build,
      year_built: this.house_year_built,
      sqft: this.house_sqft,
      basement_sqft: this.house_basement_sqft,
      num_floors: this.house_num_floors,
      updated: this.house_updated,
      alarm_type: this.house_alarm_type,
      price: -1
    }

    if (this.validateService.validateQuote(this.client, this.house)) {
      //console.log('success!');

      if (2018 - this.house.year_built <= 25) {
        this.house.updated = true;
      }

      // approximate building limits
      const numFloors = this.house.num_floors;
      const base_sqft = this.house.basement_sqft;

      if ((numFloors == "3+" || numFloors == "2") && base_sqft > 0) {
        this.house.price = this.quoteService.approxRCTWithBasement(this.house.sqft, this.house.build_quality);
      }
      else if ((numFloors == "3+" || numFloors == "2")) {
        this.house.price = this.quoteService.approxRCTNoBasement(this.house.sqft, this.house.build_quality);
      }
      else if (base_sqft > 0) {
        this.house.price = this.quoteService.approxRCT1StoreyBase(this.house.sqft, this.house.build_quality);
      }
      else {
        this.house.price = this.quoteService.approxRCT1Storey(this.house.sqft, this.house.build_quality);
      }
      this.validForm = true;

      this.quoteService.createAndSaveQuote(this.client, this.house, () => {
        this.router.navigateByUrl('view-quote');
      });
    }
    else {
      this.validForm = false;
    }
  }

  changeUpdate(status: string) {
    if (status == 'Less than 25 years old') {
      this.house_updated = true;
    }
    else {
      this.house_updated = false;
    }
  }
}

interface Client {
  name: string;
  account_num: string;
  dob: number;
  claims_free: number;
  mailing: Address;
  comments: string;
}

interface House {
  address: Address;
  build_quality: string;
  year_built: number;
  sqft: number;
  basement_sqft: number;
  num_floors: string;
  updated: boolean;
  alarm_type: string;
  price: number;
}

interface Address {
  street: string;
  province: string;
  postal_code: string;
}
