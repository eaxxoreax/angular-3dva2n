import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.css'],
  templateUrl: 'table-expandable-rows-example.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableRowsExample {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  columnsToDisplay = ['name', 'id', 'action'];
  expandedElement: PeriodicElement | null;
  selectedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  name: string;
  id: number;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Hydrogen',
    action: 1.0079
  }, {
    id: 2,
    name: 'Helium',
    action: 4.0026
  }, {
    id: 3,
    name: 'Lithium',
    action: 6.941
  }, {
    id: 4,
    name: 'Beryllium',
    action: 9.0122
  }, {
    id: 5,
    name: 'Boron',
    action: 10.811
  },
];


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */