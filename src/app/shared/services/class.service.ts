import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { map } from 'rxjs/operators';
import { IClass } from '../../interfaces/IClass';
@Injectable()
export class ClassService {


    private _classs: BehaviorSubject<IClass[]> = new BehaviorSubject<IClass[]>([]);
    get classs() {
        return this._classs.asObservable();
    }
    constructor(private http: HttpClient) {
    }

    getClasss(pageSize: number = 6, page: number = 1): Observable<IClass[]>{
        return this.http.get('/classs').pipe(map(classs => {
            const pagination = this.paginate(classs as IClass[], pageSize, page);
            this._classs.next(pagination);
            return classs as IClass[];
        }));
    }

    getClass(id: number) {
        return this.http.get('/classs/' + id);
    }

    searchClasss(keyword: string): Observable<IClass[]> {
        return this.http.get(`/classs?q=${keyword}`).pipe(map(classs=> {
            return classs as IClass[];
        }));
    }

    paginate(classs: IClass[], pageSize: number, pageNumber: number): IClass[] {
        --pageNumber;
        return classs.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
    }
    createClass(classs: IClass) {
        classs.id = Date.now();
        return this.http.post('/classs', classs).subscribe(() => {
            this._classs.getValue().push(classs);
            const newClass = this._classs.getValue();
            this._classs.next(newClass);
        });
    }

    removeClass(id: number) {
        return this.http.delete('/classs/' + id).subscribe(() => {
            const index = this._classs.getValue().findIndex(b => b.id === id);
            this._classs.getValue().splice(index, 1);
            this._classs.next(this._classs.getValue());
        });
    }

    editClass(classs: IClass) {
        return this.http.put('/classs/' + classs.id, classs).subscribe(() => {
            const index = this._classs.getValue().findIndex(b => b.id === classs.id);
            this._classs.getValue()[index] = classs;
            this._classs.next(this._classs.getValue());
        });
    }
}
