# Neo-English (NE)

> Una Lengua Auxiliar Universal de Máxima Simplicidad, construida tomando las mejores características de Esperanto, Español, Chino e Inglés.

---

## Propósito y Fundamentos

El **Neo-English (NE)** es una lengua construida/planificada (**Conlang**) cuyo objetivo es alcanzar la **máxima simplicidad universal** posible en su fonología, ortografía y gramática.

Este proyecto sigue una **estrategia de diseño basada en la simplificación radical**, donde:

* El **Esperanto** aporta su **objetivo y meta universal** (como una lengua auxiliar universal).
* El **Español** aporta su **simplicidad fonológica** (el sistema de **5 vocales puras** **a, e, i, o, u**) y el **Ritmo Silábico** (pausado) al NE.
* El **Chino** aporta su **Morfología Analítica**, **eliminando por completo** la **conjugación verbal**, los **plurales** y el **género gramatical**.
* El **Inglés** aporta el **vocabulario** de mayor uso global y la **estructura gramatical base**, sirviendo como **la fuente principal del léxico** tras su **rigurosa normalización fonológica** al sistema NE.

---

## Screenshots ([Demo](https://armotus.github.io/neo-english))

![light-theme](docs/light.png)

![dark-theme](docs/dark.png)

---

## I. El Alfabeto del Neo-English (NEPA)

El **NEPA** es el Sistema de Ortografía y Pronunciación del Neo-English. Ha sido diseñado (a diferencia del inglés) para establecer una **correspondencia fonológica directa** entre la **escritura (ortografía)** y el **sonido (pronunciación)**.

### 1. Sistema Vocálico: 5 Vocales Puras

El NE adopta parte del sistema vocálico del español, que garantiza una pronunciación **clara y siempre pura** (sin sonidos débiles o reducidos, **como pasa con la Schwa en el inglés**).

| Carácter NEPA | IPA (&nbsp;<a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet">Link</a>&nbsp;) | Descripción |
| :--- | :--- | :--- |
| **a, e, i, o, u** | a, e, i, o, u | 5 Vocales cortas. |
| **aa, ee, ii, oo, uu** | a&#720;, e&#720;, i&#720;, o&#720;, u&#720; | 5 Vocales largas. |
| **ai, ei, oi, au, ou** | ai, ei, oi, au, ou | 5 Diptongos. |
| **á , áa , ái** | **' , ' , '** | Acento. |

**Nota de Lectura:** Para facilitar **la lectura**, las vocales largas no acentuadas pueden también escribirse con el diacrítico macrón: **aa**=**&#257;**, **ee**=**&#275;**, etc. y las vocales largas acentuadas pueden también escribirse con el diacrítico carón: **áa**=**&#226;**, **ée**=**&#234;**, etc.

### 2. Consonantes: Máxima Fidelidad Léxica

Las **24 consonantes** del NE se **pronuncian siempre** (incluida la **R**, que es una consonante simple más), eliminando todas las reglas de pronunciación silenciosa del inglés.

| Carácter NEPA | Fonema IPA | Descripción |
| :--- | :--- | :--- |
| **b, d, f, g, h, j, k, l, m, n, p, r, s, t, v, w, y, z** | b, d, f, g, h, &#100;&#865;&#658;, k, l, m, n, p, r, s, t, v, w, j, z | Consonantes simples. |
| **ch** | &#116;&#865;&#643; | Como la 'CH' en **'church'** (dígrafo). |
| **dh** | &#240; | La 'TH' sonora (como en **'that'**). |
| **ng** | &#331; | El sonido 'NG' (como en **'sing'**). |
| **sh** | &#643; | Como la 'SH' en **'ship'** (dígrafo). |
| **th** | &#952; | La 'TH' sorda (como en **'think'**). |
| **zh** | &#658; | La 'S' sonora (como en **'measure'**). |

**Nota de Lectura:** Para facilitar **la lectura**, las consonantes **ng** y **zh** pueden también escribirse con los caracteres **&#331;** y **&#351;**, respectivamente. Las teclas libres **Q** y **X** podrían ser además **accesos directos Input** para **&#331;** y **&#351;**.

---

## II. Reglas de Fonotáctica y Prosodia

La fonotáctica del Neo-English (NE) está diseñada para maximizar la **fidelidad estructural** al inglés (para el reconocimiento léxico) mientras impone un **ritmo silábico** claro.

### 1. Estructura Silábica y Clústeres (CCCVCCCC Máximo)

El NE adopta la estructura silábica **máxima** del inglés (GA/RP) para mantener la integridad de las palabras originales, **pero su silabificación es estrictamente regular.**

| Componente | Regla NE Definitiva | Justificación |
| :--- | :--- | :--- |
| **Estructura Máxima** | **CCCVCCCC** (Máximo 3 Ataque, Máximo 4 Coda). | **Fidelidad Léxica:** Permite la transcripción de palabras complejas como *glimpsed* o *scrambled*. |
| **Regla de Ataque** | Los clústeres de Ataque (**CC** y **CCC**) están **restringidos a las 60 secuencias válidas** del inglés (ej.: 'str', 'skr', etc. [Ver Listas II.3]). | **Pronunciabilidad:** Asegura que los clústeres sean naturales para un angloparlante. |
| **Silabificación** | **Neo-English Silabeo (NES)**. Único y obligatorio. | **Simplicidad Gramatical:** Elimina la ambigüedad (ambisilabicidad), haciendo que la división silábica sea única y determinista. |

### 2. Neo-English Silabeo (NES)

| Condición Fonológica (Secuencia) | Regla de Silabeo NEO | Lógica Subyacente | Ejemplo Conceptual |
| :--- | :--- | :--- | :--- |
| **1. VCV, VCCV, VCCCV y VCCCCV** | Aplicar siempre el **Principio de Ataque Máximo (MOP)**, utilizando los 83 ataques válidos (ver Listas II.3). | **Simplicidad Universal.** El MOP es la regla de silabeo primaria del inglés. Su aplicación universal garantiza que se obtendrá un **silabeo y pronunciación similar al inglés**. | **pa.per**, **mi.stake**, **mon.ster**, **ab.stract** |
| **2. Excepciones VCCV y VCCCV** | Aplicar siempre el **Principio de Sílaba Débil (WSP)** si se cumplen **TRES** condiciones: **a)** C1 es **S**; **b)** V1 tiene **Estrés Mayor** que V2; y **c)** V1 es una **Vocal Corta**. | **Fidelidad al Énfasis Fonológico.** El WSP rompe el MOP **solo** en estos casos sutiles para garantizar un **silabeo y pronunciación más similar al inglés**. | **plas.tic**, **as.tro** |
| **3. Excepción Universal (R Rótica en Vocales Róticas)** | Una vez que la Vocal Rótica (Vr) se convierte en **V R** simple, el silabeo se ajusta fonológicamente: la R es **Ataque** si una V le sigue (**V.RV**); la R es **Coda** si una C le sigue (**VR.C**). | **Fidelidad Rótica.** Asegura la **naturalidad del inglés americano** al manejar la R según su contexto intervocálico o preconsonántico. | **aste.roid**, **paper.back** |

