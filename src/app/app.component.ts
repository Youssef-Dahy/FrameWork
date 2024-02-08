import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  vhHeight100: object = {};
  ngAfterViewInit(): void {
    this.vhHeight100 = {
      marginTop: `${this.childNav.nav.nativeElement.clientHeight}px`,
      minHeight: `calc(100vh - ${this.childNav.nav.nativeElement.clientHeight}px)`,
    };
  }
  @ViewChild(NavbarComponent) childNav!: NavbarComponent;
  title = 'Assignment1';
}
