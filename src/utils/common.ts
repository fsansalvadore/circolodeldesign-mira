export const findByShortname = (fields: any[] = [], shortname: string) => {
  return fields?.find((field) => field?.shortname === shortname);
};

export const shuffle = (array) => {
  return array.sort((a, b) => 0.5 - Math.random());
};
