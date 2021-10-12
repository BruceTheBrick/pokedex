export const convertTypeToColor = (type) => {
  switch (type.toLowerCase()) {
    case "normal": {
      return getComputedStyle(document.documentElement).getPropertyValue("--normal");
    }
    case "fire": {
      return getComputedStyle(document.documentElement).getPropertyValue("--fire");
    }
    case "water": {
      return getComputedStyle(document.documentElement).getPropertyValue("--water");
    }
    case "grass": {
      return getComputedStyle(document.documentElement).getPropertyValue("--grass");
    }
    case "electric": {
      return getComputedStyle(document.documentElement).getPropertyValue("--electric");
    }
    case "ice": {
      return getComputedStyle(document.documentElement).getPropertyValue("--ice");
    }
    case "fighting": {
      return getComputedStyle(document.documentElement).getPropertyValue("--fighting");
    }
    case "poison": {
      return getComputedStyle(document.documentElement).getPropertyValue("--poison");
    }
    case "ground": {
      return getComputedStyle(document.documentElement).getPropertyValue("--ground");
    }
    case "flying": {
      return getComputedStyle(document.documentElement).getPropertyValue("--flying");
    }
    case "psychic": {
      return getComputedStyle(document.documentElement).getPropertyValue("--psychic");
    }
    case "bug": {
      return getComputedStyle(document.documentElement).getPropertyValue("--bug");
    }
    case "rock": {
      return getComputedStyle(document.documentElement).getPropertyValue("--rock");
    }
    case "ghost": {
      return getComputedStyle(document.documentElement).getPropertyValue("--ghost");
    }
    case "dark": {
      return getComputedStyle(document.documentElement).getPropertyValue("--dark");
    }
    case "dragon": {
      return getComputedStyle(document.documentElement).getPropertyValue("--dragon");
    }
    case "steel": {
      return getComputedStyle(document.documentElement).getPropertyValue("--steel");
    }
    case "fairy": {
      return getComputedStyle(document.documentElement).getPropertyValue("--fairy");
    }
    default: {
    }
  }
};
