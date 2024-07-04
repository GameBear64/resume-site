import { writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

export const sidebarOpen = writable(false);

export const location = writable(window.location?.hash?.slice(1) || 'header');

export function toggleSideBar() {
  sidebarOpen.update(s => !s);
}

export const preferences = persisted('VP-preferences', {
  accent: 'green',
  theme: 'dark',
  language: 'en',
  splashTimer: true,
});

/**
 * @param {string} theme
 */
export function setTheme(theme) {
  preferences.update(p => ({ ...p, theme }));
}

/**
 * @param {string} accent
 */
export function setAccent(accent) {
  preferences.update(p => ({ ...p, accent }));
}

export const lastSplash = persisted('VP-splash', 0);
