import {Document} from "@/pages/document-page/model";

export const documents: {[title: string]: Document} = {
    agreement: {
        document: 'https://www.scribd.com/embeds/716930482/content?start_page=1&view_mode=scroll&access_key=key-GbY9dlgOgoMjRkRxIsa9',
        download: 'https://drive.google.com/uc?export=download&id=1ZWDCYxqbkTSMvFi9Bw6YSFgyWaNsVsLZ'
    },
    policy: {
        document: 'https://www.scribd.com/embeds/716922958/content?start_page=1&view_mode=scroll&access_key=key-otxBA2WwmYixO7rJom61',
        download: 'https://drive.google.com/uc?export=download&id=1vQkWPRXpl4GBDUAmng4TBsvh2QYrBFwf'
    }
}