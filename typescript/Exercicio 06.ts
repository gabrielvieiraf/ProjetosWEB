const dnaToRna : { [key: string]: any } = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}

export function toRna(dna: string) {
  let result = '';
  for (let nucleotides of dna){
      if (!dnaToRna[nucleotides]) throw new Error('Invalid input DNA.');
      result += dnaToRna[nucleotides];
  }
    return result;
}
