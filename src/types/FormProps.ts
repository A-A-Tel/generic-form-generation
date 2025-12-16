import type {FieldData} from "./FieldData";
import type {CSSProperties} from "react";

export interface FormProps {
    title: string;
    route: string;
    fields: FieldData[];
    styles: CSSProperties|string;
}
