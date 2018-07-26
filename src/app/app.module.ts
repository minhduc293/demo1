import { SharedModule } from './shared';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { AppRoutingModule } from './app.routing';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './services/authGuard.service';
import { ToastrModule } from 'ngx-toastr';
import { MatMenuModule } from '@angular/material/menu';
import { AddClassComponent } from './eclass/add-class/add-class.component';
import { EditClassComponent } from './eclass/edit-class/edit-class.component';
import { IclassComponent } from './eclass/iclass/iclass.component';
import { IclassDetailComponent } from './eclass/iclass-detail/iclass-detail.component';
import { LibraryComponent } from './eclass/library/library.component';
import { RemoveClassComponent } from './eclass/remove-class/remove-class.component';
import { SearchClassComponent } from './eclass/search-class/search-class.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileNotFoundComponent,
    LayoutComponent,
    AddClassComponent,
    EditClassComponent,
    IclassComponent,
    IclassDetailComponent,
    LibraryComponent,
    RemoveClassComponent,
    SearchClassComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot()
  ],
  entryComponents: [
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
