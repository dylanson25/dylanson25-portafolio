import axios, {
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
		// this._interceptors();
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
	_interceptorsResponse() {}
	makeRequest(request: request) {
		const { method, url, axiosRequest = {} } = request;
		const R = { url: `${method}:${url}`, axiosRequest: {}, method: method };

		R.axiosRequest = this._axios[method](`${url}`, axiosRequest);
		this.requests.push(R);
		return R.axiosRequest;
	}
	get(url: string, axiosRequest: AxiosResponse | {} = {}) {
		return this.makeRequest({ method: 'get', url, axiosRequest });
	}
}

export default new PokemonApiClass();
