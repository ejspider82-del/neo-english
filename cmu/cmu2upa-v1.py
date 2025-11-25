# -*- coding: utf-8 -*-

# Carnegie Mellon University ( BSD License )

# The CMU Pronouncing Dictionary ( cmudict-0.7b )

# http://www.speech.cs.cmu.edu/cgi-bin/cmudict

# Python Script cmu2upa.py by Armotus ( Alex )

# cmudict = open("cmudict-0.7b", "r", encoding="utf8");

import re

# FUNCTIONS

def FuC(Cx,P=1) :

	if P == 2 :

		upaC = re.sub(r"[^aeiouy]", r",", Cx);

	else :

		upaC = re.sub(r"[^aeiou]", r",", Cx);

	upaC = re.sub(r"\,{2,}", r",", upaC);

	if upaC[0] == "," :

		upaC = upaC[1:];

	if len(upaC) > 1 :

		if upaC[-1] == "," :

			upaC = upaC[:-1];

	if len(upaC) == 0 :

		upaC = "x";

	upaC = upaC.split(",");

	return upaC;

def FuD(Dx) :

	upaD = re.sub(r"[^aeiouəøç~]", r"", Dx);

	upaD = upaD.replace("ç", ",");

	upaD = re.sub(r"\,{2,}", r",", upaD);

	if upaD[0] == "," :

		upaD = upaD[1:];

	if len(upaD) > 1 :

		if upaD[-1] == "," :

			upaD = upaD[:-1];

	if len(upaD) == 0 :

		upaD = "z";

	upaD = upaD.split(",");

	return upaD;

def FuS(Bx,Cx,Dx) :

	n = 0;

	while n < len(Dx) :

		if Dx[n].find("ə") >= 0 :

			if len(Cx) > n :

				if Cx[n] == "ea" :

					Ex = "i";

				else :

					if Cx[n][-1] == "a" :

						Ex = "a";

					elif Cx[n][-1] == "e" :

						Ex = "e";

					elif Cx[n][-1] == "i" :

						Ex = "a";

					elif Cx[n][-1] == "o" :

						Ex = "o";

					elif Cx[n][-1] == "u" :

						Ex = "a";

					else :

						Ex = "a";

				Fx = Bx.index("ə");

				Bx = Bx[:Fx] + Ex + Bx[Fx+1:];

			else :

				return False;

		n = n + 1;

	return Bx;

def FuR(Ax,Rx) :

	Tx = Rx.replace("Zç16əçM", "Zç16açM");

	Tx = Tx.replace("Sç16əçM", "Sç16açM");

	Tx = Tx.replace("Lç16ə~", "Lç16e~");

	Tx = Tx + " ";

	if Tx[-5:] == "16ə~ " :

		if Ax[-2:] == "ar" :

			Tx = Tx.replace("16ə~ ", "16a~ ");

		elif Ax[-2:] == "er" :

			Tx = Tx.replace("16ə~ ", "16e~ ");

		elif Ax[-2:] == "or" :

			Tx = Tx.replace("16ə~ ", "16o~ ");

	Tx = re.sub(r"^Mç16əç", r"Mç16aç", Tx);

	Tx = Tx[:-1];

	return Tx;

def FuE(Ex) :

	Sx = re.sub(r"ə([a-zA-ZøçĎŇŠŤŽ#¢£~123456]{0,})$", r"a\1", Ex);

	return Sx;

def FuA(Bx,Cx,Dx) :

	n = 0;

	while n < len(Dx) :

		if Dx[n].find("ø") >= 0 :

			if len(Cx) > n :

				if Cx[n].find("o") >= 0 :

					if Cx[n].find("a") >= 0 :

						Ex = "a";

					else :

						Ex = "o";

				else :

					Ex = "a";

				Fx = Bx.index("ø");

				Bx = Bx[:Fx] + Ex + Bx[Fx+1:];

			else :

				return False;

		n = n + 1;

	return Bx;

