import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { NPC } from '../../../../core/interfaces';
import { PortraitMakerComponent } from '../../widgets/portrait-maker/portrait-maker.component';

@Component({
  selector: 'app-npc-detail',
  standalone: true,
  imports: [PortraitMakerComponent],
  templateUrl: './npc-detail.component.html',
  styleUrl: './npc-detail.component.scss',
})
export class NpcDetailComponent {
  npc!: NPC;

  constructor(private route: ActivatedRoute, private apiService: APIService) {
    let ID = this.route.snapshot.queryParams['ID'];
    this.apiService.GetNPCByID(ID).subscribe((res: NPC) => {
      //console.log(res);
      this.npc = res;
    });
  }
}
