import { derived, get } from 'svelte/store';
import { preferences } from '@utils/store';

import translations from './translations.json';

export const locale = get(preferences).language;

// Translations:
// 0: bg
const locales = ['bg'];

// function approach
export const t = derived(
  preferences,
  $preferences => key => translations?.[key]?.[locales.indexOf($preferences.language)] || key
);

// directive approach
export default function i18n(node) {
  node.originalText = node.innerText;
  preferences.subscribe(({ language }) => {
    if (language == 'en') {
      node.innerText = node?.originalText || node.innerText;
    } else {
      node.innerText = translations?.[node.innerText]?.[locales.indexOf(language)] || node.innerText;
    }
  });
}
