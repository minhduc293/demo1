import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { IClass } from '../../interfaces/IClass';
import { Router } from '@angular/router';
import { ClassService } from '../../shared/services/class.service';
import { MatDialog } from '@angular/material/dialog';
import { AddClassComponent } from '../add-class/add-class.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() iclass: IClass[];
  originBooks: IClass[] = [];
  selectedBook: IClass;
  @Input() keyword = '';
  page = 1;
  length = 0;
  pageSize = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private router: Router,
    private classService: ClassService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.classService.classs.subscribe((data) => {
      this.iclass = data;
    }
      , (err) => {
        console.log(err);
      });

    this.classService.getClasss().subscribe(iclass => {
      this.length = iclass.length;
    });
  }
  ngOnChanges() {
  }
    pageEvent(page) {
      this.page = page.pageIndex + 1;
      this.classService.getClasss(this.pageSize, this.page).subscribe(iclass => {
        this.length = this.iclass.length;
      });
    }
    onSearch(keyword: string) {
      this.classService.searchClasss(keyword).subscribe(iclass => {
        this.iclass = iclass;
      });
    }

    openAddClassDialog() {
      const dialogRef = this.dialog.open(AddClassComponent, {
        width: '400px',
        height: '400px'
      });
    }

  }
