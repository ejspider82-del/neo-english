'use strict';

// node usage.js

let text = 'The father and son go to the park to see plus bird tomorrow';
let transcriber = require('../js/neo-english.js');
let NEPAphonemetext = transcriber.Transcribe(text,1,1,0,0,0);
let ZEPAphonemetext = transcriber.Transcribe(text,2,1,0,0,0);
let TEPAphonemetext = transcriber.Transcribe(text,3,1,0,0,1);

console.log(NEPAphonemetext);
console.log(ZEPAphonemetext);
console.log(TEPAphonemetext);

// Mode NEPA : dhe  faa.dher  and  san  gou  tuu  dhe  paark  tuu  sii  plas  beerd  to.moo.rou
// Mode ZEPA : dhe  fā.dher  and  san  gou  tū  dhe  pārk  tū  sī  plas  bērd  to.mō.rou
// Mode TEPA : de  fā.der  and  san  gou  tū  de  pārk  tū  sī  plas  bērd  to.mō.rou
