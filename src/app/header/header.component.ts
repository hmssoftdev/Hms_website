import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Home',
          icon:'pi pi-fw pi-home',
          
      },
      {
          label:'Features',
          icon:'pi pi-fw pi-sort-amount-up-alt',
        
      },
      {
          label:'About',
          icon:'pi pi-fw pi-info-circle',
         
      },
      {
          label:'Sample',
          icon:'pi pi-fw pi-id-card',
          items:[
              {
                  label:'Edit',
                  icon:'pi pi-fw pi-pencil',
                  items:[
                  {
                      label:'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                  },

                  ]
              },
              {
                  label:'Archieve',
                  icon:'pi pi-fw pi-calendar-times',
                  items:[
                  {
                      label:'Remove',
                      icon:'pi pi-fw pi-calendar-minus'
                  }
                  ]
              }
          ]
      },
      {
          label:'Pricing',
          icon:'pi pi-fw pi-money-bill'
      },
      {
          label:'Contact',
          icon:'pi pi-fw pi-envelope'
      }
  ];
  }

}
