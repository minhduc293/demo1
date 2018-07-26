import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IClass } from '../../interfaces/IClass';
import { AuthService } from '../../services/auth.service';
import { ClassService } from '../../shared/services/class.service';
import { MatDialog } from '@angular/material/dialog';
import { EditClassComponent } from '../edit-class/edit-class.component';
import { RemoveClassComponent } from '../remove-class/remove-class.component';



@Component({
  selector: 'app-iclass',
  templateUrl: './iclass.component.html',
  styleUrls: ['./iclass.component.css']
})
export class IclassComponent implements OnInit {
  @Input() iclass: IClass;
  @Output() remove = new EventEmitter<any>();
  isBackdrop = false;
  constructor(private authService: AuthService,
    private classService: ClassService,
    private dialog: MatDialog) { }

  ngOnInit() {
    console.log('ngOnInit started')
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy book ${this.iclass.title} started`);
  }
  showBackdrop() {
    if (!this.isBackdrop) {
      this.isBackdrop = true;
    }
  }

  hideBackdrop() {
    if (this.isBackdrop) {
      this.isBackdrop = false;
    }
  }

  openEditClassDialog(editbook: IClass) {
    const dialogRef = this.dialog.open(EditClassComponent, {
      width: '400px',
      height: '400px',
      data: editbook
    });
  }

  openRemoveClassDialog(removeBook: IClass) {
    const dialogRef = this.dialog.open(RemoveClassComponent, {
      width: '400px',
      height: 'auto',
      data: removeBook
    });
  }
}
