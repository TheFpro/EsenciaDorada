export function getAsset(name: string) {
  const fileName = name.includes(".") ? name : `${name}.jpg`;
  return `/assets/${fileName}`;
}

