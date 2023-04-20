export type SelectOption = {
    label: String;
    value: number | string;
  };
  
  export type MultipleSelectProps = {
    multiple: true;
    value: SelectOption[];
    onChange: (value: SelectOption[]) => void;
  };
  
  export type SingleSelectProps = {
    multiple?: false;
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
  };
  
  export type SelectProps = {
    options: SelectOption[];
  } & (SingleSelectProps | MultipleSelectProps);