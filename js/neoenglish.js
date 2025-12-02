"use strict";
function Transcribe(text,version,syllable,stress,fusion,extra) {
	// SETTINGS
	if ( text.length == 0 ) { return "" ; };
	// TEXT SETTINGS
	text = text.toString();
	text = text.toLowerCase();
	// EXCEPTION WORDS ( FOR EXAMPLE: .tokyo , .nebraska , .shakespeare )
	text = text.replace(/^(.)/g," $1").replace(/([^a-z])\.([a-z])/g,"$1Æ$2");
	// TEXT SEPARATION
	text = text.replace(/([a-z]+)(\´)([a-z]+)/g,"$1åîǿ$3");
	text = text.replace(/([a-z]+)(\’)([a-z]+)/g,"$1åîǿ$3");
	text = text.replace(/([a-z]+)(\')([a-z]+)/g,"$1åîǿ$3");
	text = text.replace(/(\n)\t+/g,"\n\n").replace(/\n/g,"Þ").replace(/\s/g," ");
	text = text.replace(/([^a-z\.\-Æ#@áàâäǎăāãåǻąæǽćċĉčçďđðéèėêëěĕēęẹəġĝğģĥħıíìîïǐĭīĩįịĵķĸĺļłľŀŉńňñņŋóòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþúùûüǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž])/g," $1 ");
	text = text.replace(/åîǿ/g,"'");
	text = text.replace(/ {2,}/g," ");
	text = text.trim();
	// TEXT ARRAY
	let ListT = text.split(" ");
	let positionT = 0;
	let result = "";
	// TEXT PROCESS
	while ( ListT[positionT] ) {
		// WORD PROCESS
		let word = ListT[positionT];
		// EXCEPTION BLOCK : { TEXT }
		if ( word == "{" ) {
			let positionB = ListT.indexOf("}", positionT);
			while ( positionB !== -1 && positionT < positionB ) {
				result = result + word + " ";
				positionT = positionT + 1;
				word = ListT[positionT];
				continue;
			};
		};
		// EXCEPTION CHARACTERS ( Æ , # , @ , etc )
		if ( word.search(/[Æ#@áàâäǎăāãåǻąæǽćċĉčçďđðéèėêëěĕēęẹəġĝğģĥħıíìîïǐĭīĩįịĵķĸĺļłľŀŉńňñņŋóòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþúùûüǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž]/g) !== -1 ) {
			result = result + word + "  ";
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
		// WORD WITH PERIOD ( . )
		const perioda = /[a-z]+(\.){2,}$/;
		if ( perioda.test(word) ) {		
			let worda = word.replace(/((\.){2,})$/g," $1");
			let ListP = worda.split(" ");
			ListT.splice(positionT, 1, ListP[0], ListP[1]);
			continue;
		};
		const period = /[a-z]+(\.)$/;
		if ( period.test(word) ) {
			if ( apadict[word] == undefined ) {
				let wordz = word.slice(0,-1);
				ListT.splice(positionT, 1, wordz, ".");
				continue;
			};
		};
		// WORD WITH HYPHEN ( - )
		const hyphena = /^(\-){1,}[a-z]+/;
		if ( hyphena.test(word) ) {
				let worda = word.replace(/^(\-){1,}/g,"");
				ListT.splice(positionT, 1, "-", worda);
				continue;
		};
		const hyphenz = /[a-z]+(\-){1,}$/;
		if ( hyphenz.test(word) ) {
				let wordz = word.replace(/(\-){1,}$/g,"");
				ListT.splice(positionT, 1, wordz, "-");
				continue;
		};
		const hyphen = /^[a-z]+((\-)([a-z]+)){1,}$/;
		if ( hyphen.test(word) ) {
			if ( apadict[word] == undefined ) {
				let ListH = word.split("-");
				let w = ListH[0];
				let n = 1;
				while ( n < ListH.length-1 ) {
					w = w + "-" + ListH[n];
					n = n + 1;
				};
				ListT.splice(positionT, 1, w, "-", ListH[ListH.length-1]);
				continue;
			};
		};
		// WORD THAT IS IN THE DICTIONARY
		if ( apadict[word] ) {
			let textsyllable = apadict[word];
			// NEO-ENGLISH SYLLABIFICATION ( RULE 2 )
			textsyllable = textsyllable.replace(/(:s)(?!£)(?![aeiou])/g,"s.");
			// NEO-ENGLISH PHONETIC ALPHABET ( NEPA )
			if ( version == 1 ) {
				// VOWELS
				textsyllable = textsyllable.replace(/a£/g,"aa").replace(/e£/g,"ee").replace(/i£/g,"ii").replace(/o£/g,"oo").replace(/u£/g,"uu");
				// CONSONANTS
				textsyllable = textsyllable.replace(/c/g,"ch");
				textsyllable = textsyllable.replace(/d£/g,"dh");
				textsyllable = textsyllable.replace(/n£/g,"ng");
				textsyllable = textsyllable.replace(/s£/g,"sh");
				textsyllable = textsyllable.replace(/t£/g,"th");
				textsyllable = textsyllable.replace(/z£/g,"zh");
			};
			// ZEN-ENGLISH PHONETIC ALPHABET ( ZEPA )
			if ( version == 2 ) {
				// VOWELS
				textsyllable = textsyllable.replace(/a£/g,"ā").replace(/e£/g,"ē").replace(/i£/g,"ī").replace(/o£/g,"ō").replace(/u£/g,"ū");
				// CONSONANTS
				textsyllable = textsyllable.replace(/c/g,"ch");
				textsyllable = textsyllable.replace(/d£/g,"dh");
				textsyllable = textsyllable.replace(/n£/g,"ŋ");
				textsyllable = textsyllable.replace(/s£/g,"sh");
				textsyllable = textsyllable.replace(/t£/g,"th");
				textsyllable = textsyllable.replace(/z£/g,"ş");
			};
			// TAO-ENGLISH PHONETIC ALPHABET ( TEPA )
			if ( version == 3 ) {
				// VOWELS
				if ( extra == 0 || extra == 5 ) {
					textsyllable = textsyllable.replace(/a£/g,"aa").replace(/e£/g,"ee").replace(/i£/g,"ii").replace(/o£/g,"oo").replace(/u£/g,"uu");
				};
				if ( extra == 1 || extra == 2 ) {
					textsyllable = textsyllable.replace(/a£/g,"ā").replace(/e£/g,"ē").replace(/i£/g,"ī").replace(/o£/g,"ō").replace(/u£/g,"ū");
				};
				if ( extra == 3 || extra == 4 ) {
					textsyllable = textsyllable.replace(/a£/g,"a").replace(/e£/g,"e").replace(/i£/g,"i").replace(/o£/g,"o").replace(/u£/g,"u");
				};
				// CONSONANTS
				textsyllable = textsyllable.replace(/c/g,"ch");
				textsyllable = textsyllable.replace(/d£/g,"d");
				textsyllable = textsyllable.replace(/n£/g,"ŋ");
				textsyllable = textsyllable.replace(/s£/g,"sh");
				textsyllable = textsyllable.replace(/t£/g,"z");
				textsyllable = textsyllable.replace(/z£/g,"siç");
				textsyllable = textsyllable.replace(/içi/g,"i");
				textsyllable = textsyllable.replace(/ç/g,"");
			};
			// SYLLABLE
			if ( syllable == 0 ) { textsyllable = textsyllable.replace(/\./g,"") ; };
			if ( syllable == 0 ) { textsyllable = textsyllable.replace(/\:/g,"") ; };
			if ( syllable == 1 && ( extra == 0 || extra == 1 || extra == 3 ) ) { textsyllable = textsyllable.replace(/\:/g,".") ; };
			// STRESS
			if ( stress == 0 ) { textsyllable = textsyllable.replace(/3/g,"") ; };
			if ( stress == 1 ) { textsyllable = textsyllable.replace(/3a/g,"á").replace(/3e/g,"é").replace(/3i/g,"í").replace(/3o/g,"ó").replace(/3u/g,"ú") ; };
			if ( stress == 1 ) { textsyllable = textsyllable.replace(/3ā/g,"â").replace(/3ē/g,"ê").replace(/3ī/g,"î").replace(/3ō/g,"ô").replace(/3ū/g,"û") ; };
			// FUSION
			if ( fusion == 0 ) { result = result + textsyllable + "  "; };
			if ( fusion == 1 ) { result = result + word + " { " + textsyllable + " }" + "  "; };
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
		// ANOTHER WORD, NUMBER OR SIGN
		if ( true ) {
			result = result + word + "  ";
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
	};
	// RESULT SETTINGS
	result = result.replace(/(\d)( )*(\,|\;|\.|\:)?( )*(?=(\d))/g,"$1$3");
	result = result.replace(/Þ/g,"\n").replace(/ *\n */g,"\n").replace(/\n{3,}/g,"\n\n");
	result = result.replace(/Æ/g,".").replace(/ {3,}/g,"  ");
	result = result.trim();
	// RESULT ( MAPA )
	return result;
};
// module.exports = { Transcribe };
