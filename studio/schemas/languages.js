// The languages you want to support.
// They need 'id' and 'title'

export const languages = [
  { id: 'en', title: 'English (UK)' ,  isDefault: true},
  { id: 'no', title: 'Norwegian' },
  { id: 'es', title: 'Spanish' },
  { id: 'sv', title: 'Spanish-Sv' },
  { id: 'cr', title: 'Spanish-Cr' },
  { id: 'fr', title: 'French' },
  { id: 'nl', title: 'Dutch' },
  { id: 'it', title: 'Italian' },
  { id: 'tr', title: 'Turkish' },
  { id: 'de', title: 'German' },
  { id: 'pt', title: 'portuguese' },
  { id: 'th', title: 'Thailand' },
  { id: 'id', title: 'Indonesian' },
  { id: 'ru', title: 'Russian' },
  { id: 'ar', title: 'Arabic' },
  { id: 'el', title: 'Greek' },
  { id: 'fi', title: 'Finnish' }
  
];

// console.log(languages);
 export const baseLanguage =languages.find(l => l.isDefault)



