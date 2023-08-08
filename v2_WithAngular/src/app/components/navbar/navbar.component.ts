import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Link } from 'src/app/shared/models/Link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links: Link[] = [
    {
      title: 'Contact',
      url: '/',
    }
    // {
    //   title: 'Démos',
    //   children: [
    //     {
    //       title: 'Démo 1 - Bindings',
    //       url: '/demo/demo1'
    //     },
    //     {
    //       title: 'Démo 2 - Pipes',
    //       url: '/demo/demo2'
    //     },
    //     {
    //       title: 'Démo 3 - Directives',
    //       url: '/demo/demo3'
    //     },
    //     {
    //       title: 'Démo 4 - Input & Output',
    //       url: '/demo/demo4'
    //     },
    //     {
    //       title: 'Démo 5 - Service & Injection',
    //       url: '/demo/demo5'
    //     },
    //     {
    //       title: 'Démo 6 - Les formulaires',
    //       url: '/demo/demo6'
    //     }
    //   ],
    //   isVisible: false
    // }

  ];
  toggleShowLink(index: number): void {
    let currentState = this.links[index].isVisible;

    this.links.forEach(l => l.isVisible = false);

    this.links[index].isVisible = !currentState;
  }
}
