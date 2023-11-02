# Vefforritun 1, 2023: Verkefni 8, JS #2

## Markmið

- Skipta JavaScript forriti upp í einingar.
- Forrita á móti DOM.
- Útbúa forrit með stöðu sem uppfærir viðmót.

## Grunnur

Gefinn er grunnur að verkefni:

- `package.json` með:
  - skilgreindum dependency-ium: `browser-sync`, `concurrently` og `cpy-cli`.
  - NPM scripts sem keyra upp „dev“ og „build“.
- `package-lock.json` skrá sem skilgreinir nákvæmlega hvaða dependency eru notuð _fyrir_ dependency-in okkar
- `index.html` með leiðbeiningum og tengingu við `main.js` og `styles.css`.
- `main.js` og tengd JavaScript skjöl sem mynda einingar og útfæra grunn að virkni.
- `.gitignore` sem passar upp á að `node_modules` mappan sé ekki geymd í git.

Skjölun á föllum og breytum notar [`jsdoc`](https://jsdoc.app/).

### NPM

Til að byrja að vinna verkefnið þarf að sækja það frá GitHub og keyra NPM:

```bash
# Inni í möppu sem á að geyma verkefnið
git clone https://github.com/vefforritun/vef1-2023-v8.git
# eða
git clone git@github.com:vefforritun/vef1-2023-v8.git

# Förum inn í möppu
cd vef1-2023-v8

# Sækjum öll dependency með NPM
npm install

# Keyrum NPM script fyrir development
npm run dev
```

## Virkni

Áframhald af „búðinni“ úr verkefni 7, núna með viðmóti.

Nota skal gefið HTML og CSS og útfæra rest af JavaScript virkni:

- Þegar `Bæta við` takki er notaður á að bæta gefnum fjölda við körfu.
- Þegar ekkert er í körfu á að standa `Ekkert í körfu.`.
- Þegar eitthvað er í körfu á að birta þær vörur og nota HTML strúktúr sem er í athugasemd í `index.html`.
- Þegar eitthvað er í körfu skal birta form til að ganga frá kaupum með reit fyrir `Nafn` og `Heimilsfang`.
- Þegar búið er að fylla út í `Ganga frá kaupum` er kvittun birt með möguleika á hlekk til að versla meira: það birtir síðuna eins og hún byrjar fyrst.

## Netlify

Skila skal verkefninu keyrandi á Netlify. Gefið er `build` script í `package.json` og setja upp build ferli þ.a. mappa sem verður til í `build` ferli sé notuð fyrir vef. Þetta verður til þess að þau gögn sem eru i möppu og eru ekki fyrir almenning (t.d. `package.json`) eru ekki birt, heldur aðeins:

- `index.html`
- `main.js` og skrár í `./lib`

## Mat

- 10% Verkefni sett upp GitHub og á Netlify og `build` scripta notuð.
- 20% Hægt að bæta vöru í körfu.
- 20% Hægt að eyða vöru úr körfu.
- 30% Karfa uppfærist með réttri töflu og samtölu.
- 20% Hægt að ganga frá kaupum og byrja kaup aftur.

## Sett fyrir

Verkefni sett fyrir mánudaginn 16. október 2023.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 26. október 2023.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `ahp9`
  - `dawidniescier`
  - `osk`
  - `polarparsnip`
  - `sturla-freyr`

Skila má eins oft og þið viljið þar til skilafrestur rennur út.

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ef stórt mállíkan (LLM, „gervigreind“, t.d. ChatGTP) er notað til að skrifa part af lausn skal taka það fram. [Sjá nánar á upplýsingasíða um gervigreind hjá HÍ](https://gervigreind.hi.is/).

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1
