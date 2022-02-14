import { createClientsHeader } from "./createHeader.js";
import { createClientsSection } from "./createClientsSection.js";
import { getClients } from "./clientsApi.js";
import { createClientItem } from "./createClientItem.js";

const createApp = async () => {
    const header = createClientsHeader();
    const clientSection = createClientsSection();
    document.body.append(header, clientSection.main);
    const preloader = document.querySelector('.preloader');

    try {
        const clients = await getClients();

        for (const client of clients) {
            document.querySelector('.clients__tbody').append(createClientItem(client));
        }
    } catch (error) {
        console.log(error);
    } finally {
        setTimeout(() => preloader.remove(), 1500);
    }
    
}

createApp();