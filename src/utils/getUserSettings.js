import { options } from "@src/constants/settings";

export function getUserSettingsFromAstro(Astro) {
  const optionsWithCurrentSettings = options.map((option) => {
    const cookie = Astro.cookies.get(option.name);
    if (cookie) return { ...option, current: cookie.value };
    return { ...option, current: option.default };
  });

  return optionsWithCurrentSettings;
}

export function getUserSettingsObj(Astro) {
  const userSettings = getUserSettingsFromAstro(Astro);

  const userSettingsObj = userSettings.reduce((acc, option) => {
    acc[option.name] = parseFloat(option.current);
    return acc;
  }, {});

  return userSettingsObj;
}
