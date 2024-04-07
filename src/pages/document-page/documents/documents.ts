import {Document} from "@/pages/document-page/model";
import agreement from './agreement.pdf';
import policy from './policy.pdf';

export const documents: {[name: string]: Document} = {
    policy: {
        download: 'https://drive.google.com/uc?export=download&id=1vQkWPRXpl4GBDUAmng4TBsvh2QYrBFwf',
        document: policy
    },
    agreement: {
        download: 'https://drive.google.com/uc?export=download&id=1ZWDCYxqbkTSMvFi9Bw6YSFgyWaNsVsLZ',
        document: agreement
    }
}