import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RegistrationService } from '../registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-isce-registration',
  templateUrl: './isce-registration.component.html',
  styleUrls: ['./isce-registration.component.scss']
})
export class IsceRegistrationComponent implements OnInit {
  subjects = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Kannada', 'Hindi']

  studentForm: any = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    fatherName: new FormControl('', Validators.required),
    motherName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subjects: this.fb.array([]),
    fatherPhNo: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    motherPhNo: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    schoolName: new FormControl('', Validators.required),
  });

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private registrationService: RegistrationService, private _snackBar: MatSnackBar) {
  }

  openSnackBar() {
    this._snackBar.open('You have been Registered Successfully! Please wait for a callback from us', '', { duration: 5000 })
  }

  saveStudent() {
    this.registrationService.addItem(this.studentForm.value).then(res => {
      this.openSnackBar();
      this.studentForm.reset();
    }).catch(e => {
      console.log(e);
    });
  }

  ngOnInit(): void {
  }

  get emailValidator() {
    return this.studentForm.get('email');

  }
  submitForm() {
    this.studentForm.markAllAsTouched();
    if (this.studentForm.valid && !!this.studentForm.get('subjects').controls.length) {
      console.log(this.studentForm.value);
      this.saveStudent();
    }
    console.log(this.studentForm.valid)
    console.log(this.studentForm.get('subjects').controls && !!this.studentForm.get('subjects').controls.length)
  }

  onChange(event: any) {
    const subjects = <FormArray>this.studentForm.get('subjects') as FormArray;
    if (event.checked) {
      subjects.push(new FormControl(event.source.value))
    } else {
      const i = subjects.controls.findIndex(x => x.value === event.source.value);
      subjects.removeAt(i);
    }
  }

}

