import { Component, Input } from '@angular/core';
import { MessageModule } from 'primeng/message';


@Component({
  selector: 'app-notification',
  imports: [MessageModule],
  standalone: true,
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {
@Input() messageContent: string = '';
@Input() messageType: string = 'info';
}
