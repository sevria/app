import createClient from 'openapi-fetch';
import type { paths } from './types/api';
import { browser } from '$app/environment';

export const api = createClient<paths>({ baseUrl: browser ? window.env.PUBLIC_API_URL : '' });
