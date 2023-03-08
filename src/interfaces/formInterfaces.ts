export interface IStateForm {
  [key: string]: string | boolean;
}

export interface IFormProps {
  initialState: IStateForm;
}
