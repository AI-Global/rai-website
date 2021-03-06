export const getCustomProperties = (prefix) => {
  const variables = [].slice
    .call(document.styleSheets)
    .map((styleSheet) => [].slice.call(styleSheet.cssRules))
    .flat()
    .filter((cssRule) => cssRule.selectorText === ":root")
    .map((cssRule) =>
      cssRule.cssText.split("{")[1].split("}")[0].trim().split(";")
    )
    .flat()
    .filter((text) => text !== "")
    .map((text) => text.split(":"))
    .map((parts) => ({ key: parts[0].trim(), value: parts[1].trim() }))
    .filter((parts) => parts.key.includes(prefix));

  return variables;
};
