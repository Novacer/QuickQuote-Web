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


  // approxRCTWithBasement(number, string) returns the approximate building limit
  //   for a two storey house with sqft size, build quality specified by custom, and a basement
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


  // approxRCTNoBasement(number, string) returns an approximate building limit
  //   for a two storey house with sqft size, build quality specified by custom, and no basement
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


  // approxRCT1StoreyBase(number, string) returns an approximate building limit
  //   for a one storey house with sqft size, build quality specified by custom, and basement
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


  // approxRCT1Storey(number, string) returns an approximate building limit
  //   for a one storey house with sqft size, build quality specified by custom, and no basement
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


  // createAndSaveQuote(Object, Object, func) creates a quote using client and house,
  //   and saves it to the localStorage, calling next upon finishing
  createAndSaveQuote(client, house, next) {
    this.m_client = client;
    this.m_house = house;

    //Gore
    var gore_score = 100;
    var gore_discounts = [];

    //Intact
    var intact_score = 100;
    var intact_discounts = [];

    //Wawanesa
    var wawanesa_score = 100;
    var wawanesa_discounts = [];

    //Family
    var family_score = 100;
    var family_discounts = [];


    //check Target Market
    if (house.price / house.sqft < 275) {
      gore_score -= 15;
      intact_score -= 25;
    }
    if (house.price / house.sqft <= 225) {
      family_score -= 5;
    }
    if (!house.updated) {
      gore_score -= 10;
      intact_score -= 10;
      family_score -= 23;
    }
    else if (house.year_built < (2018 - 40)) {
      gore_score -= 20;
      family_score -= 20;
    }

    if (house.year_built > 2008) {
      gore_score += 15;
      gore_discounts.push("New Home Discount 15%");

      wawanesa_score += 15;
      wawanesa_discounts.push("New Home Discount 15%");

      family_score += 15;
      family_discounts.push("New Home Discount 15%");
    }
    else if (house.year_built > 2003) {
      var new_home_disc = (house.year_built - 2003) * 3;
      gore_score += new_home_disc;
      gore_discounts.push("New Home Discount " + new_home_disc + "%");

      wawanesa_score += new_home_disc;
      wawanesa_discounts.push("New Home Discount " + new_home_disc + "%");

      family_score += new_home_disc;
      family_discounts.push("New Home Discount " + new_home_disc + "%");
    }
    if (house.price >= 1000000) {
      family_score = -1;
      family_discounts = ["No price for this company"];
    }


    // check claims free discount
    if (client.claims_free >= 5) {
      gore_score += 14;
      gore_discounts.push("Claims Free Discount 14%");
    }
    if (client.claims_free >= 4) {
      wawanesa_score += 15;
      wawanesa_discounts.push("Claims Free Discount 15%");

      family_score += 14;
      family_discounts.push("Claims Free Discount 14%");
    }
    else if (client.claims_free >= 3) {
      gore_score += 9;
      gore_discounts.push("Claims Free Discount 9%");
    }

    // Intact claims free calculation
    var cfd = (client.claims_free <= 10) ? (client.claims_free * 2.7) : 27;
    var int_cfd = Math.round(cfd);
    intact_score += int_cfd;
    intact_discounts.push("Claims Free Discount " + int_cfd + "%");


    // check age discount
    if (2018 - client.dob >= 50) {
      gore_score += 19;
      gore_discounts.push("Senior Discount 19%");

      wawanesa_score += 15;
      wawanesa_discounts.push("Senior Discount 15%");
    }
    if (2018 - client.dob >= 60) {
      intact_score += 30;
      intact_discounts.push("Senior Discount 30%");

      family_score += 15;
      family_discounts.push("Senior Discount 15%");
    }
    else if (2018 - client.dob >= 50) {
      intact_score += 22;
      intact_discounts.push("Senior Discount 22%");
    }


    // check alarm discount
    if (house.alarm_type == 'Local') {
      gore_score += 3;
      gore_discounts.push("Local Alarm Discount 3%");

      intact_score += 18;
      intact_discounts.push("Local Alarm Discount 18%");

      wawanesa_score += 10;
      wawanesa_discounts.push("Local Alarm Discount 10%");

      family_score += 4;
      family_discounts.push("Local Alarm Discount 4%");
    }
    else if (house.alarm_type == 'Monitored'){
      gore_score += 8;
      gore_discounts.push("Monitored Alarm Discount 8%");

      intact_score += 18;
      intact_discounts.push("Monitored Alarm Discount 18%");

      wawanesa_score += 10;
      wawanesa_discounts.push("Monitored Alarm Discount 10%");

      family_score += 9;
      family_discounts.push("Monitored Alarm Discount 9%");
    }

    // create company objects

    this.gore = {
      company_name: "Gore",
      discountList: gore_discounts,
      score: gore_score
    }

    this.intact = {
      company_name: "Intact",
      discountList: intact_discounts,
      score: intact_score
    }

    this.wawanesa = {
      company_name: "Wawanesa",
      discountList: wawanesa_discounts,
      score: wawanesa_score
    }

    this.family = {
      company_name: "Family",
      discountList: family_discounts,
      score: family_score
    }

    let companies_list = [this.gore, this.intact, this.wawanesa, this.family];


    // define comparison function
    let comparison = function (a,b) {
      if (a.score < b.score) {
        return 1;
      }
      else if (a.score > b.score) {
        return -1;
      }
      else {
        return 0;
      }
    }

    // sort the array by score (descending)
    companies_list.sort(comparison);

    this.quote = {
      client_name: client.name,
      companies: companies_list
    }

    localStorage.setItem('quote', JSON.stringify(this.quote));
    next();
  }


  // getSaveQuote() reads and returns the saved quote in localStorage
  getSavedQuote() {
    const savedString = localStorage.getItem('quote');

    if (savedString == null) {
      return false;
    }

    else {
      return JSON.parse(savedString);
    }
  }

  // pushSavedQuote(func) pushes the quote that is saved in localStorage into the
  //   users list of quotes saved in MongoDB, calling next upon finishing
  // requires: 'quote' exists in localStorage
  pushSavedQuote(next) {
    this.loadQuote();

    this.authService.addQuotes(this.quote).subscribe(data => {
      if (data.success) {
        this.authService.updateUserData(data.user);
        next();
      }

      else {
        return false;
      }
    });
  }


  // loadQuote() reads the quote from localStorage
  loadQuote() {
    this.quote = JSON.parse(localStorage.getItem('quote'));
  }


  // removeQuote(array, func) overwrites the user's list of quotes saved in
  //   MongoDB with newQuotes, calling next upon finishing
  removeQuote(newQuotes, next) {

    this.authService.removeQuotes(newQuotes).subscribe(data => {
      if (data.success) {
        this.authService.updateUserData(data.user);
        next();
      }

      else {
        return false;
      }
    });
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