**IMPORTANTE:** El silabeo NES se realiza luego de El Algoritmo de Normalización (5 Pasos) (Sección IV.1) y el acento secundario es eliminado inmediatamente después de que el silabeo finalice.

### 3. Ataques Válidos (Fonema IPA):

Las listas de los ataques permitidos en el **Principio de Ataque Máximo (MOP)** son los siguientes:

C1 = { b, &#116;&#865;&#643;, d, &#240;, f, g, h, &#100;&#865;&#658;, k, l, m, n, p, r, s, &#643;, t, &#952;, v, w, j, z, &#658; }

C2 = { bl, fl, gl, kl, pl, sl, &#643;l, &#952;l, br, dr, fr, gr, kr, pr, &#643;r, tr, &#952;r, dw, gw, hw, kw, pw, sw, tw, &#952;w, vw, bj, dj, fj, gj, hj, kj, lj, mj, nj, pj, sj, tj, &#952;j, vj, zj, sf, sk, sm, sn, sp, st, s&#952; }

C3 = { skl, spl, sfr, skr, spr, str, skw, skj, smj, snj, spj, stj }

Listas II.3 (Bibliografía: Wikipedia, MOP).

### 4. Ritmo y Acentuación

El NE prioriza el **ritmo silábico** (como el español) y aplica **flexibilidad ortográfica** para maximizar la adopción. El rigor total es una opción, no una obligación en la escritura de uso:

| Elemento | Regla de Escritura (Uso) | Justificación para la Flexibilidad |
| :--- | :--- | :--- |
| **Ritmo del Idioma** | **Ritmo Silábico (Español/Chino).** Todas las sílabas reciben similar duración. | **Usabilidad Universal** |
| **Acento Tónico (Tilde)** | **Opcional/Omitido:** Se puede omitir. Se asume que el usuario deduce el acento por familiaridad con el inglés o por el contexto. | **Máxima Adopción:** Evita la sobrecarga visual para usuarios acostumbrados al inglés. |
| **Separador Silábico (Punto .)** | **Opcional/Omitido:** Se puede omitir. Se asume la pronunciación más común, dejando la desambiguación al contexto. | **Mínima Fricción:** Solo se recomienda en casos de ambigüedad extrema (ej.: n.g vs ng).

---

## III. Léxico y Morfología (Morfología Analítica)

La gramática del Neo-English (NE) se basa en la **Sintaxis SVO** del inglés, pero aplica una **Morfología Analítica Radical** (inspirada en el Mandarín), lo que resulta en un sistema de **Inflexión Cero** que compensa con una **Sintaxis Estricta**.

### 1. Inflexión Cero (Morfología Analítica)

El principio fundamental del NE es la **invariabilidad**. Las palabras no se flexionan, lo que elimina la necesidad de memorizar tablas de conjugación, plurales o género.

* **Verbos (Cero Conjugación):** Los verbos son **invariables**; no cambian por tiempo, persona o número. El tiempo, el aspecto y el **modo** se indican **EXCLUSIVAMENTE** mediante **adverbios y frases adverbiales** (ej.: *hoy, mañana, tal vez, el año pasado*). Si el contexto no especifica el tiempo, se asume el **presente** o la acción habitual.
* **Sustantivos (Sin Plurales Flexivos):** Los sustantivos son **invariables** (no tienen género, número o caso). El plural se marca, **solo cuando es necesario** para la claridad, mediante un **cuantificador** que precede al sustantivo.
    * **Pluralidad Explícita:** Se usan cuantificadores léxicos del inglés (ej.: *thrii, menii, ets.* [three, many, etc.]).
    * **Pluralidad General Indefinida:** Se usa un cuantificador genérico de doble forma: **plas** [el 'plus' normalizado] (antes de vocales y otras consonantes) o **moor** [el 'more' normalizado] (antes de palabras que comienzan con S, Z, SH o ZH). Este cuantificador debe colocarse **siempre al inicio de la frase nominal**, precediendo al sustantivo o a cualquier adjetivo que lo modifique.
* **No-Sustantivos (Sin Plurales Flexivos):** Los **otros tipos de palabras que no sean sustantivos** con flexión de número deben usarse en su forma singular, eliminando toda flexión morfológica de número. (ej.: *dhat plas buk* [those books]; *its plas doog* [their dogs]). **Nota:** Pronombres personales (como I, She, Your, Her, They, etc.) y determinantes posesivos (como My, Your, Our, etc.) que no flexionan por número en inglés no entran en esta categoría y deben usarse como en el inglés original.
* **Ambigüedad Léxica:** La misma raíz léxica (ej.: **ran** o **kar** [run o car]) puede funcionar como varias clases gramaticales (sustantivo / verbo / adjetivo). Esta ambigüedad se resuelve **exclusivamente por la posición estricta en la Sintaxis**.

### 2. Estructura Sintáctica (Orden Estricto SVO)

La morfología analítica obliga a que el orden de las palabras sea **estricto y obligatorio**, siendo la posición el **marcador gramatical primario**.

| Regla Sintáctica | Detalle Obligatorio | Propósito |
| :--- | :--- | :--- |
| **Orden por Defecto** | **Sujeto-Verbo-Objeto (SVO)**. Este orden es **estricto y obligatorio** en oraciones transitivas. | Define las funciones gramaticales (Sujeto, Verbo, Objeto). |
| **Posición del Adjetivo** | El adjetivo modificador debe **siempre preceder** al sustantivo que modifica (ej.: *big haus* [big house]). | Elimina la ambigüedad Adjetivo / Sustantivo. |
| **Posición del Adverbio** | El adverbio debe **preceder al elemento** que modifica (ej.: *kwiklii ran* [quickly run]) o colocarse **al inicio** / **final de la frase** para modificar al verbo principal. | Asegura la claridad del alcance del modificador. |
| **Regla de Negación** | La negación se marca **EXCLUSIVAMENTE** con la partícula **nou** [el 'no' normalizado] colocada **antes del verbo** (ej.: *Ai nou ran* [I not run/I do not run, etc.]). | Mantiene la Inflexión Cero y la Sintaxis Estricta. |
| **Regla de Interrogación** | Las preguntas de Sí/No **DEBEN** comenzar con la partícula auxiliar **duu** [el 'do' normalizado], seguido del orden SVO (ej.: *Duu yuu sii plas doog?* [Do you see dogs?]). | Distingue las preguntas de las oraciones declarativas mediante la posición estricta. |

---

## IV. Léxico y Principios de Normalización (Regla Matriz)

El léxico del Neo-English (NE) se construye bajo la **Máxima Similitud Léxica con el Inglés Americano (GA)**, priorizando la **claridad de la raíz** y la **regularidad fonológica**. La normalización de cualquier palabra del inglés se rige **principalmente** por el siguiente algoritmo de 5 pasos.

### 1. El Algoritmo de Normalización (5 Pasos)

El proceso utiliza la transcripción fonológica del **Inglés Americano (GA)** (utilizando sistemas como IPA / ARPABET / CMU) como base, y aplica reglas de corrección para lograr la claridad fonológica del NE y recuperar distinciones británicas (RP) clave.

| Paso | Regla de Conversión | Resultado NE | Justificación del Diseño |
| :--- | :--- | :--- | :--- |
| **1. Consonantes** | La transcripción fonológica de las 24 consonantes del GA se mapea directamente a las 24 consonantes del NE (Sección I). | Consonantes NE. | Garantiza la máxima familiaridad en consonantes y la **Inflexión Cero**. |
| **2. Vocales / Diptongos Simples** | Los fonemas de vocales cortas /&#652;, &#603;, &#618;, &#594;, &#650;, &#230;/, vocales largas /&#105;&#720;, &#596;&#720;, &#117;&#720;/ y diptongos /a&#618;, e&#618;, o&#618;, a&#650;, o&#650;/ del GA se mapean directamente a las vocales cortas (a, e, i, o, u, a), vocales largas (ii, oo, uu) y diptongos (ai, ei, oi, au, ou) del NE. | Vocales / Diptongos NE. | Fija la **simplicidad vocálica** del Español. |
| **3. Róticas** (**Vocales Róticas**) | Los fonemas róticos /&#602;, &#605;&#720;/ del GA se mapean a **&#601;** (Schwa) y vocal larga **ee** seguida de la **r simple** del NE. | **&#601;r, eer** | Confirma la naturaleza **rótica** del NE y simplifica la pronunciación (**sin Vocales Róticas**). |
| **4. Corrección de la Vocal Larga /&#593;&#720;/** | El fonema de vocal larga /&#593;&#720;/ del GA se mapea a la vocal **o** del NE si, y solo si, la vocal **ortográfica** en la palabra original es una **o** (ej.: h**o**t a **hot**). Caso contrario se mapea a la vocal larga **aa** del NE (Tabla IV.2). | **o, aa** | **Regla RP de Excepción:** Recupera la distinción de la vocal corta **o** /&#594;/ del Inglés Británico usando la ortografía. |
| **5. Corrección del Schwa /&#601;/** | El fonema Schwa /&#601;/ se desambigua y se mapea a una de las 5 vocales del NE (a, e, i, o, u) utilizando la **tabla de asimilación ortográfica** (Tabla IV.2). | **a, e, i, o, u** | Elimina la ambigüedad del Schwa, manteniendo la **familiaridad visual** con la palabra original y su mejor pronunciación al reemplazarla por una de las vocales españolas. |

**IMPORTANTE:** El algoritmo de Normalización (5 Pasos) culmina con la ejecución del proceso de Neo-English Silabeo (NES) (Sección II.2), donde la palabra recibe su división silábica final y los acentos secundarios son eliminados inmediatamente después.

### 2. Transformación de Fonemas (/&#601;, &#593;&#720;/)

| Vocal ortográfica | Fonema /&#601;/ | Fonema /&#593;&#720;/ |
| :--- | :--- | :--- |
| a | a | aa |
| e | e | aa |
| i | a | aa |
| o | o | o |
| u | a | aa |
| ea | i | aa |
| otras:au, ei | vocal | aa |
| Sin dato | a | aa |

Tabla IV.2 (Bibliografía: Saudino, Thesis).

---

## V. Ejemplos Prácticos de Normalización

Esta sección valida el Algoritmo de la Regla Matriz (Sección IV) mostrando la forma final del Neo-English (NE) para el vocabulario y las estructuras gramaticales comunes.

### 1. Normalización Léxica (Palabra Base)

Los siguientes ejemplos ilustran la aplicación del algoritmo de 5 pasos (incluyendo las correcciones /&#593;&#720;/ y /&#601; Schwa) para generar la raíz léxica final del NE.

| Palabra Inglés | Fonema Clave (IPA/CMU) | Resultado NE | Regla Aplicada (Paso) |
| :--- | :--- | :--- | :--- |
| **green** | /&#105;&#720;/ (Vocal Larga) | **griin** | Consonantes (1), Vocales Largas (2). |
| **stop** | /&#593;&#720;/ (Corrección RP) | **stop** | Corrección /&#593;&#720;/ (4). |
| **never** | /&#601;/ (Schwa) | **né.ver** | Corrección /&#601;/ (5), NES (Sección II). |
| **think** | /&#952;/ (TH Sorda) | **thingk** | Consonantes (1): /&#952;/ : **th**. |
| **that** | /&#240;/ (TH Sonora) | **dhat** | Consonantes (1): /&#240;/ : **dh**. |
| **house** | /a&#650;/ (Diptongo) | **haus** | Diptongos Base (2). |
| **bird** | /&#605;&#720;/ (Rótica) | **beerd** | Róticas (3). |
| **water** | /&#601;/ (Schwa Final) | **wóo.ter** | Corrección /&#601;/ (5). |
| **walk** | /&#596;&#720;/ (Vocal Larga) | **wook** | Vocales Largas (2). |
| **letter** | /&#602;/ (Rótica) | **lé.ter** | Róticas (3), NES (Sección II). |
| **measure** | /&#658;/ (Fonema ZH) | **mé.zhar** | Consonantes (1), Corrección /&#601;/ (5). |
| **judge** | /&#100;&#865;&#658;/ (Fonema J) | **jaj** | Consonantes (1) |

### 2. Estructuras Gramaticales Simples

Las oraciones demuestran la Inflexión Cero (Sección III) y la Sintaxis Estricta (SVO).

* **Sustantivos Invariables (Pluralidad):**
    > **"Ai sii plas doog."** (Yo veo **perros** [plural indefinido]).
* **Verbos Invariables (Tiempos):**
    > **"Ai ran kwiklii nau."** (Yo corro rápido **ahora**).
    > **"Ai ran kwiklii yesterdei"** (Yo corrí rápido **ayer**).
* **Verbos Invariables (Ser/Estar):**
    > **"Plas beerd bii bluu."** (Los pájaros **son** azules).
* **Derivación (Adverbio/Adjetivo):**
    > **"Ai sii a sad man. Hii akt sadlii."** (Yo veo un hombre triste. Él actúa **tristemente**).

---

## VI. El Diccionario Oficial y las Convenciones de Uso

Para garantizar la máxima regularidad y la consistencia en el uso, el Neo-English establece el "Diccionario Maestro de Referencia" como la fuente única y obligatoria para la forma definitiva de cada palabra normalizada.

### 1. Convenciones del Diccionario Maestro

El diccionario debe proporcionar toda la información necesaria para usar cualquier palabra sin ambigüedades.

| Componente | Regla de Registro Obligatorio | Justificación del Rigor |
| :--- | :--- | :--- |
| **Raíz NEPA** | La forma normalizada de la raíz debe registrarse en la notación NEPA simple (ej.: *faadher*). | **Fidelidad Léxica:** La forma normalizada final tras el Algoritmo Matriz (Sección IV). |
| **División Silábica** | La división silábica debe ser marcada con un punto (** . **) (ej.: *faa.dher*, *ne.ver*). | **Determinismo:** El Neo-English Silabeo (Sección II) debe estar visible para eliminar ambigüedades. |
| **Acento Primario** | El acento principal debe ser marcado **siempre, excepto en monosílabos** (ej.: *fáa.dher*, *né.ver*). | **Rigor de Referencia:** Fija la posición del golpe de voz **únicamente en raíces polisilábicas** para eliminar ambigüedad. |
| **Clase Gramatical** | La clase gramatical primaria de la raíz (Sustantivo, Verbo, Adjetivo) debe registrarse. | **Resolución de Ambigüedad:** Ayuda a la desambiguación sintáctica (Sección III). |

**Nota:** Los siguientes ejemplos se presentan en su forma **rigurosa de Diccionario Maestro** (con acento y separación silábica obligatoria) para ilustrar el Algoritmo de Normalización. En la escritura de uso, el acento y el punto son opcionales (Ver Sección II.4).

---

## VII. Dependencia y Sometimiento Léxico (Máxima Fidelidad)

El Neo-English (NE) opera bajo el principio de que **su léxico es totalmente dependiente y derivado del inglés**. Por diseño, el NE **nunca crea** palabras nuevas (*ex nihilo*) que no tengan un origen explícito en el léxico inglés.

Los mecanismos de composición y derivación solo existen como reglas para **normalizar** formas complejas ya existentes en el inglés.

* **Principio de Fuente Única:** La formación de palabras derivadas (prefijos, sufijos, composición) **siempre se realiza y se basa primero en el inglés original** (ej.: *un- + happy = unhappy*).
* **Normalización Estricta Obligatoria:** La palabra compuesta o derivada resultante en inglés (**unhappy, simplicity, runner**) debe ser sometida **obligatoriamente** al **Algoritmo de Normalización NEPA (Sección IV)** para obtener la forma final en Neo-English.
* **Coherencia Funcional:** Los afijos más productivos del inglés (*un-, -nes, -li, -er, -tii*, etc.) mantienen una **función gramatical única y consistente** en el NE (ej.: *-li* siempre crea adverbios).

### 1. Composición de Palabras (Compounds)

El NE normaliza la yuxtaposición de raíces que existen en inglés, imponiendo reglas de claridad en la representación.

* **Cláusula de Transparencia:** Los compuestos deben formarse exclusivamente por la normalización de la yuxtaposición de dos o más **raíces léxicas independientes ya existentes en inglés** (ej.: **haus-gaarden** [house-garden]).
* **Marcador Visual:** La unión de las raíces en un compuesto puede indicarse mediante un **guion** (ej.: **haus-gaarden**), o unirse directamente (ej.: **hausgaarden**), siendo el guion el método preferido para la claridad.

---

## VIII. Variación y Adaptaciones Fonológicas (Robustez del Sistema)

Esta sección define las **tendencias de variación fonológica natural** que pueden surgir al adoptar el NE, demostrando la robustez del sistema escrito. El principio central es que **la variación en la PRONUNCIACIÓN del usuario no altera la forma escrita de la palabra base.**

El Neo-English (NE) **intenta actuar como una lengua base unificadora y estable**. Es totalmente tolerante a que los grupos de usuarios creen sus propias **variaciones simplificadas de pronunciación y escritura**, entendiendo que la ortografía de la raíz del NE simplemente establece el estándar común y obligatorio.

### 1. Simplificación Consonántica y Neutralización

El NE es robusto ante la neutralización de fonemas consonánticos por simplificación articulatoria.

| Fonema NE | Fenómeno Fonológico | Resultado de la Neutralización | Implicación en la Escritura |
| :--- | :--- | :--- | :--- |
| **D** /d/ | Asimilación a DH. | **DH** /&#240;/ | Ortografía **D** se mantiene. |
| **DH** /&#240;/ | Asimilación a D. | **D** /d/ | Ortografía **DH** se mantiene. |
| **H** /h/ | Asimilación a J. | **J** /x/ | Ortografía **H** se mantiene. |
| **J** /&#100;&#865;&#658;/ | Asimilación a J. | **J** /x/ | Ortografía **J** se mantiene. |
| **NG** /&#331;/ | Asimilación a N. | **N** /n/ | Ortografía **NG** se mantiene. |
| **R** /r/ | Asimilación a L. | **L** /l/ | Ortografía **R** se mantiene. |
| **TH** /&#952;/ | Asimilación a S. | **S** /s/ | Ortografía **TH** se mantiene. |
| **V** /v/ | Asimilación a B. | **B** /b/ | Ortografía **V** se mantiene. |
| **W** /w/ | Asimilación a U. | **U** /u/ | Ortografía **W** se mantiene. |
| **Y** /j/ | Asimilación a I. | **I** /i/ | Ortografía **Y** se mantiene. |
| **Z** /z/ | Asimilación a TH. | **TH** /&#952;/ | Ortografía **Z** se mantiene. |
| **Z** /z/ | Asimilación a S. | **S** /s/ | Ortografía **Z** se mantiene. |
| **ZH** /&#658;/ | Asimilación a TH. | **TH** /&#952;/ | Ortografía **ZH** se mantiene. |
| **ZH** /&#658;/ | Asimilación a SH. | **SH** /&#643;/ | Ortografía **ZH** se mantiene. |
| **ZH** /&#658;/ | Asimilación a S. | **S** /s/ | Ortografía **ZH** se mantiene. |

### 2. Variación Vocálica, Semivocálica y Rótica

Estos fenómenos demuestran la tolerancia del NE a las variaciones en la longitud vocálica, el deslizamiento (glide) y la estructura rótica.

| Fenómeno | Fenómeno Fonológico | Implicación en la Escritura |
| :--- | :--- | :--- |
| **O corta por A larga** | Pronunciación de la vocal corta **O** como **/&#593;&#720;/** vocal larga. | **No afecta la escritura.** La ortografía de la raíz (Sección IV) se mantiene. |
| **ER Monofonema** | La secuencia rótica **ER** (eR) se pronuncia como un solo fonema. | **No afecta la escritura.** La ortografía **eR** se mantiene; variación solo en la pronunciación. |
| **Glide-W** | Sonido de transición **/w/** entre vocales. | **No afecta la escritura.** Las vocales se mantienen intactas. |
| **Glide-Y** | Sonido de transición **/j/** entre vocales. | **No afecta la escritura.** Las vocales se mantienen intactas. |
| **R-Linking/Intrusive** | Adición de **R** en contextos de ligazón vocálica. | **No afecta la escritura.** Es un fenómeno de **sintaxis fónica** en el habla; no altera la raíz léxica. |
| **Yod-Dropping** | Pérdida de la semivocal **Y** (/j/) tras ciertas consonantes. | **No afecta la escritura.** Es un fenómeno fonológico interno a la palabra; la ortografía **Y** se mantiene. |

### 3. Variación Prosódica y de Límite Silábico

| Fenómeno | Fenómeno Fonológico | Implicación en la Escritura |
| :--- | :--- | :--- |
| **Acento Fijo** | Sustitución del acento flotante por un acento fijo (ej.: penúltima sílaba). | **No afecta la escritura.** El Diccionario (Sección VI) es la fuente de la acentuación. |
| **Ambisyllabicity** | La consonante es compartida simultáneamente por la coda de la sílaba anterior y el ataque de la sílaba siguiente (rompiendo el NES). | **No afecta la escritura.** La división silábica del NE (NES) es única y **obligatoria** en el diccionario. |
| **Reubicación de Acento Principal** | El acento principal se mueve a una sílaba diferente a la del estándar NE (ej.: *televisión* acentuado en la última 'o'). | **No afecta la escritura.** El Diccionario (Sección VI) es la fuente de la acentuación. |
| **Adición de Acento Secundario** | Se añade un acento secundario a una sílaba sin él (ej.: **té**le**vï**sion con acento secundario en la tercera sílaba). | **No afecta la escritura.** El Diccionario (Sección VI) es la fuente de la acentuación. |

### 4. Variación Silábica y Prótesis

| Fenómeno | Fenómeno Fonológico | Implicación en la Escritura |
| :--- | :--- | :--- |
| **Prótesis Vocálica (E-Onset)** | La adición de una vocal (usualmente **e**) al inicio de un clúster de Ataque que comienza con **S** (ej.: **st, str**). Este proceso **crea una nueva sílaba** (ej.: *es.tóp*) y **anula los clústeres CC/CCC** que inician con S en esa pronunciación. | **No afecta la escritura.** La raíz normalizada (ej.: **stop**) es **obligatoria** en el diccionario. La vocal extra es una **variación de pronunciación** permitida en el habla. |

### 5. Simplificación Morfológica

| Fenómeno | Fenómeno Morfológico | Implicación en la Escritura |
| :--- | :--- | :--- |
| **Uso de Apóstrofes** | Reducción de la escritura para indicar la contracción (ej.: *it'z* [It's]). | **Se permite en el habla informal.** Sin embargo, el **Diccionario (Sección VI)** solo registra la forma no contraída (ej.: *it iz* [it is]). |

### 6. Simplificación de Codas Consonánticas (Licencia del Usuario)

Para fomentar la fluidez y reducir la carga de memorización, se permite la simplificación de los grupos consonánticos finales (codas), ya que estos son una fuente de complejidad en el inglés original.

| Regla de Adaptación | Detalle | Consecuencia en el Sistema |
| :--- | :--- | :--- |
| **Simplificación Articulatoria** | Se permite a los usuarios **omitir la pronunciación** de una o más consonantes en codas complejas (ej.: *tekst* puede pronunciarse *teks*). | **NO altera la escritura de la raíz base.** Mantiene la fidelidad al léxico del Diccionario Maestro (Sección VI). |
| **Simplificación Ortográfica (Voluntaria)** | Los usuarios pueden **optar por no escribir** las consonantes de las codas que no se pronuncian (ej.: escribir *teks* en lugar de *tekst*). | **Crea variantes de escritura válidas.** Los usuarios pueden generar un conjunto de palabras más fluidas, manteniendo la referencia al Diccionario Maestro para su significado. |

---

## IX. Hoja de Ruta e Implementación

La implementación del Neo-English requiere el desarrollo de herramientas de ingeniería lingüística para garantizar la consistencia, la adopción y la expansión del léxico.

### 1. Fases de Implementación Técnica

La creación del NE se estructura en tres fases técnicas obligatorias:

* **Fase I: Creación del Diccionario Maestro.**
    * **Normalización del Léxico Base:** Aplicación del Algoritmo de la Regla Matriz (Sección IV) a los **3,000 términos más frecuentes del inglés** para crear el vocabulario esencial (el "Core Lexicon").
    * **Codificación de Reglas:** Creación de un *software* o *script* (ej.: Python) que automatice el Algoritmo de 5 Pasos y las correcciones /&#593;&#720;/ y /&#601;/ de **Tabla IV.2**.
    * **Registro Riguroso:** Cada entrada debe registrar su Clase Gramatical Primaria, División Silábica y **Acento Obligatorio** (**en el Diccionario Maestro** [Sección VI]).
* **Fase II: Desarrollo de Herramientas de Adopción.**
    * **Motor de Conversión:** Desarrollo de una aplicación que permita la conversión bidireccional inmediata (Inglés &#8644; Neo-English) para facilitar el aprendizaje inicial.
    * **Material Didáctico Base:** Creación de tutoriales enfocados en la **Sintaxis Estricta SVO** y la **Morfología Analítica**.
* **Fase III: Expansión y Estandarización.**
    * **Expansión del Léxico por Normalización:** Aplicación rigurosa de las reglas de Normalización (Sección IV) y los mecanismos de Derivación y Composición (Sección VII) a **más palabras del inglés** para expandir el léxico más allá de la base de 3,000 palabras.
    * **Estandarización:** Creación de un cuerpo de referencia que vigile la consistencia del NE.

### 2. Filosofía de Adopción Global (Superioridad del Diseño)

El NE se posiciona como una **Lengua Auxiliar Universal** superior gracias a su diseño híbrido, que supera las barreras de las lenguas planificadas tradicionales.

* **Familiaridad Léxica:** La base de vocabulario del inglés (el idioma más globalizado) reduce significativamente la curva de aprendizaje inicial.
* **Simplicidad Fonológica:** La adopción del sistema de 5 vocales puras (Español) elimina las barreras de pronunciación para la mayoría de los hablantes del mundo.
* **Simplicidad Gramatical:** La **Inflexión Cero** (Chino/Mandarín) ofrece la máxima simplicidad morfológica sin necesidad de memorizar tablas de conjugación o declinaciones.

---

## BIBLIOGRAFÍA

&#8226; CMU : The CMU Pronouncing Dictionary (&nbsp;<a href="https://en.wikipedia.org/wiki/CMU_Pronouncing_Dictionary">Link</a>&nbsp;)

&#8226; MOP : Maximal Onset Principle (&nbsp;<a href="https://en.wikipedia.org/wiki/English_phonology">Link</a>&nbsp;)

&#8226; WSP : Weak Syllable Principle (&nbsp;<a href="https://en.wikipedia.org/wiki/Syllable">Link</a>&nbsp;)

&#8226; URL : Phonemic Orthography (&nbsp;<a href="https://en.wikipedia.org/wiki/Phonemic_orthography">Link</a>&nbsp;)

&#8226; URL : Cambridge Dictionary (&nbsp;<a href="https://dictionary.cambridge.org/dictionary/english/run">Link</a>&nbsp;)

&#8226; URL : Alphabetic Principle (&nbsp;<a href="https://en.wikipedia.org/wiki/Alphabetic_principle">Link</a>&nbsp;)

&#8226; Gemini Google's AI Assistant (&nbsp;<a href="https://en.wikipedia.org/wiki/Gemini_(chatbot)">Link</a>&nbsp;)

&#8226; Universal Auxiliary Language (&nbsp;<a href="https://en.wikipedia.org/wiki/International_auxiliary_language">Link</a>&nbsp;)

&#8226; Ezequiel Pablo Saudino, Thesis (&nbsp;<a href="https://bibliotecadigital.exactas.uba.ar/collection/seminario/document/seminario_nCOM000721_Saudino">Link</a>&nbsp;)

## INSTALLATION

```bash
npm i neo-english
```

## USAGE

```js
let text = 'The father and son go to the park to see plus bird tomorrow';
let transcriber = require('neo-english');
let NEPAphonemetext = transcriber.Transcribe(text,1,1,0,0,0);
let ZEPAphonemetext = transcriber.Transcribe(text,2,1,0,0,0);
let TEPAphonemetext = transcriber.Transcribe(text,3,1,0,0,1);

console.log(NEPAphonemetext);
console.log(ZEPAphonemetext);
console.log(TEPAphonemetext);

// dhe  faa.dher  and  san  gou  tuu  dhe  paark  tuu  sii  plas  beerd  to.moo.rou
// dhe  fā.dher  and  san  gou  tū  dhe  pārk  tū  sī  plas  bērd  to.mō.rou
// de  fā.der  and  san  gou  tū  de  pārk  tū  sī  plas  bērd  to.mō.rou
```

## TEST

```bash
npm test
```

## DEMO

[HOME](https://armotus.github.io/neo-english)

## LICENSE

[ABC](abc/abc.md)
