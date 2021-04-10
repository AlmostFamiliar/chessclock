import {BehaviorSubject, Observable} from 'rxjs';

export class Player {
  private _name: string;
  private _isPlaying = false;
  private _time: number;
  private timerRef;
  private _startTime: number;
  private _increment: number;
  private _isLost$ = new BehaviorSubject<boolean>(false);

  constructor(name: string, startTime: number, increment: number) {
    this._name = name;
    this._startTime = startTime;
    this._increment = increment;
  }

  startTimer() {
    this._isPlaying = !this._isPlaying;
    if (this._isPlaying) {
      const startTime = Date.now() - (this._time || 0);
      this.timerRef = setInterval(() => {
        this._time = Date.now() - startTime;
      });
    } else {
      this.stopTimer();
    }
  }

  stopTimer() {
    this._isPlaying = false;
    clearInterval(this.timerRef);
    this._time -= this._increment;
  }

  get time(): number {
    return this.evalTime();
  }

  private evalTime() {
    let curTime = this._startTime - (this._time || 0);
    if (curTime <= 0) {
      if (this._isLost$.value === false) {
        this._isLost$.next(true);
      }
    }
    return curTime;
  }


  get isLost$(): Observable<boolean> {
    return this._isLost$;
  }

  set isPlaying(value: boolean) {
    this._isPlaying = value;
  }

  get isPlaying(): boolean {
    return this._isPlaying;
  }

  get name(): string {
    return this._name;
  }

  get startTime(): number {
    return this._startTime;
  }

  get increment(): number {
    return this._increment;
  }
}
