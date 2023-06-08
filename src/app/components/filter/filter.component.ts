import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{
  @Input() tags?: string[];
  control = new FormControl();
  isClose?: boolean;
  valueSelected?: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onChange(event: any){
    this.isClose = false;
    if(!event) {
      this.isClose = true;
      this.valueSelected = this.control.value && this.control.value.toString();

      this.sendValueSelected();
    }
  }
  sendValueSelected(): void {
    this.notify.emit(this.valueSelected);
  }
}