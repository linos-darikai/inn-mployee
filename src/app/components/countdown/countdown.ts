import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { employeeTest } from '../../tools/objects';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-countdown',
  imports: [CommonModule, MatCardModule],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css'
})
export class Countdown implements OnInit{
user = employeeTest;
deadlinePassed = false;
interval: any;

  // Countdown values
  COLORS: string[] = ['#2DBA95', '#F1B52A' , '#E21E25'] 
  currentColor: string = '';
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

constructor(private cdr: ChangeDetectorRef) {}

ngOnInit(): void {
  this.startCountdown();
}

startCountdown() {
  const DEADLINE = new Date(employeeTest.onboardingDeadline).getTime();
  this.interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = DEADLINE - now;

    if (distance <= 0) {
      clearInterval(this.interval);
      this.deadlinePassed = true;
      return;
    }

    

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (this.days > 14) {
      this.currentColor = this.COLORS[0];
    } else if (this.days > 7) {
      this.currentColor = this.COLORS[1];
    } else {
      this.currentColor = this.COLORS[2];
    }

    this.cdr.detectChanges();
  }, 1000)
}

ngOnDestroy() {
  if (this.interval) {
    clearInterval(this.interval);
  }
}

}
