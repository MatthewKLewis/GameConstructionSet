import { Component, OnInit } from '@angular/core';
import { NPCService } from '../services/npc.service';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NpcCreateComponent } from './npc-create/npc-create.component';

@Component({
  selector: 'app-npc',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './npc.component.html',
  styleUrl: './npc.component.scss',
})
export class NpcComponent implements OnInit {
  constructor(public npcService: NPCService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.npcService.GetAllNPCs();
  }

  createNPC() {
    const dialogRef = this.dialog.open(NpcCreateComponent, {});
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
    });
  }
}
