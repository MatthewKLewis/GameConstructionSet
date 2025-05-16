import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
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
  constructor(public apiService: APIService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.GetAllNPCs().subscribe();
    this.apiService.GetAllReligions().subscribe();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(NpcCreateComponent, {});
    dialogRef.afterClosed().subscribe((res: any) => {
      //console.log(res);
    });
  }
}
