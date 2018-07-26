import { Component, OnInit, Inject } from '@angular/core';
import { IClass } from '../../interfaces/IClass';
import { ClassService } from '../../shared/services/class.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBookComponent } from '../../ebook/add-book/add-book.component';

@Component({
  selector: 'app-remove-class',
  templateUrl: './remove-class.component.html',
  styleUrls: ['./remove-class.component.css']
})
export class RemoveClassComponent implements OnInit {
  iclass: IClass;

  constructor(private classService: ClassService,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.iclass = data }

  ngOnInit() {
  }

  removeClass(iclass) {
    this.classService.removeClass(iclass.id);
    this.dialogRef.close(iclass);
  }

}
