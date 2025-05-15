import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NPCService } from '../../services/npc.service';
import { NPC } from '../../../../core/interfaces';

@Component({
  selector: 'app-npc-detail',
  standalone: true,
  imports: [],
  templateUrl: './npc-detail.component.html',
  styleUrl: './npc-detail.component.scss',
})
export class NpcDetailComponent {
  npc!: NPC;

  constructor(private route: ActivatedRoute, private npcService: NPCService) {
    let ID = this.route.snapshot.queryParams['ID'];
    this.npcService.GetNPCByID(ID).subscribe((res: NPC) => {
      //console.log(res);
      this.npc = res;
    });
  }
}
