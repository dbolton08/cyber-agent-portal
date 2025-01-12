import { Language, Translations } from './types';
import { en } from './languages/en';
import { es } from './languages/es';
import { fr } from './languages/fr';
import { de } from './languages/de';
import { it } from './languages/it';
import { zh } from './languages/zh';

export const translations: Record<Language, Translations> = {
  en,
  es,
  fr,
  de,
  it,
  zh
};