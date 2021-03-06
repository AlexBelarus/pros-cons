import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  menuItems: NbMenuItem[] = [
    {
      title: 'Sign up',
      link: '/Sign-in',
      children: null
    },
    {
      title: 'home',
      link: '/home',
      children: null
    },
    {
      title: 'homepage1',
      link: '/homepage1',
      children: null
    }
  ];

}
