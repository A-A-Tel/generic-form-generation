import type {ReactNode} from "react";
import type {FormProps} from "@lib/types";

export default function App(props: FormProps): ReactNode {
    return <>
        {props.title}, {props.route}
    </>
}