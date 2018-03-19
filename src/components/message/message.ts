import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {
  @Input() messageDiscussion;

  constructor() {}
}
