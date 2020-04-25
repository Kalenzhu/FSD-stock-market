
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CompanyibComponent } from './companylib/companylib.component';

import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  imports: [ 
    MatSidenavModule ,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    CompanyibComponent
    
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    CompanyibComponent
      
  ],
  entryComponents: [
  
  ]
})
export class ComponentsModule { }
