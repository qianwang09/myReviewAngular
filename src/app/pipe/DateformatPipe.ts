import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'dateformatPipe' })
export class DateformatPipe implements PipeTransform {
  transform(value: string): number {
    if(!value) return Date.now();
    if(typeof value !== 'string') {
      throw new Error('Invalid pipe argument for WelcomePipe');
    }
    return Number.parseInt(value.substring(6,value.length-2));
  }
} 