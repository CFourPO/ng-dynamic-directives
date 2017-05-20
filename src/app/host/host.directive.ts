import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[host-component]'
})
export class HostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
