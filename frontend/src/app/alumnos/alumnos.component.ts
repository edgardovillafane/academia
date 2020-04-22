import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

declare var M: any;
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'phone'];

  data: Students[] | any = [];

  isLoadingResults = false;



  constructor(
    private employeeService: EmployeeService,
  ) {}

  ngOnInit() {
    this.getEmployees();

  }

  addEmployee(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployees();
        M.toast({ html: 'Updated Successfully' });
      });
    } else {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
        M.toast({ html: 'Save successfully' });
      });
    }
  }

  getEmployees() {
    this.data = this.employeeService.getEmployees();

  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
        M.toast({ html: 'Deleted Succesfully' });
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}

export interface Students {
  name: string;
  surname: string;
  phone: string;
}
export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) {}

  getRepoIssues(): Observable<Students> {
    const href = 'http://localhost:3000/api/students';
    return this._httpClient.get<Students>(href);
  }
}
