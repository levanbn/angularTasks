import { Component, OnInit } from '@angular/core';
import { tableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class tableComponent implements OnInit {
  get elements() {
    return this.tableService.elements;
  }
  constructor(private tableService: tableService) {}

  ngOnInit(): void {}
}
