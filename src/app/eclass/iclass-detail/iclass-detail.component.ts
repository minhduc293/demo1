import { Component, OnInit } from '@angular/core';
import { IClass } from '../../interfaces/IClass';
import { ClassService } from '../../shared/services/class.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iclass-detail',
  templateUrl: './iclass-detail.component.html',
  styleUrls: ['./iclass-detail.component.css']
})
export class IclassDetailComponent implements OnInit {
iclass: IClass;
  constructor(private classService: ClassService,
  private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activeRouter.snapshot.params['id'];
    this.classService.getClass(id).subscribe((data) => {
      this.iclass = data as IClass;
    });
  }

}
