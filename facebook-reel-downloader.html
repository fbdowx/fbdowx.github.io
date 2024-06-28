const locales = {
  en: "GB",
  hi: "IN",
  pt: "BR",
  es: "ES",
  fil: "PH",
  ar: "SA",
  bn: "BD",
  id: "ID",
  th: "TH",
  vi: "VN"
};

function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode) ? `https://flagsapi.com/${countryCode}/shiny/64.png` : "";
}

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

function setSelectedLocale(locale) {
  const langName = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
  dropdownContent.innerHTML = "";

  const otherLocales = Object.keys(locales).filter((loc) => loc !== locale);
  otherLocales.forEach((otherLocale) => {
    const otherLangName = new Intl.DisplayNames([otherLocale], { type: "language" }).of(otherLocale);

    const listEl = document.createElement("li");
    listEl.innerHTML = `${otherLangName} <img alt="flag" src="${getFlagSrc(locales[otherLocale])}" />`;
    listEl.value = otherLocale;
    listEl.addEventListener("click", function () {
      setSelectedLocale(otherLocale);
      const urlMap = {
        en: "/index.html",
        pt: "/pt/",
        es: "/es/",
        fil: "/fil/",
        ar: "/ar/",
        bn: "/bn/",
        id: "/id/",
        th: "/th/",
        vi: "/vi/"
      };
      window.location.href = urlMap[otherLocale] || "/index.html";
    });
    dropdownContent.appendChild(listEl);
  });

  dropdownBtn.innerHTML = `<img alt="flag" src="${getFlagSrc(locales[locale])}" /> ${langName} <span class="arrow-up"></span>`;
}

// Get the current language from the <html> tag
const htmlLang = document.documentElement.lang || 'en';
const browserLang = htmlLang.split('-')[0];
setSelectedLocale(browserLang in locales ? browserLang : 'en');
