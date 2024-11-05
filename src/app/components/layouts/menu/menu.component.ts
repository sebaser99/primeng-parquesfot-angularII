import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;



  ngOnInit() {

    this.items = [

      {

        label: 'Home',

        icon: 'pi pi-home'

      },

      {

        label: 'Features',

        icon: 'pi pi-star'

      },

      {

        label: 'Projects',

        icon: 'pi pi-search',

        items: [

          {

            label: 'Ejemplo Signal 1',

            icon: 'pi pi-bolt',
            routerLink:'signal-ejemplo1'

          },

          {

            label: 'Ejemplo Singal 2',

            icon: 'pi pi-server',
            routerLink:'signal-ejemplo2'

          },
          {

            label: 'Ejemplo Singal 3',

            icon: 'pi pi-server',
            routerLink:'signal-ejemplo3'

          },
          {

            label: 'Ejemplo Singal 4',

            icon: 'pi pi-server',
            routerLink:'signal-ejemplo4'

          },
          {

            label: 'Ejemplo Singal 5',

            icon: 'pi pi-server',
            routerLink:'signal-ejemplo5'

          },
          {

            label: 'Ejemplo Singal 6',

            icon: 'pi pi-server',
            routerLink:'signal-ejemplo6'

          },
      ]

      },

  {

  label: 'Contact',

  icon: 'pi pi-envelope'

  }

    ]

  }
}
