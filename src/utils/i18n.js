import { derived, get } from 'svelte/store';
import { preferences } from '@utils/stores/settings';

import translations from './translations.json';

export const locale = get(preferences).language;

// Translations:
const locales = ['bg', 'de', 'jp'];

// function approach
export const t = derived(
  preferences,
  $preferences => key => translations?.[key]?.[locales.indexOf($preferences.language)] || handleMissingTranslation(key)
);

// directive approach
export default function i18n(node) {
  node.originalText = node.innerText;
  preferences.subscribe(({ language }) => {
    const translation = translations?.[node.originalText]?.[locales.indexOf(language)];

    if (!translations?.[node.originalText] && language != 'en') handleMissingTranslation(node.innerText);

    node.innerText = translation || node?.originalText || node.innerText;
  });
}

function handleMissingTranslation(text) {
  if (!window?.missingTranslations) {
    window.missingTranslations = {};
    console.log(
      'Missing translations detected, "window.missingTranslations" was created and it will be filled with strings in the current translation format as you explore the website.'
    );
  }

  window.missingTranslations[text] = locales;

  return text;
}
