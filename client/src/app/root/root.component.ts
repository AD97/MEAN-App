import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

}
