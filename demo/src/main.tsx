import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "../../src";


createRoot(document.getElementById("root")!).render(
        <StrictMode>
            Test
        </StrictMode>
);