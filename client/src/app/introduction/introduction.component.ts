import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  User: any;
  constructor(private router: Router) {
    this.User = {
      'name': '',
      'desc': '  '
    }
  }

  proceed() {
    console.log(this.User.name + this.User.desc);
    this.router.navigate(['personal_information', { name: this.User.name, desc: this.User.desc }]);
  }

}
