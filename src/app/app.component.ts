import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SettingsDialogComponent} from './settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chessclock';

  constructor(public dialog: MatDialog) {
  }


  openSettings() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
    });
  }
}
