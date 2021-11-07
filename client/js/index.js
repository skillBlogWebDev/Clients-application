import { createClientsHeader } from "./createHeader.js";

const createApp = () => {
    const header = createClientsHeader();
    document.body.append(header);
}

createApp();