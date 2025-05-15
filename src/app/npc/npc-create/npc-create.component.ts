import { Component } from '@angular/core';
import { NPCService } from '../../services/npc.service';
import { NPC } from '../../../../core/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-npc-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './npc-create.component.html',
  styleUrl: './npc-create.component.scss',
})
export class NpcCreateComponent {
  newNPC: NPC;

  constructor(public npcService: NPCService) {
    npcService.GetAllRaces();
    this.newNPC = {
      ID: 0,
      FirstName: '',
      LastName: '',
      WorldID: 0,
    };
  }

  submit() {
    if (this.newNPC.FirstName != '') {
      console.log(this.newNPC);
      //this.npcService.CreateNPC(this.newNPC);
    }
  }
}
