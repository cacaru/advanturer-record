import { ko } from "./ko";


export type TranslationKey = keyof typeof ko;

export type Locale = "ko";

export const locales = {
    ko
};

export function langT(key: TranslationKey, locale: Locale = "ko"):string {
    return locales[locale][key];
}