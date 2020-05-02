import { fork } from 'redux-saga/effects';
import {studentsSaga} from './students/students.saga';
import {teachersSaga} from './teachers/teachers.saga';

export default function* startForman() {
  yield fork(studentsSaga);
  yield fork(teachersSaga);
}
