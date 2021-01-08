import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.scss']
})
export class GameOverDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GameOverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
