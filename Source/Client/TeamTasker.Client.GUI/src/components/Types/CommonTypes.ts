import { FormikErrors } from "formik";

export interface AddUserToTeamForm {
    employeeId: number,
    teamId: number
}

export interface CreateTeamForm {
    name: string,
    leaderId: number
}

export type FormikUsersSetValue = (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<AddUserToTeamForm>>;

export type FormikCreateTeamSetValue = (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<CreateTeamForm>>;