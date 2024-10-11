import axios, {
	type AxiosError,
	type AxiosInstance,
	type AxiosResponse,
	type GenericAbortSignal,
} from 'axios';
import type { request } from '@/models/api.model';
import { POKEMON_URL } from '@/utils/constants';

class PokemonApiClass {
	_axios: AxiosInstance;
	requests: request[];

	constructor() {
		this.requests = [];
		this._axios = axios.create({
			baseURL: POKEMON_URL,
		});
		this._interceptors();
	}
	_interceptors() {
		this._interceptorsResponse();
	}
	abortSignal(
		timeoutMs: number,
		reason: string = 'Avoid multiple request',
	): GenericAbortSignal {
		const abortController: AbortController = new AbortController();
		setTimeout(() => abortController.abort(reason), timeoutMs || 0);

		return abortController.signal;
	}
	_interceptorsResponse() {
		this._axios.interceptors.response.use(
			(response) => {
				if (String(response.status).match(/20[0-9]/g)) return response?.data;
				else console.warn('❗️ Request', { response });

				return response;
			},
			(err: AxiosError) => {
				const { response, message } = err || {};
				const aborted = axios.isCancel(err);
				if (aborted)
					return Promise.reject({
						error: err.code,
						message: err.config?.signal || err.message,
						aborted,
					});
				const { status } = response || {};
				return Promise.reject({ status, error: message, aborted });
			},
		);
	}
	makeRequest(request: request): Promise<AxiosResponse> {
		const { method, url, axiosRequest = {} } = request;

		const axiosRequestPromise = this._axios[method](`${url}`, axiosRequest);

		const R = {
			url: `${method}:${url}`,
			axiosRequest: axiosRequestPromise,
			method: method,
		};

		R.axiosRequest = this._axios[method](`${url}`, axiosRequest);
		this.requests.push(R);
		return R.axiosRequest;
	}
	get(
		url: string,
		axiosRequest: AxiosResponse | {} = {},
	): Promise<AxiosResponse> | Promise<unknown> {
		return this.makeRequest({ method: 'get', url, axiosRequest });
	}
}

export default new PokemonApiClass();
