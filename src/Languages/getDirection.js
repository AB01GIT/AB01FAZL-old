// روش تغییر زبان بدون package react-intl
// import en_us from "./en";
// import fa_ir from "./fa";

const direction = {
    en: "ltr",
    fa: "rtl",
};

let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";

const font = {
    en: "dana",
    fa: "dana",
};

// const translate = {
//     en: en_us,
//     fa: fa_ir,
// };

export function getDirection() {
    return direction[lang];
}

export { lang };

export function getFont() {
    return font[lang];
}

// export function getTranslate() {
//     return translate[lang];
// }

// تابع تغییر زبان و ریلود صفحه
export function changeLanguage(newLang) {
    if (newLang === lang) {
        return;
    }
    localStorage.setItem("lang", newLang);
    window.location.reload();
}
