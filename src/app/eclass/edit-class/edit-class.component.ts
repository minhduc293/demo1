import { Component, OnInit, Inject } from '@angular/core';
import { IClass } from '../../interfaces/IClass';
import { ClassService } from '../../shared/services/class.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBookComponent } from '../../ebook/add-book/add-book.component';
import { IclassComponent } from '../iclass/iclass.component';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  iclass: IClass = {
    cover: '',
    id: 0,
    title: '',
    dshocvien: '',
    mota: '',
    dsbaigiang: ''
  };
  constructor(private classService: ClassService,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.iclass = data;
    }

    ngOnInit() {
    }
    editClass(iclass: IClass) {
      this.classService.editClass(iclass);
      this.dialogRef.close(iclass);
    }
  
  }
