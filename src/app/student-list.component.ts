import { Component } from '@angular/core';

@Component({
    selector: 'student-list',
    template: `
    <student *ngFor='let name of studentNames' [name]='name' (studentSelected)="onStudentSelected($event)"></student>
    <!-- <student [name]="studentNames[0]"></student> -->
    <p>你好啊</p>
    `
})
export class StudentList {
    studentNames = ['张三', '李四', '王五'];
    constructor() {

    }
    onStudentSelected(name: string) {
        console.log('选中的学生：' + name);
    }
}