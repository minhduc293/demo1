import { Component, OnInit, Inject } from '@angular/core';
import { IClass } from '../../interfaces/IClass';
import { ClassService } from '../../shared/services/class.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  iclass: IClass = {
    cover: '',
    id: 0,
    title: '',
    dshocvien: '',
    mota: '',
    dsbaigiang: ''
  }
  constructor(private classService: ClassService,
    public dialogRef: MatDialogRef<AddClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  addClass(classs: IClass) {
    this.classService.createClass(classs);
    this.toastr.success('Successfully', 'Add class');
    this.dialogRef.close();
  }
}
