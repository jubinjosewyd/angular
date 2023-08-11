import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  getStudents(): Student[] {
   
    return [
      {
        id: 1,
        FirstName: 'Soman',
        LastName: 'PP',
        Dob: '1995-08-15',
        Gender: 'Male',
        CountryName: 'India',
        Course: 'Computer Science',
      },
      {
        id: 2,
        FirstName: 'Vasu',
        LastName: 'KD',
        Dob: '1998-04-22',
        Gender: 'male',
        CountryName: 'Canada',
        Course: 'Engineering',
      },
    ];
  }
}
