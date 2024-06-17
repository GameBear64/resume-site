import { derived, get } from 'svelte/store';
import { preferences } from '@utils/store';

import translations from './translations.json';

export const locale = get(preferences).language;
export const locales = Object.keys(translations);

// function approach
export const t = derived(preferences, $preferences => key => translations?.[$preferences.language]?.[key] || key);

// directive approach
export default function i18n(node) {
  preferences.subscribe(({ language }) => {
    if (language == 'en') {
      node.innerText = node?.originalText || node.innerText;
      node.originalText = node.innerText;
    } else {
      node.innerText = translations?.[language]?.[node.innerText] || node.innerText;
    }
  });
}