def FuL(Lx) :

	Ox = {
	"Sç35i£çDç35i£çRç35ø¢çM": "Sç35i£çDç35i£çRç35oçM",
	"Sç35i£çDç35i£çRç35ø¢çMZ": "Sç35i£çDç35i£çRç35oçMZ",
	"Sç35i£#36eçNç36eçNDç35ø¢çTKç35ø¢çM": "Sç35i£#36eçNç36eçNDç35oçTKç35oçM",
	"Dç35i£çYç15ø¢çN": "Dç35i£çYç15oçN",
	"Mç16açKç35a£çMZ": "Mç16açKç35oçMZ",
	"Mç16oçKç35ø¢çN": "Mç16açKç35oçN",
	"Mç16oçKç35ø¢çŠ": "Mç16açKç35oçŠ",
	"Mç16oeçGç3ø¢#i£": "Mç16oeçGç35o#i£",
	"Mç16oçKGç35ø¢çLZ": "Mç16açKGç35oçLZ",
	"Mç16oçKç35ø¢çNç16açHç15ø¢": "Mç16açKç35oçNç16açHç15a£",
	"36eçNPç35i£#35ø¢çR": "36eçNPç35i£#35oçR",
	"36eçNPç35i£#35ø¢çRZ": "36eçNPç35i£#35oçRZ",
	"36eçNPç35i£#35ø¢çRDç35ø¢çTç35o£çRG": "36eçNPç35i£#35oçRDç35oçTç35o£çRG",
	"Sç34eiçNTJç35ø¢çNZ": "Sç34eiçNTJç35oçNZ",
	"Sç34eiçNTJç35ø¢çN": "Sç34eiçNTJç35oçN"
	};

	Nx = ''.join(Ox.get(i,i) for i in Lx.split());

	return Nx;

def FuX(Tx) :

	Ux = {
	"Tç16oçMç35oçRç24ou": "Tç16oçMç35o£çRç24ou",
	"Tç16oçMç35oçRç24ouçZ": "Tç16oçMç35o£çRç24ouçZ",
	"Bç36açBç16oçLç25oçN": "Bç36açBç16oçLç25oçN",
	"Sç36içKç16oçLç16e~": "Sç36içKç16oçLç16o~",
	"Kç16oçMç35a£çN": "Kç16oçMç35oçN"
	};

	Zx = ''.join(Ux.get(i,i) for i in Tx.split());

	Zx = re.sub(r"^Mç16oçK", r"Mç16açK", Zx);

	return Zx;

# DICTIONARIES

# VOWELS

CUV = {
"AA0": "ç15ø¢ç",
"AA1": "ç35ø¢ç",
"AA2": "ç25ø¢ç",
"AE0": "ç16aç",
"AE1": "ç36aç",
"AE2": "ç26aç",
"AH0": "ç16əç",
"AH1": "ç36aç",
"AH2": "ç26aç",
"AO0": "ç15o£ç",
"AO1": "ç35o£ç",
"AO2": "ç25o£ç",
"AW0": "ç14auç",
"AW1": "ç34auç",
"AW2": "ç24auç",
"AY0": "ç14aiç",
"AY1": "ç34aiç",
"AY2": "ç24aiç",
"EH0": "ç16eç",
"EH1": "ç36eç",
"EH2": "ç26eç",
"ER0": "ç16ə~ç",
"ER1": "ç35e£~ç",
"ER2": "ç25e£~ç",
"EY0": "ç14eiç",
"EY1": "ç34eiç",
"EY2": "ç24eiç",
"IH0": "ç16iç",
"IH1": "ç36iç",
"IH2": "ç26iç",
"IY0": "ç15i£ç",
"IY1": "ç35i£ç",
"IY2": "ç25i£ç",
"OW0": "ç14ouç",
"OW1": "ç34ouç",
"OW2": "ç24ouç",
"OY0": "ç14oiç",
"OY1": "ç34oiç",
"OY2": "ç24oiç",
"UH0": "ç16uç",
"UH1": "ç36uç",
"UH2": "ç26uç",
"UW0": "ç15u£ç",
"UW1": "ç35u£ç",
"UW2": "ç25u£ç"
};

