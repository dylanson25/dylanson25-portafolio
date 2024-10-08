import { type AxiosResponse } from 'axios';

export interface request {
	method: 'get' | 'delete' | 'post' | 'put' | 'patch';
	url: string;
	axiosRequest: AxiosResponse | {};
}
