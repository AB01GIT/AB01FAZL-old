import en from "./en";
import fa from "./fa";

// تابع آماده برای ادرس دهی قسمت زبان مانند menu.tilte
export const flattenMessages = (nestedMessages, prefix = "") => {
    if (nestedMessages === null) {
        return {};
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === "string") {
            Object.assign(messages, { [prefixedKey]: value });
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
};

// تابع استفاده از react-intl
export default {
    en: flattenMessages(en),
    fa: flattenMessages(fa),
};