# CONSONANTS

CUC = {
"B": "B",
"CH": "C",
"D": "D",
"DH": "Ď",
"F": "F",
"G": "G",
"HH": "H",
"JH": "J",
"K": "K",
"L": "L",
"M": "M",
"N": "N",
"NG": "Ň",
"P": "P",
"R": "R",
"S": "S",
"SH": "Š",
"T": "T",
"TH": "Ť",
"V": "V",
"W": "W",
"Y": "Y",
"Z": "Z",
"ZH": "Ž"
};

# SCRIPT

cmudict = open("cmudict-0.7b", "r");

cmutext = cmudict.readlines();

for i in range (len(cmutext)) :

	upa1 = cmutext[i];

	upa2 = upa1.index('  ');

	# PART A

	upaA = upa1[:upa2];

	upaA = upaA.lower();

	if upaA.find("(1)") >= 0 :

		continue;

	if upaA.find("(2)") >= 0 :

		continue;

	if upaA.find("(3)") >= 0 :

		continue;

	# PART B

	upaB = upa1[upa2+2:-1];

	# VOWELS

	upaB = ' '.join(CUV.get(i,i) for i in upaB.split());

	# CONSONANTS

	upaB = ' '.join(CUC.get(i,i) for i in upaB.split());

	upaB = upaB.replace(" ", "");

	if upaB[0] == "ç" :

		upaB = upaB[1:];

	if upaB[-1] == "ç" :

		upaB = upaB[:-1];

	upaB = upaB.replace("çç", "#");

	# SCHWA & LONG VOWEL AA

	if upaB.find("ə") >= 0 or upaB.find("ø") >= 0 :

		# SCHWA

		if upaB.find("ə") >= 0 :

			upaB = upaB.replace("16ə#16ə~", "16ə#ç16ə~");

			upaB = upaB.replace("16ə~#16ə", "16ə~#ç16ə");

			upaB = upaB.replace("16ə#16ə", "16ə#ç16ə");

			upaC = FuC(upaA);

			upaD = FuD(upaB);

			upaE = FuS(upaB,upaC,upaD);

			if upaE == False :

				upaE = FuR(upaA,upaB);

				if upaE.find("ə") >= 0 :

					upaF = FuC(upaA,2);

					upaG = FuD(upaE);

					upaE = FuS(upaE,upaF,upaG);

					n = 1;

					while upaE == False :

						upaE = FuR(upaA,upaB);

						s = 1;

						while s <= n :

							upaE = FuE(upaE);

							s = s + 1;

						upaH = FuD(upaE);

						upaE = FuS(upaE,upaC,upaH);

						n = n + 1;

			upaB = upaE;

			if upaB.find("ə") >= 0 :

				upaB = upaB.replace("ə", "a");

		# LONG VOWEL AA

		if upaB.find("ø") >= 0 :

			upaC = FuC(upaA);

			upaD = FuD(upaB);

			upaE = FuA(upaB,upaC,upaD);

			if upaE == False :

				upaE = FuL(upaB);

				if upaE.find("ø") >= 0 :

					upaF = FuC(upaA,2);

					upaE = FuA(upaB,upaF,upaD);

					if upaE == False :

						upaE = upaB;

			upaB = upaE;

			if upaB.find("ø") >= 0 :

				upaB = upaB.replace("ø", "a");

			upaB = upaB.replace("a¢", "a£");

			upaB = upaB.replace("o¢", "o");

		# EXCEPTIONS SCHWA & LONG VOWEL AA

		upaB = FuX(upaB);

	# SYLLABLE

	# .7 ( . ) MAXIMAL ONSET PRINCIPLE ( STRONG )

	# .8 ( : ) MAXIMAL ONSET PRINCIPLE < WEAK SYLLABLE PRINCIPLE ( AMBISYLLABICITY ) ( ONE AFFECTED INTERVOCALIC CONSONANT )

	# .9 ( : ) MAXIMAL ONSET PRINCIPLE < WEAK SYLLABLE PRINCIPLE ( AMBISYLLABICITY ) ( TWO AFFECTED INTERVOCALIC CONSONANTS )

	# .0 ( . ) MAXIMAL ONSET PRINCIPLE < WEAK SYLLABLE PRINCIPLE < EXCEPTIONS H, W and Y ( ONE AFFECTED INTERVOCALIC CONSONANT )

	upaB = upaB.replace("#ç", "#");

	upaB = upaB.replace("ç#", "#");

	upaB = upaB.replace("#", "çĦç");

	upaB = re.sub(r"^([aeiou123])", r"Ħç\1", upaB);

	upaB = upaB.replace(" ", "");

	upaB = upaB.split("ç");

	C1 = {"H", "W", "Y"};

	C2 = {"BL", "FL", "GL", "KL", "PL", "SL", "ŠL", "ŤL", "BR", "DR", "FR", "GR", "KR", "PR", "ŠR", "TR", "ŤR", "DW", "GW", "HW", "KW", "PW", "SW", "TW", "ŤW", "VW", "BY", "DY", "FY", "GY", "HY", "KY", "LY", "MY", "NY", "PY", "SY", "TY", "ŤY", "VY", "ZY", "SF", "SK", "SM", "SN", "SP", "ST", "SŤ"};

	C3 = {"SKL", "SPL", "SFR", "SKR", "SPR", "STR", "SKW", "SKY", "SMY", "SNY", "SPY", "STY"};

	n = 4;

	while len(upaB) >= n :

		if len(upaB[n-2]) == 1 :

			if upaB[n-2][-1] == "Ň" :

				upaB[n-2] = upaB[n-2] + ".7";

			elif upaB[n-2][0] == "Ħ" :

				upaB[n-2] = ".7" + upaB[n-2];

			elif ( int(upaB[n-3][0]) > int(upaB[n-1][0]) ) and int(upaB[n-3][1]) == 6 :

				for x in C1 :

					if upaB[n-2] == x :

						upaB[n-2] = ".0" + upaB[n-2];

						break;

				else :

					upaB[n-2] = ".8" + upaB[n-2];

			else :

				upaB[n-2] = ".7" + upaB[n-2];

		elif len(upaB[n-2]) == 2 :

			if upaB[n-2][-1] == "Ň" :

				upaB[n-2] = upaB[n-2] + ".7";

			elif ( int(upaB[n-3][0]) > int(upaB[n-1][0]) ) and int(upaB[n-3][1]) == 6 :

				for x in C2 :

					if upaB[n-2] == x :

						upaB[n-2] = ".8" + upaB[n-2];

						break;

				else :

					upaB[n-2] = upaB[n-2][0] + ".7" + upaB[n-2][1];

			else :

				for x in C2 :

					if upaB[n-2] == x :

						upaB[n-2] = ".7" + upaB[n-2];

						break;

				else :

					upaB[n-2] = upaB[n-2][0] + ".7" + upaB[n-2][1];

		elif len(upaB[n-2]) == 3 :

			if upaB[n-2][-1] == "Ň" :

				upaB[n-2] = upaB[n-2] + ".7";

			elif ( int(upaB[n-3][0]) > int(upaB[n-1][0]) ) and int(upaB[n-3][1]) == 6 :

				for x in C3 :

					if upaB[n-2] == x :

						for x in C2 :

							if upaB[n-2][1:3] == x :

								upaB[n-2] = ".8" + upaB[n-2];

								break;

						else :

							upaB[n-2] = ".9" + upaB[n-2];

						break;

				else :

					for x in C2 :

						if upaB[n-2][1:3] == x :

							upaB[n-2] = upaB[n-2][0] + ".7" + upaB[n-2][1:3];

							break;

					else :

						upaB[n-2] = upaB[n-2][:2] + ".7" + upaB[n-2][2];

			else :

				for x in C3 :

					if upaB[n-2] == x :

						upaB[n-2] = ".7" + upaB[n-2];

						break;

				else :

					for x in C2 :

						if upaB[n-2][1:3] == x :

							upaB[n-2] = upaB[n-2][0] + ".7" + upaB[n-2][1:3];

							break;

					else :

						upaB[n-2] = upaB[n-2][:2] + ".7" + upaB[n-2][2];

		elif len(upaB[n-2]) >= 4 :

			c = len(upaB[n-2]);

			s = len(upaB[n-2]) - 2;

			z = len(upaB[n-2]) - 3;

			if upaB[n-2][-1] == "Ň" :

				upaB[n-2] = upaB[n-2] + ".7";

			else :

				for x in C3 :

					if upaB[n-2][z:c] == x :

						upaB[n-2] = upaB[n-2][:z] + ".7" + upaB[n-2][z:c];

						break;

				else :

					for x in C2 :

						if upaB[n-2][s:c] == x :

							upaB[n-2] = upaB[n-2][:s] + ".7" + upaB[n-2][s:c];

							break;

					else :

						upaB[n-2] = upaB[n-2][:-1] + ".7" + upaB[n-2][-1];

		n = n + 2;

	# CHANGES

	upaB = ''.join(upaB);

	upaB = upaB.replace("Ħ","");

	upaB = upaB.replace(".7",".").replace(".8",":").replace(".9",":").replace(".0",".");

	upaB = upaB.replace("1","").replace("2","").replace("4","").replace("5","").replace("6","");

	upaB = re.sub(r"(~)(.)([aeiou3])",r"\2R\3",upaB);

	upaB = upaB.replace("~","R");

	if upaB.find(".") == -1 and upaB.find(":") == -1 :

		upaB = upaB.replace("3","");

	upaB = upaB.replace("Ď","D£").replace("Ň","N£").replace("Š","S£").replace("Ť","T£").replace("Ž","Z£");

	upaB = upaB.lower();

	"""

	# THE PSEUDO-OFFICIAL NEO-ENGLISH DICTIONARY

	upaB = upaB.replace("c","ch").replace("d£","dh").replace("n£","ng").replace("s£","sh").replace("t£","th").replace("z£","zh");

	upaB = upaB.replace("a£","aa").replace("e£","ee").replace("i£","ii").replace("o£","oo").replace("u£","uu");

	upaB = upaB.replace("3a","á").replace("3e","é").replace("3i","í").replace("3o","ó").replace("3u","ú");

	"""

	# PART C

	upaC = '  ' + '"' + upaA + '"' + ':' + ' ' + '"' + upaB + '"' + ',';

	print(upaC);

cmudict.close();

# FINAL RESULT : dictionary.js ( upadict-0.0.1 )

"""

# APPENDIX ( Universal Phonetic Alphabet )

{a1,e1,i1,o1,u1,b1,c1,d1,f1,g1,h1,j1,k1,l1,m1,n1,p1,q1,r1,s1,t1,v1,w1,x1,y1,z1} ( 1=1 or 1= or 1=¢ )

{a2,e2,i2,o2,u2,b2,c2,d2,f2,g2,h2,j2,k2,l2,m2,n2,p2,q2,r2,s2,t2,v2,w2,x2,y2,z2} ( 2=2 or 2=£ )

{a3,e3,i3,o3,u3,b3,c3,d3,f3,g3,h3,j3,k3,l3,m3,n3,p3,q3,r3,s3,t3,v3,w3,x3,y3,z3} ( 3=3 or 3=¥ )

etc.

1 digit : {[a-z][1,2,3,4,5,6,7,8,9,0]} = ( 260 Consonants , 50 Vowels )

2 digits : {[a-z][01,02,03,...,99,00]} = ( 2600 Consonants , 500 Vowels )

etc.

"""
