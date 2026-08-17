import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  transform(isoDate: string): string {
    const miliseconds = Date.now() - new Date(isoDate).getTime();
    const days = Math.floor(miliseconds / 86_400_000);

    if (days <= 0) {
      return 'today';
    }
    if (days === 1) {
      return 'yesterday';
    }

    return `${days} days ago`;
  }
}
