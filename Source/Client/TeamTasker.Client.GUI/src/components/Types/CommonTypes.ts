import { FormikErrors } from "formik";

export interface AddUserToTeamForm {
    employeeId: number,
    teamId: number
}

export type FormikUsersSetValue = (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<AddUserToTeamForm>>;