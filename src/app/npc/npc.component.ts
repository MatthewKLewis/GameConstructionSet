import { Component, OnInit } from '@angular/core';
import { NPCService } from '../services/npc.service';
import { RouterLink } from '@angular/router';
import { Confirmation, NPC } from '../../../core/interfaces';

@Component({
  selector: 'app-npc',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './npc.component.html',
  styleUrl: './npc.component.scss',
})
export class NpcComponent implements OnInit {
  constructor(public npcService: NPCService) {}
  ngOnInit(): void {
    this.npcService.GetAllNPCs();
  }

  createNPC() {
    let newNPC: NPC = {
      ID: 0,
      FirstName: 'Finketty',
      LastName: 'Pete',
      Family: { ID: 2, Name: 'Empty' },
      Religion: { ID: 2, Name: 'Empty' },
      Race: { ID: 2, Name: 'Empty' },
      WorldID: 1,
    };
    this.npcService.CreateNPC(newNPC).subscribe((res: Confirmation) => {
      if (!res.HasError) {
        this.npcService.GetAllNPCs();
      } else {
        console.log(res.ErrorMessage);
      }
    });
  }
}
