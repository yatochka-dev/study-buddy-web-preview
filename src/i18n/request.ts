import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as unknown as typeof routing.locales[number])) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});