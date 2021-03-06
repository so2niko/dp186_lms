import {
  SHOW_TEACHER_REGISTER_MODAL,
  HIDE_TEACHER_REGISTER_MODAL,
  REGISTER_TEACHER,
  SHOW_LOADER,
  UPDATE_NAME,
  CANCEL_NAME_UPDATING,
  UPDATE_NAME_SUCCESS,
  LOAD_TEACHERS,
  UPDATE_EMAIL,
  CANCEL_EMAIL_UPDATING,
  UPDATE_EMAIL_SUCCESS,
  DELETE_TEACHER,
  SHOW_MODAL_DELETE,
  HIDE_MODAL_DELETE,
  REMEMBER_UPDATING_ID,
  SHOW_MODAL_CHANGE_PASSWORD,
  HIDE_MODAL_CHANGE_PASSWORD
} from './types';

export const registerTeacher = (teacher) => ({ type: REGISTER_TEACHER, payload: teacher });

export const hideTeacherRegisteredModal = () => ({ type: HIDE_TEACHER_REGISTER_MODAL });

export const showTeacherRegisteredModal = () => ({ type: SHOW_TEACHER_REGISTER_MODAL });

export const showLoader = () => ({ type: SHOW_LOADER });

export const updateName = (data) => ({ type: UPDATE_NAME, payload: data });

export const cancelNameUpdating = (data) => ({ type: CANCEL_NAME_UPDATING, payload: data });

export const updateNameSuccess = (data) => ({ type: UPDATE_NAME_SUCCESS, payload: data });

export const loadTeachers = (querys) => ({ type: LOAD_TEACHERS, payload: querys });

export const updateEmail = (data) => ({ type: UPDATE_EMAIL, payload: data });

export const cancelEmailUpdating = (data) => ({ type: CANCEL_EMAIL_UPDATING, payload: data });

export const updateEmailSuccess = (data) => ({ type: UPDATE_EMAIL_SUCCESS, payload: data });

export const deleteTeacher = (data) => ({ type: DELETE_TEACHER, payload: data });

export const showModalDelete = (data) => ({ type: SHOW_MODAL_DELETE, payload: data });

export const hideModalDelete = () => ({ type: HIDE_MODAL_DELETE });

export const rememberUpdatingId = (data) => ({ type: REMEMBER_UPDATING_ID, payload: data });

export const showModalChangePassword = (data) => ({ type: SHOW_MODAL_CHANGE_PASSWORD, payload: data })

export const hideModalChangePassword = () => ({ type: HIDE_MODAL_CHANGE_PASSWORD })
