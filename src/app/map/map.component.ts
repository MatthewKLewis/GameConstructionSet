import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WORLD_X_WIDTH, WORLD_Y_HEIGHT } from '../../../core/constants';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  xArray: number[] = [];
  yArray: number[] = [];

  constructor(apiService: APIService) {
    apiService.GetAllWorldTiles().subscribe();

    this.xArray = Array.from(
      { length: WORLD_X_WIDTH },
      (_, index) => index + 1
    );
    this.yArray = Array.from(
      { length: WORLD_Y_HEIGHT },
      (_, index) => index + 1
    );
  }
}
