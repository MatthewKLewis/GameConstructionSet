import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public testService: TestService) {}
  ngOnInit() {
    this.testService.GetAllNPCs().subscribe((res: any) => {
      console.log(res);
    });

    this.testService.GetAllRaces().subscribe((res: any) => {
      console.log(res);
    });
  }
}
