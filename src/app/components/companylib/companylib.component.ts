import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, AfterContentInit, ViewChildren, QueryList } from '@angular/core';

import {MatSort, MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action:"11"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action:"11"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action:"11"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action:"11"},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',  action:"11"} ,
  {position: 6, name: 'Boron', weight: 10.811, symbol: 'B',  action:"11"} 
];
// const menuItem = [{
//     index: 1,
//     name: 'Dashboard',
//     path: '/dashboard'
//    }, {
//     index: 2,
//     name: 'Request',
//     path: '/home'
//    }, {
//     index: 3,
//     name: 'Report',
//     path: '/report'
//    }]

@Component({
  selector: 'company-lib',
  templateUrl: './companylib.component.html',
  styleUrls: ['./companylib.component.scss'],
})
export class CompanyibComponent implements OnInit,OnDestroy,AfterViewInit,AfterContentInit {

    pushRightClass: string = 'push-right';
    _userRole:string;
    
    public programs;
    showAdminMenu: boolean;
    isOpenAction: boolean;
    isOpenAdminAction: boolean;
    isActive: boolean = false;
    currentPage: string;
    
   
    // private _ibmheader: Header;
 ]
    //home:any[]=["/dashboard"];

    constructor(
        public elementRef: ElementRef
        ) { 
        // router.events.subscribe(val => {
        //     if (
        //         val instanceof NavigationEnd &&
        //         window.innerWidth <= 992 &&
        //         this.isToggled()
        //     ) {
        //         this.toggleSidebar();
        //     }
        // });
        
    }

    ngOnDestroy(): void {
        
    }

    ngAfterViewInit() {
        // this.list.changes.subscribe( newList =>
        //     {
                
        //         if(!this.burgerKing){
        //             this.burgerKing = document.querySelector('.bx--header__menu-trigger');
        //             this.burgerKing.addEventListener("click", () => {
        //                 console.log('click!');
        //                 this.isActive = !this.isActive;
        //                 if (this.isActive) {
        //                     document.addEventListener("click", this.outsideClick, true);
        //                 } else {
        //                     document.removeEventListener("click", this.outsideClick, true);  
        //                 }
        //             });
        //         }
        //     }
        //  )
    }
    ngAfterContentInit() {

    }
  
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;


    ngOnInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
   
}
