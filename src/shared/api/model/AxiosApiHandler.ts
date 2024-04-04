import {ApiHandler, DBItem} from "@/shared/api/model/ApiHandler";
import axios, {AxiosInstance} from "axios";

export class AxiosApiHandler<T extends DBItem> implements ApiHandler<T> {
    constructor(baseApiRequest: string) {
        this.baseApiRequest = baseApiRequest;
        this.axios = axios.create();
    }

    baseApiRequest: string;
    axios: AxiosInstance;

    getItem = (id: number): Promise<T> => {
        return this.axios.get(this.baseApiRequest + id, {

        })
            .then(response => response.data);
    }

    getItems = (ids: number[]): Promise<T>[] => {
        return ids.map(id => {
            return this.axios.get(this.baseApiRequest + id)
                .then(response => response.data);
        })
    }

    getAll = (): Promise<T[]> => {
        return this.axios.get(this.baseApiRequest)
            .then(response => response.data);
    }
}
