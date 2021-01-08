import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'timer'})
export class TimerPipe implements PipeTransform {

  transform(timer: number) {
    const millis = timer % 1000;
    let seconds = Math.floor((timer / 1000));
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;
    const millisStr = (millis.toString().padStart(3, '0').substring(0, 2));
    const secondsStr = (seconds.toString().padStart(2, '0'));
    if (hours > 0) {
      const minutesStr = (minutes.toString().padStart(2, '0'));
      return `${hours}:${minutesStr}:${secondsStr}:${millisStr}`;
    }
    if (minutes > 0) {
      return `${minutes}:${secondsStr}:${millisStr}`;
    }
    return `${seconds}:${millisStr}`;
  }
}
