function removeBlock(css: string, directive: string): string {
  const index = css.indexOf(directive);
  if (index === -1) return css;

  let depth = 0;
  let start = -1;
  for (let i = index; i < css.length; i++) {
    if (css[i] === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (css[i] === "}") {
      depth--;
      if (depth === 0 && start !== -1) {
        return css.slice(0, index) + css.slice(i + 1);
      }
    }
  }
  return css;
}

function extractThemeVariables(source: string): string {
  let css = source.replace(/@import\s+["'][^"']*["'];?\s*\n/g, "");
  css = css.replace(/@custom-variant[^\n]*\n/g, "");
  css = removeBlock(css, "@theme");
  css = removeBlock(css, "@layer base");
  return css.trim();
}

export { extractThemeVariables };
