import { Component, OnInit } from '@angular/core';
import { informationService } from './information.service';

@Component({
  selector: 'app-first',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})

export class informationComponent implements OnInit {
  get users() {
    return this.informationService.users;
  }
  list: boolean = true;
  loading: boolean = false;
  constructor(private informationService: informationService) {}
  showuser: boolean = false;
  ngOnInit(): void {}
  click() {
    this.list = false;
    setTimeout(() => {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.showuser = true;
      }, 1000);
    }, 1000);
  }
}
export { Component };

