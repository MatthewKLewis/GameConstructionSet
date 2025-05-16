import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-map-detail',
  standalone: true,
  imports: [],
  templateUrl: './map-detail.component.html',
  styleUrl: './map-detail.component.scss',
})
export class MapDetailComponent {
  x: number = 0;
  y: number = 0;

  constructor(private route: ActivatedRoute, private apiService: APIService) {
    this.x = this.route.snapshot.queryParams['x'];
    this.y = this.route.snapshot.queryParams['y'];
  }
}
