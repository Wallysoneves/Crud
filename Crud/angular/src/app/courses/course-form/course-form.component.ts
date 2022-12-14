import { Location } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private service: CoursesService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      category:[null]
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
        .subscribe(result => this.onSucesso('Curso salvo com sucesso!'), error => this.onError('Erro ao salvar curso'));
        this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  private onSucesso(mensage: string) {
    return this.snackBar.open(mensage,'', {duration: 5000});
  }

  private onError(mensage: string) {
    return this.snackBar.open(mensage,'', {duration: 5000});
  }

}
