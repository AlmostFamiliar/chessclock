import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {SettingsService} from '../service/settings.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Player} from '../../model/player';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    private settings: SettingsService,
    private fb: FormBuilder
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    let player1 = this.settings.player1;
    let player2 = this.settings.player2;
    this.formGroup = this.fb.group({
      name1: [player1.name, Validators.required],
      time1: [player1.startTime / 1000, [Validators.required, Validators.pattern('^\\d*$')]],
      increment1: [player1.increment / 1000, [Validators.required, Validators.pattern('^\\d*$')]],
      name2: [player2.name, Validators.required],
      time2: [player2.startTime / 1000, [Validators.required, Validators.pattern('^\\d*$')]],
      increment2: [player2.increment / 1000, [Validators.required, Validators.pattern('^\\d*$')]],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      let name1 = this.formGroup.get('name1').value;
      localStorage.setItem('name1', name1);
      let time1 = +this.formGroup.get('time1').value * 1000;
      localStorage.setItem('time1', time1.toString());
      let increment1 = +this.formGroup.get('increment1').value * 1000;
      localStorage.setItem('increment1', increment1.toString());
      const player1 = new Player(name1, time1, increment1);

      let name2 = this.formGroup.get('name2').value;
      localStorage.setItem('name2', name2);
      let time2 = +this.formGroup.get('time2').value * 1000;
      localStorage.setItem('time2', time2.toString());
      let increment2 = +this.formGroup.get('increment2').value * 1000;
      localStorage.setItem('increment2', increment2.toString());
      const player2 = new Player(name2, time2, increment2);
      this.settings.update(player1, player2);
      this.dialogRef.close();
    }
  }
}
