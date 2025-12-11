import type {FieldData} from "@lib/types/FieldData.ts";

export interface FormProps {
    title: string;
    route: string;
    fields: FieldData[]
}