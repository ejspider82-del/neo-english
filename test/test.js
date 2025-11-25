"use strict";

// npm test

let expect = require("chai").expect;
let transcriber = require("../js/neo-english.js");

describe("#neo-english", function() {

	// Mode NEPA

	it("NEPA 1 : Syllable", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",1,1,0,0,0);
	expect(result).to.equal("dhe  faa.dher  and  san  gou  tuu  dhe  paark  tuu  sii  plas  beerd  to.moo.rou");
	});
	it("NEPA 2 : Stress3", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",1,0,1,0,0);
	expect(result).to.equal("dhe  fáadher  and  san  gou  tuu  dhe  paark  tuu  sii  plas  beerd  tomóorou");
	});
	it("NEPA 3 : Fusion", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",1,0,0,1,0);
	expect(result).to.equal("the { dhe }  father { faadher }  and { and }  son { san }  go { gou }  to { tuu }  the { dhe }  park { paark }  to { tuu }  see { sii }  plus { plas }  bird { beerd }  tomorrow { tomoorou }");
	});

	// Mode ZEPA

	it("ZEPA 1 : Syllable", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",2,1,0,0,0);
	expect(result).to.equal("dhe  fā.dher  and  san  gou  tū  dhe  pārk  tū  sī  plas  bērd  to.mō.rou");
	});
	it("ZEPA 2 : Stress3", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",2,0,1,0,0);
	expect(result).to.equal("dhe  fâdher  and  san  gou  tū  dhe  pārk  tū  sī  plas  bērd  tomôrou");
	});
	it("ZEPA 3 : Fusion", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",2,0,0,1,0);
	expect(result).to.equal("the { dhe }  father { fādher }  and { and }  son { san }  go { gou }  to { tū }  the { dhe }  park { pārk }  to { tū }  see { sī }  plus { plas }  bird { bērd }  tomorrow { tomōrou }");
	});

	// Mode TEPA

	it("TEPA 1 : Syllable", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",3,1,0,0,1);
	expect(result).to.equal("de  fā.der  and  san  gou  tū  de  pārk  tū  sī  plas  bērd  to.mō.rou");
	});
	it("TEPA 2 : Stress3", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",3,0,1,0,1);
	expect(result).to.equal("de  fâder  and  san  gou  tū  de  pārk  tū  sī  plas  bērd  tomôrou");
	});
	it("TEPA 3 : Fusion", function() {
	let result = transcriber.Transcribe("The father and son go to the park to see plus bird tomorrow",3,0,0,1,1);
	expect(result).to.equal("the { de }  father { fāder }  and { and }  son { san }  go { gou }  to { tū }  the { de }  park { pārk }  to { tū }  see { sī }  plus { plas }  bird { bērd }  tomorrow { tomōrou }");
	});

});
