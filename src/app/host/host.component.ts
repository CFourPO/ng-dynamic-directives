import {
  Component, OnInit, ViewChild, Input, ComponentFactoryResolver, SimpleChanges,
  AfterViewInit, OnChanges
} from '@angular/core';
import {BootItem} from "./boot-item";
import {BootComponent} from "./boot-component";
import {HostDirective} from "./host.directive";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() bootItem: BootItem;
  @ViewChild(HostDirective) appBootItem: HostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    // let newBootItem = changes['bootItem'].currentValue;
    this.loadComponent();
  }

  ngOnInit() {
  }

  loadComponent() {
    let myBootItem: BootItem = this.bootItem;
    console.log("Im in loadComponent: ", myBootItem);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(myBootItem.component);
    let viewContainerRef = this.appBootItem.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<BootComponent>componentRef.instance).data = myBootItem.data;
  }

}

