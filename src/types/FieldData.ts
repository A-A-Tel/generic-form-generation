import type {CSSProperties} from "react";

export type FieldData =
    | HiddenField
    | StringField
    | NumberField
    | DateField
    | TimeField
    | OptionsField;

type BaseField = {
    fieldName: string;
    fieldLabel?: string;
    required: boolean;
    value?: string;
    isKey?: boolean;
    styles?: CSSProperties | string;
    regex?: string;
    placeholder?: string;
};

export type HiddenField = BaseField & {
    type: "hidden"
}

type StringSpecialty = "text" | "tel" | "email" | "password" | "url";

export type StringField = BaseField & {
    type: "string";
    minLength: number
    maxLength: number
    specialty?: StringSpecialty; // default "text"
};

export type NumberField = BaseField & {
    type: "number";
    min?: number;
    max?: number;
    step?: number | string;
};

type DateSpecialty = "day" | "week" | "month" | "year";

export type DateField = BaseField & {
    type: "date";
    specialty?: DateSpecialty; // default "day"
};

type TimeSpecialty = "hours" | "minutes" | "seconds";

export type TimeField = BaseField & {
    type: "time";
    specialty?: TimeSpecialty; // default "minutes"
};

type OptionsSpecialty = "select" | "radio" | "boxes";

export type OptionsField = BaseField & {
    type: "options";
    items: string[];
    specialty?: OptionsSpecialty; // default "select"
    allowNewItems: boolean;
};
