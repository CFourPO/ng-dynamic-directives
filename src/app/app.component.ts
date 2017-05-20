import {Component, OnInit} from '@angular/core';
import {LoaderService} from "./host/loader.service";
import {BootItem} from "./host/boot-item";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  bootItem: BootItem = new BootItem(UserComponent, {});
  constructor(private loader: LoaderService) {}

  ngOnInit() {
    this.loader.loadBootItem(new BootItem(UserComponent, {}));
  }

  onClick(componentSelector: string) {
    if (componentSelector == 'admin') {
      this.bootItem = new BootItem(AdminComponent, {});
    }
    else {
      this.bootItem = new BootItem(UserComponent, {});
    }
  }



}
