import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.css']
})
export class ViewQuoteComponent implements OnInit {

  savedQuote: Object;
  existsSavedQuote: boolean;
  companies: any[];
  reccomendations: string[];

  constructor(private router: Router, private quoteService: QuoteService) {
    let quote = this.quoteService.getSavedQuote();

    if (!quote) {
      this.savedQuote = null;
      this.existsSavedQuote = false;
    }
    else {
      this.savedQuote = quote;
      this.existsSavedQuote = true;
      this.companies = quote.companies;
    }

    this.reccomendations = ['Most Suitable', 'Suitable', 'Less Suitable', 'Not Suitable'];
  }

  ngOnInit() {
  }

  onStartClick(company_name: string) {
    if (company_name == 'Wawanesa') {
      window.open("https://brokerportal-signin.wawanesa.com/portal/sso/login", "_blank");
    }
    else if (company_name == 'Gore') {
      window.open("https://www.gobroker.ca/Account/LogOn?ReturnUrl=%2f", "_blank");
    }
    else if (company_name == 'Intact') {
      window.open("https://brokers.intactinsurance.com/", "_blank");
    }
    else if (company_name == 'Family') {
      window.open("https://familynet.familyins.com/Portal/Account/SignIn?returnUrl=https%3A%2F%2Ffamilynet.familyins.com%2FPOS%2F", "_blank");
    }
  }

}
