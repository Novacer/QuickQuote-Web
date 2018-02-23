import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { QuoteService } from '../../services/quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  uniqueNames: string[];
  reccomendations: string[];
  view_profile: boolean;
  view_quotes: boolean;
  view_clients: boolean;
  randomPortraits: string[];

  constructor(private authService: AuthService, private router: Router, private quoteService: QuoteService) {
    this.reccomendations = ['Most Suitable', 'Suitable', 'Less Suitable', 'Not Suitable'];
    this.randomPortraits = ['http://sites.ieee.org/ias-icps/files/2016/05/male-generic-profile.jpg',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-354gNrs5QoI2JUuykVpPHiKCtYgcsdtbulzOErWOFf_5fk03g',
                            'https://www.cambrex.com/wp-content/themes/cambrex/images/placeholder-profile.jpg',
                            'http://www.newdesignfile.com/postpic/2014/07/generic-profile_352873.png',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gwCOEfnHbmKstVrm5bkO9tTszTI4BI1boJOVROmIB94CuJEY'];
    this.view_profile = true;
    this.view_clients = false;
    this.view_quotes = false;
    this.uniqueNames = [];
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      this.user = data.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onQuoteView() {
    this.view_profile = false;
    this.view_clients = false;
    this.view_quotes = true;
  }

  onProfileView() {
    this.view_profile = true;
    this.view_clients = false;
    this.view_quotes = false;
  }

  onClientsView() {
    this.view_profile = false;
    this.view_clients = true;
    this.view_quotes = false;
  }

  onContactView() {
    window.open("https://github.com/Novacer/QuickQuote-Web/blob/master/README.md", "_blank");
  }

  deleteQuote(index: number) {
    this.user.quotes.splice(index, 1);

    this.quoteService.removeQuote(this.user.quotes, () => {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.uniqueClients();
    });
  }

  uniqueClients() {
    var count = 0;
    const quotesList = this.user.quotes;
    // reset the unique names
    this.uniqueNames = [];

    for (var i = 0; i < quotesList.length; i++) {
      if (this.uniqueNames.indexOf(quotesList[i].client_name) == -1) {
        this.uniqueNames.push(quotesList[i].client_name);
        count++;
      }
    }
    return count;
  }

  redirQuote() {
    this.router.navigateByUrl('quote');
  }

  onStartClick(company_name) {
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

interface User {
  name: string;
  email: string;
  quotes: any[];
  username: string;
}
