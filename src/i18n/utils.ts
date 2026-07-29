import { ui, defaultLocale, locales, type Locale } from './ui';

export function getLangFromUrl(url: URL): Locale {
	const [, maybeLocale] = url.pathname.split('/');
	if ((locales as readonly string[]).includes(maybeLocale)) return maybeLocale as Locale;
	return defaultLocale;
}

export function useTranslations(lang: Locale) {
	return function t(key: string): string {
		return ui[lang]?.[key] ?? ui[defaultLocale][key] ?? key;
	};
}

export function getPathWithoutLocale(pathname: string): string {
	const [, maybeLocale, ...rest] = pathname.split('/');
	if ((locales as readonly string[]).includes(maybeLocale) && maybeLocale !== defaultLocale) {
		return '/' + rest.join('/');
	}
	return pathname;
}

export function getLocalizedPath(canonicalPath: string, lang: Locale): string {
	if (lang === defaultLocale) return canonicalPath;
	if (canonicalPath === '/') return `/${lang}/`;
	return `/${lang}${canonicalPath}`;
}

export { locales, defaultLocale, localeNames } from './ui';
export type { Locale } from './ui';
