export interface CountryModel {
  cca2: string;
  callingCode: string[];
  flag: string;
  name: string;
  region: string;
  subregion: string;
}

export const countryCambodia: CountryModel = {
  cca2: 'KH',
  callingCode: ['855'],
  flag: 'KH',
  name: 'Cambodia',
  region: 'Asia',
  subregion: 'South-Eastern Asia',
};
