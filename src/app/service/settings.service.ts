import {Injectable} from '@angular/core';
import {Player} from '../../model/player';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class SettingsService {
  private _player1: Player;
  private _player2: Player;

  private _isStarted = false;


  constructor() {
    this.initPlayers();
  }

  initPlayers() {
    const name1 = localStorage.getItem('name1') || 'Player 1';
    const time1 = +localStorage.getItem('time1') || 300000;
    const increment1 = +localStorage.getItem('increment1') || 0;
    this._player1 = new Player(name1, time1, increment1);
    const name2 = localStorage.getItem('name2') || 'Player 2';
    const time2 = +localStorage.getItem('time2') || 300000;
    const increment2 = +localStorage.getItem('increment2') || 0;
    this._player2 = new Player(name2, time2, increment2);
    this._isStarted = false;
  }

  update(player1: Player, player2: Player) {
    this._player1 = player1;
    this._player2 = player2;
    this._isStarted = false;
  }

  set isStarted(value: boolean) {
    this._isStarted = value;
  }

  get isStarted(): boolean {
    return this._isStarted;
  }

  get player1(): Player {
    return this._player1;
  }

  get player2(): Player {
    return this._player2;
  }
}

