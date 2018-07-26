import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { IclassComponent } from './iclass/iclass.component';
import { AddClassComponent } from './add-class/add-class.component';
import { IclassDetailComponent } from './iclass-detail/iclass-detail.component';
import { LibraryComponent } from '../ebook/library/library.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { RemoveClassComponent } from './remove-class/remove-class.component';
import { SearchClassComponent } from './search-class/search-class.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatPaginatorModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        EClassModule,
       RouterModule,
       MatPaginatorModule
    ],
    exports: [],
    declarations: [
        IclassComponent,
        IclassDetailComponent,
        AddClassComponent,
        LibraryComponent,
        EditClassComponent,
        RemoveClassComponent,
        SearchClassComponent,

    ],
    providers: [],
    entryComponents: [
        AddClassComponent,
        EditClassComponent,
        RemoveClassComponent
    ]
})
export class EClassModule { }
