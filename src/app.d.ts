// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	interface Window {
		env: Record<string, string>;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
