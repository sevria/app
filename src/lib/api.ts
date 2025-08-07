import { browser } from '$app/environment';
import createClient from 'openapi-fetch';
import { Fetcher } from 'openapi-typescript-fetch';
import type { paths } from './types/api';

export const api = createClient<paths>({ baseUrl: browser ? window.env.PUBLIC_API_URL : '' });

export const api2 = Fetcher.for<paths>();

api2.configure({
	baseUrl: browser ? window.env.PUBLIC_API_URL : ''
});

export const login = api2.path('/auth/login').method('post').create();
