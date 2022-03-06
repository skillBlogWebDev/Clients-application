import { createClientsHeader } from "./createHeader.js";
import { createClientsSection } from "./createClientsSection.js";
import { getClients } from "./clientsApi.js";
import { createClientItem } from "./createClientItem.js";
import { sortTable } from "./sortClientsTable.js";
import { searchClients } from "./searchClient.js";

const createApp = async () => {
    const header = createClientsHeader();
    const clientSection = createClientsSection();
    document.body.append(header, clientSection.main);
    const preloader = document.querySelector('.preloader');
    const tableWrapper = document.querySelector('.clients__wrapper');

    try {
        tableWrapper.style.overflow = 'visible'; 
        const clients = await getClients();
        searchClients(clients);

        for (const client of clients) {
            document.querySelector('.clients__tbody').append(createClientItem(client))
        }
    } catch (error) {
        console.log(error);
    } finally {
        preloader.remove()
        tableWrapper.style.overflow = 'auto';
    }
    
}

createApp();
document.addEventListener('DOMContentLoaded', sortTable);