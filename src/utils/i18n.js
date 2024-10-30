import { derived, get } from 'svelte/store';
import { preferences } from '@utils/store';

import translations from './translations.json';

export const locale = get(preferences).language;

// Translations:
const locales = ['bg', 'de', 'jp'];

// function approach
export const t = derived(
  preferences,
  $preferences => key => translations?.[key]?.[locales.indexOf($preferences.language)] || key
);

// directive approach
export default function i18n(node) {
  node.originalText = node.innerText;
  preferences.subscribe(({ language }) => {
    const translation = translations?.[node.originalText]?.[locales.indexOf(language)];

    if (!translation && node.innerText.split(' ').length > 3 && language != 'en') {
      console.info(
        'No translation for',
        node.innerText,
        'add it to the translations like this \n',
        `"${node.innerText}": [""]`
      );
    }
    node.innerText = translation || node?.originalText || node.innerText;
  });
}
