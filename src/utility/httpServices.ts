import axios from 'axios';

const API_BASE_URL = 'https://resi.uatz.view.com.au';

const defaultHeaders = {
	Accept: 'application/json',
	'User-Agent': 'avesta-ua',
	'Content-Type': 'application/json',
};

export const post = async <T, D = unknown>(
	endpoint: string,
	data: D,
	headers?: Record<string, string>,
): Promise<T> => {
	const response = await axios.post<T>(`${API_BASE_URL}${endpoint}`, data, {
		headers: { ...defaultHeaders, ...headers },
	});
	return response.data;
};
