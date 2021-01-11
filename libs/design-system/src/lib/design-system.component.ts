import { Component } from '@angular/core';
import {SharedFunction} from '@test/shared/shared.function'

@Component({
  selector: 'test-design-system',
  templateUrl: './design-system.component.html'
})
export class DesignSystemComponent {
  title = 'design-systemtx';
	constructor(){
		alert(SharedFunction());
	}
}
