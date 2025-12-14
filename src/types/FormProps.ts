import type {FieldData} from "@lib/types/FieldData.ts";
import type {CSSProperties} from "react";

export interface FormProps {
    title: string;
    route: string;
    fields: FieldData[];
    styles: CSSProperties|string;
}
