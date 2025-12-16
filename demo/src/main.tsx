import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./css/main.css"
import {GenericForm} from "@generic-form-generation/components/Genericform";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GenericForm>

        </GenericForm>
    </StrictMode>
);