# Introduksjon til Sanity

Dette er workshoppen for deg som er helt ny med Sanity.
Her vil du lære å bygge skjemaer og litt om de forskjellige innholdstypene, og hvordan man kan bruke de for å bygge opp forskjellige dokumenter.

På slutten av workshoppen sitter du igjen med din helt egne portfolio-side med innebygget CMS, som er klar til å prodsettes! 🚀

## Om workshoppen

### 🧑‍🎓 Forkunnskaper

For å komme i gang med utvikling i Sanity, er det greit å ha litt kjennskap til JavaScript eller TypeScript. Det er likevel helt mulig å få til workshoppen uten å være særlig godt kjent i språkene. ✨

### Teknologier

Selve redaktørverktøyet er [Sanity](https://www.sanity.io/), som er tilgjengelig som et bibliotek vi bruker inne i frontend-appen.

Frontenden til portfolioen-appen er skrevet i [React ⚛️](https://react.dev/) og [NextJs 🔼](https://nextjs.org/) med `app`-folder.
Der brukes [NextUI 🧱](https://nextui.org/) til noen av komponentene, og [tailwindcss 🎨](https://tailwindcss.com/) til stilsetting.

For enkel kobling mellom Sanity og Next brukes [Sanity.io toolkit for Next.js 🔧](https://github.com/sanity-io/next-sanity)

## 🔤 Kom i gang!

### 📦 Kodekloning og avhengigheter

Før du kan begynne med selve workshoppen må vi laste ned prosjektet og installere litt avhengigheter.

1. Du må å ha [`node`](https://nodejs.org/) installert.
2. `git clone` prosjektet ned til din maskin
3. Gå inn i prosjekt-mappen og innstallerer avhengighetene med `npm install`

### 👤 Lage seg konto og prosjekt på Sanity

1. Først av alt må du gå på https://www.sanity.io/login/sign-up og lage deg en bruker. Det enkleste er kanskje å bruke `github`-brukeren din
2. Her blir det litt hårete for å få satt opp prosjektet til rett bruker. Så her er det greit å ha tunga rett i munnen 👅.

- Kjør `npm -y create sanity@latest` i prosjekt-mappa
- Velg påloggingstypen du bruke for å registrere deg i steg 1, vent til den hopper inn i nettleseren og logger deg inn.
- Gi prosjektet ditt et navn
- Svar på følgende spørsmål:

```plain
Use the default dataset configuration?
Yes

Would you like to add configuration files for a Sanity project in this Next.js folder?
Yes

Do you want to use TypeScript?
Yes

Would you like an embedded Sanity Studio?
Yes

Would you like to use the Next.js app directory for routes?
Yes

What route do you want to use for the Studio?
/studio

File /app/studio/[[...index]]/page.tsx already exists. Do you want to overwrite it?
No

File /sanity.config.ts already exists. Do you want to overwrite it?
No

File /sanity.cli.ts already exists. Do you want to overwrite it?
No

Select project template to use
Clean project with no predefined schemas

File /sanity/schema.ts already exists. Do you want to overwrite it?
No

File /sanity/env.ts already exists. Do you want to overwrite it?
No

File /sanity/lib/client.ts already exists. Do you want to overwrite it?
No

File /sanity/lib/image.ts already exists. Do you want to overwrite it?
No

Would you like to add the project ID and dataset to your .env file?
Yes
```

3. Og da skal du være klar til å starte appen med kommandoen `npm run dev`.

- Appen starter opp på http://localhost:3000
- Naviger deg fra forsiden inn til _studioet_.
- Der vil du få forespørsel om å legge til CORS origin i Sanity prosjektet. Velg **Continue**
- Du vil bli flyttet til Sanity sine sider. Velg **Add CORS origin**
- Da, er du ferdig og klar! 👏✨

## Oppgavene

### Emojis 😺

Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- 🏆 Oppgave: Her er hva du skal gjøre
- 💡 Tips: Litt ekstra info som kan være greit å være for å løse en oppgave
- ✅ Testing av løsningen: Hvordan du kan sjekke at det du har gjør blir riktig
- 🚨 Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du kan løse oppgaven

### 🧑‍💻 1. Legge til en forfatter!

Vi starter litt enkelt. Vi trenger å lage et dokument for en forfatter, for å så legge til litt data om oss selv.

For å lage [dokumenter](https://www.sanity.io/docs/document-type), må vi definere en _schema_ for hvordan dataen ser ut.
I Sanity har alle schemas noen spesifikke felter:

- `name` som gir navn til et felt.
- `type` som spesifiserer hvilke type skjema det skal være.
- `fields` som er hvilke felter skjemaet skal inneholde.

For å _registrere_ skjemaer må du importere det og legge det til i lista over forskjellige skjema-typer i [`/sanity/schema.ts`](/sanity/schema.ts)

🏆 I filen [`/sanity/schemas/author.ts`](/sanity/schemas/author.ts), kan du lage et dokument-type `schema` for `author`, som inneholder et felt `name` av typen [`string`](https://www.sanity.io/docs/string-type).

✅ For å se om det har blitt riktig kan du åpne Sanity studioet på [http://localhost:3000/studio/](http://localhost:3000/studio/). Det skal automatisk ha blitt lagt til en "mappe" for forfattere, hvor man kan trykke på 📝-ikonet for å lage et nytt dokument.
Dette bør inneholde et enkelt input felt for å fylle inn navn på forfatteren.

> 💡 Vi får mye hjelp av _TypeScript_ til å definere skjemaer.<br> _Skjema_-definisjoner kan types med `SchemaTypeDefinition` så får man feilmelding hvis man prøver å legge til noen attributter som ikke er gyldige!

> 💡 Du kan endre tittel og legge til en beskrivelse på felter med å legge til `title` og `description` på felter.

> 💡 **NB**: Selv om du kan lage flere forfatter-dokumenter, er frontenden konfigurert til å kun bruke det som var laget først hvis det er flere 🤠

<details>

<summary> 🚨 Løsningforslag </summary>

I filen `sanity/schemas/author.ts` må vi fylle inn de grunnleggende feltene for dokument-skjemaet vårt i `author`-objektet. Fordi dette skal være et enkeltstående dokument vi kan hente data fra, så må det ha typen `document`.

Hvis man ønsker kan man gi det en tittel.

Alle dokumenter har en liste `fields` med hvilke felter dokumentet skal inneholde. Her må vi legge til en liste som inneholder et objekt som definerer `name`-feltet.

```ts
export const author: SchemaTypeDefinition = {
  name: "author",
  type: "document",
  title: "Forfatter",
  fields: [{ name: "name", title: "Navn", type: "string" }],
};
```

Alle skjema-typer må registreres slik at Sanity-studio vet at de eksisterer. Dette kan gjøres enkelt i `sanity/schema.ts`, ved å importere `author` fra underliggende mappen, og legge det til i arrayet med skjemaer.

```ts
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author],
};
```

</details>

---

### 🤹 2. Flere felter og flere felttyper!

Det finnes flere måter å vise felter på. `string` gir et helt standard lite `input`-felt å skrive i. Et alternativ for litt lengre tekster vil være å bruke typen [`text`](https://www.sanity.io/docs/text-type) som gir et `textarea`-felt med muligheten til å justere størrelsen på input-feltet.

🏆 Legg til et felt `bio` av typen `text` på forfatter-objektet.

🏆 Juster samtidig `bio` feltet slik at det bare er 3 rader stort.

✅ Hvis alt blir riktig kan du se at det dukker opp et nytt felt på forfatter-dokumentet i studioet.

<details>
<summary> 🚨 Løsningforslag </summary>

Her kan vi enkelt og greit legge til et nytt felt, men denne gangen med typen `text`. Man kan også legge på attributtet `rows` for å styre hvor mange rader feltet har når man åpner dokumentet.

i `sanity/schemas/author.ts`

```ts
export const author: SchemaTypeDefinition = {
  name: "author",
  type: "document",
  title: "Forfatter",
  fields: [
    { name: "name", title: "Navn", type: "string" },
    { name: "bio", title: "Biografi", type: "text", rows: 3 },
  ],
};
```

</details>

---

### 🚨 3. Valideringer

Det er fort gjort å gjøre feil!
Derfor er det greit å legge på litt enkle valideringer som forhindrer oss å publisere feilaktig data.

En av de enkleste valideringene er å sette felt som _påkrevd_, men det finnes mange andre typer [valideringsregler](https://www.sanity.io/docs/validation#4dc8b38bc411) man også kan bruke rett ut av boksen. Det er også mulig å lage egne regler.

🏆 Lag en regel som gjør feltet `name` påkrevd

🏆 Lag en regel som gjør at feltet `bio` er både påkrevet og _skal_ være mellom 30 og 160 tegn.

✅ Gi studioet en liten refresh ♻️. Hvis alt går som det skal vil du få en feilmelding i det du tømmer en av feltene. Feilmeldingene vil forhindre at dokumentet publiseres.
Hvis det fungerer som det skal, er det bare å fylle ut feltene og _publisere_ dokumentet. 🚀

Nå skal det begynne å dukke opp noe på [forsiden](http://localhost:3000) av appen vår.

💡 Det er også nyttig å legge til description på felter og av og til hjelpetekst i valideringer.

<details>
<summary> 🚨 Løsningforslag </summary>

Her må vi legge på `validation` på hvert av feltene våre. Denne tar inn en funksjon som tar i mot et `rule`-objekt man kan legge til valideringer på.

Her skal vi legge til henholdsvis `(rule) => rule.required()` for påkrevd og `min(30)` og `max(160)` for å styre antall tegn.

I `sanity/schemas/author.ts`

```ts
export const author: SchemaTypeDefinition = {
  name: "author",
  type: "document",
  title: "Forfatter",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "bio",
      title: "Biografi",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(30).max(160),
    },
  ],
};
```

</details>

---

### 🪺 4. Nøstede felter

Det er også mulig å nøste felter sammen i [_objekter_](https://www.sanity.io/docs/object-type). Det er fint å benytte seg av når man begynner å få mange felter og det gir mening med en dypere struktur.

Vi skal nå utvide forsiden vår med litt lenker til forskjellige sosiale medier.

🏆 Lag et felt `socials` av typen `object` med underfelter `github`, `twitter` og `linkedin` som er lenker til forskjellige profiler.

💡 Hvis man skal bruke URL'er finnes det en egen felt-type `url` som automatisk validerer at det er i riktig format.

💡 Felter av typen `object` kan ta et felt `options` med `collapsible` og `collapsed` for å enkelt "lukke" objektet.

✅ Fyll ut feltene og publiser dokumentet på nytt. Forsiden skal nå ha lenker til de forskjellige feltene. Du trenger ikke fylle ut alle hvis du ikke bruker alle tjenestene. Feltene er tross alt ikke _påkrevd_.

<details>
<summary> 🚨 Løsningforslag </summary>

Her må vi først legge til et felt av typen `object`. Deretter kan man legge på ytteligere `fields` inne i objektet.

Ved å bruke typen `url` på disse nøsta feltene, vil vi få validering ut av boksen.

Som en bonus kan man legge på optionene `collapsible` og `collapsed` for å gjøre feltet ekspanderbart, og lukket når man åpner dokumentet.
Det er kanskje ikke nødvendig her, men på store dokumenter, er det ganske greit å holde det litt ryddig.

I `sanity/schemas/author.ts`

```ts
export const author: SchemaTypeDefinition = {
  name: "author",
  type: "document",
  title: "Forfatter",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "bio",
      title: "Biografi",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(30).max(160),
    },
    {
      name: "socials",
      title: "Sosiale medier",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "github",
          type: "url",
        },
        {
          name: "linkedin",
          type: "url",
        },
        {
          name: "twitter",
          type: "url",
        },
      ],
    },
  ],
};
```

</details>

---

### 🖼️ 5. Bilder

En av de aller beste måtene å presentere innhold på med er med bilder, og nå er det på tide å lage muligheten for å legge til et bilde av forfatteren.

Sanity har en egen type for [bilder](https://www.sanity.io/docs/image-type), og har et kraftig [bildeverktøy](https://www.sanity.io/docs/image-url) for å generere lenker til forskjellige størrelser og varianter av et bilde som er lastet opp.

🏆 Legg inn et felt `image` for av bilde på forfatteren.

🏆 Lag støtte for å kunne sette en `hotspot` på bildet

✅ Legg inn et fint bilde. Gå over til [forsiden](http://localhost:3000) igjen og se at det dukker opp istedenfor placeholder-bildet.
Hvis bildet er litt rart croppa, kan du justere det med croppe-verktøyet oppe i høyre hjørnet av bilde-feltet. ✂️

<details>
<summary> 🚨 Løsningforslag </summary>

Her legger vi til et felt av typen `image`. På det kan man legge til en `option` for `hotspot` for å gjøre det mulig å legge til croppe-muligheter.

I `sanity/schemas/author.ts`

```ts
export const author: SchemaTypeDefinition = {
  name: "author",
  type: "document",
  title: "Forfatter",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "bio",
      title: "Biografi",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(30).max(160),
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socials",
      title: "Sosiale medier",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "github",
          type: "url",
        },
        {
          name: "linkedin",
          type: "url",
        },
        {
          name: "twitter",
          type: "url",
        },
      ],
    },
  ],
};
```

</details>

---

### 💼 6. Prosjekter

Nok om oss selv 💅. Hele poenget med en portfolio er jo å vise frem litt prosjekter man har gjort! Nå er det på tide at vi går i gang med å lage dokument-skjemaet for prosjekter.

🏆 Lag dokumenttypen for prosjekter i [/sanity/schemas/project.ts](/sanity/schemas/project.ts).

- Et prosjektnavn som heter `projectName`
- En [`slug` 🐌](https://www.sanity.io/docs/slug-type) som heter `slug`
  - En slug er den siste delen av en `URL`. Her kunne vi ha brukt den innebygde skjulte feltet `_id` som ligger på dokumentet. Men det er mye mer [SEO](https://developers.google.com/search/docs)-vennlig med en lesbar og relevant `URL`.
- En kort beskrivelse som heter `shortDescription`
- En [`dato`](https://www.sanity.io/docs/date-type) som heter `date`
- Et bilde som heter `image`

🏆 Gjør alle feltene påkrevd

🏆 Legg til en knapp for automatisk slug-generering som bruker `projectName` feltet

🏆 Gi feltene noen bedre visningsnavn i studioet 🏷️

💡 [Dokumentasjonen](https://www.sanity.io/docs/schema-types) til skjema-typene forteller mye spennende om hvilke `options` man kan legge på de forskjellige type feltene.

💡 [Unsplash](https://unsplash.com/) har mange gode placeholder-bilder hvis man ikke har bilder til prosjektene sine.

✅ Fyll inn feltene og se om det dukker opp et prosjekt på [forsiden](http://localhost:3000). Se at det går an å trykke seg inn der!

<details>
<summary> 🚨 Løsningforslag </summary>

Her går vi rett å slett i gang med å legge til feltene som trengs.

`slug` typen har en `option` som heter `source` som vil legge til muligheten for å generere en slug basert på `sourcen`

Feltene må inneholde en `title` for å få bedre visningsnavn.

Her må man også huske på å legge til den nye skjema-typen vår i `sanity/schema.ts`

I `sanity/schemas/project.ts`

```ts
export const project: SchemaTypeDefinition = {
  name: "project",
  title: "Prosjekter",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Prosjektnavn",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "shortDescription",
      title: "En kort beskrivelse av prosjektet",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "projectName" },
      validation: (rule) => rule.required(),
    },
    {
      name: "date",
      title: "Dato",
      type: "date",
    },
    {
      name: "image",
      title: "Prosjektbilde",
      type: "image",
      validation: (rule) => rule.required(),
    },
  ],
};
```

I `sanity/schema.ts`

```ts
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, project],
};
```

</details>

---

### 🏷️ 7. Arrays og tags!

Vi ønsker å kunne tagge prosjektene våre med relevant nøkkelord. Siden vi har flere av disse, så passer det seg å ta i bruk [`array`](https://www.sanity.io/docs/array-type)-typen. Man kan putte hva som helst i et `array`, men vi skal gå for noen enkle nøkkelord.

🏆 Legg til et felt `keywords` som er en liste av `string`

🏆 Endre _layout_ til `tags` sånn at det blir enkelt å legge til tags.

<details>
<summary> 🚨 Løsningforslag </summary>

I `sanity/schemas/project.ts`

```ts
export const project: SchemaTypeDefinition = {
  name: "project",
  title: "Prosjekter",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Prosjektnavn",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "shortDescription",
      title: "En kort beskrivelse av prosjektet",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "projectName" },
      validation: (rule) => rule.required(),
    },
    {
      name: "date",
      title: "Dato",
      type: "date",
    },
    {
      name: "keywords",
      title: "Nøkkelord",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "image",
      title: "Prosjektbilde",
      type: "image",
      validation: (rule) => rule.required(),
    },
  ],
};
```

</details>

---

### 8. 💰 Riktekst innhold!

Vanlige `string`-baserte felter kan være litt begrensende hvis man skal produsere mye innhold til en side. En av superkreftene til Sanity er [block content](https://www.sanity.io/docs/portable-text-editor-configuration) som gir en kraftig og tilpassningsvennlig [WYSIWYG-editor](https://en.wikipedia.org/wiki/WYSIWYG).

Dette gjør det mulig å berike tekst med _en eller annen form_ for markup. Som for eksempel å gjøre en tekst **bold** eller _italic_. Det gjør det også mulig å markere tekst som for eksempel headere (`<h1>`).

🏆 Legg til et felt `content` som er en riktekst editor.

✅ Prøv å fylle ut litt innhold om et prosjekt og publiser det. Innholdet vil dukke opp når du trykker inn på prosjektet.

<details>
<summary> 🚨 Løsningforslag </summary>

I sanity har rik-tekst innhold typen `block`. Hvis man lager et `array` av typen `block` vil Sanity automatisk vise dette som et felt med riktekst.

I `sanity/schemas/project.ts`

```ts
export const project: SchemaTypeDefinition = {
  name: "project",
  title: "Prosjekter",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Prosjektnavn",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "shortDescription",
      title: "En kort beskrivelse av prosjektet",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "projectName" },
      validation: (rule) => rule.required(),
    },
    {
      name: "date",
      title: "Dato",
      type: "date",
    },
    {
      name: "keywords",
      title: "Nøkkelord",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "image",
      title: "Prosjektbilde",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
```

</details>

---

### 🦸 9. Utvide støtten i riktekst-editoren

Sanity er _veldig_ konfigurerbart. Man kan både avgrense og utvide støtte for forskjellig markup i riktekst-editoren.
Men i vår editor kan ikke _bare_ være tekst i tekst-editoren 🤡. Vi ønsker nemlig å kunne bryte opp wall-of-text beskrivelsen av prosjektene med litt fine bilder.

🏆 Utvid rik-tekst editoren vår med støtte for en type `image`

💡 Riktekst er et `array` av `block`. Hva skjer om vi legger til andre ting også her?

✅ I riktekst-editoren vil det nå dukke opp en liten knapp i høyre hjørne for å legge til et bilde. Legg til et bilde, publiser, og sjekk at det dukker opp rett på prosjekt-siden.

<details>
<summary> 🚨 Løsningforslag </summary>

Vi utvider hvilke typer som skal være tilgjengelige i `array`et og legger på et `image`

I `sanity/schemas/project.ts`

```ts
export const project: SchemaTypeDefinition = {
  name: "project",
  title: "Prosjekter",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Prosjektnavn",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "shortDescription",
      title: "En kort beskrivelse av prosjektet",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "projectName" },
      validation: (rule) => rule.required(),
    },
    {
      name: "date",
      title: "Dato",
      type: "date",
    },
    {
      name: "keywords",
      title: "Nøkkelord",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "image",
      title: "Prosjektbilde",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};
```

</details>

---

### ❤️ 10. Legge til favoritter

Vi ønsker gjerne muligheten til å vise frem akkurat de prosjektene vi vil på forsiden av porteføljen vår.
Dette løser vi enkelt og greit med bruk av [_referanser_](https://www.sanity.io/docs/reference-type) i Sanity.

#### 👉 Lage feltet

🏆 Legg til støtte for en _liste_ med favorittprosjekter for forfatteren

<details>
<summary> 🚨 Løsningforslag </summary>

Vi legger på et felt av typen `array` med typen `reference` på til `project` på Author-skjemaet

I `sanity/schemas/author.ts`

```ts
export const author: SchemaTypeDefinition = {
  name: "author",
  type: "document",
  title: "Forfatter",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "bio",
      title: "Biografi",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(30).max(160),
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socials",
      title: "Sosiale medier",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "github",
          type: "url",
        },
        {
          name: "linkedin",
          type: "url",
        },
        {
          name: "twitter",
          type: "url",
        },
      ],
    },
    {
      name: "highlightedProjects",
      title: "Favorittprosjekter",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    },
  ],
};
```

</details>

#### ⁉️ Hente ut og ta i bruk feltet

Vi ønsker å oppdatere frontend-koden til å hente ut og ta i bruk favorittprosjekter istedenfor _alle_ prosjekter.

Til nå har datahentingen vært på plass for oss. Datahenting i Sanity skjer i hovedsak gjennom spørringer i `GROQ` som sendes enten gjennom et API, eller en `Sanity-client`.

For å hente ut prosjektene vi ønsker, må vi bryne oss på litt spørringer selv.

https://www.sanity.io/docs/how-queries-work

🏆 Lag en funksjon i `utils/projects.ts` som henter ut favoritt-prosjektene til en author, og ta den i bruk i `app/components/projects/ProjectSection`

💡 Det ligger en ordentlig god introduksjon til GROQ og spørringer [_her_](https://www.sanity.io/docs/how-queries-work)

💡 I Studioet er det en fane som heter [_Vision_](http://localhost:3000/studio/vision) der kan man prøve ut spørringer mot datasettet sitt.

💡 For enkelhets skyld kan du bruke \*[\_type == 'author'][0] for å hente ut author-objektet, siden vi bare har ett.

✅ Hvis du har flere prosjekter publisert, kan du velge ut et enkelt prosjekt som favorittprosjekt og se at listen på forsiden er andeledes en den som ligger på [prosjekt-utlistningen](http://localhost:3000/prosjekter).

<details>
<summary> 🚨 Løsningforslag </summary>

Vi legger på et felt av typen `array` med typen `reference` på til `project` på Author-skjemaet

I `utils/projects.ts` legger vi til funksjonen `getHighlightedProjects`.

Her lager vi en spørring som henter ut `author`, men lager en prosjeksjon som løser ut en _liste_ med referanser.
For enkelhets skyld kan vi legge til `.highlightedProjects` på slutten, for å bare hente ut `highlightedProjects` og ikke et `author`-objekt _med_ `highlightedProjects` som felt i seg 😵‍💫

```ts
export const getHighlightedProjects = async () => {
  const query = groq`*[_type == 'author'][0]{
    highlightedProjects[]->
  }.highlightedProjects`;

  return client.fetch<Project[]>(query, {
    next: { revalidate: 0 },
  });
};
```

og i `app/components/projects/ProjectSection.tsx` erstatter du linjen

```tsx
const projects = await getProjects();
```

med

```tsx
const projects = await getHighlightedProjects();
```

</details>

---

### 🔧 11. Tilpasse utseende

I Sanity er det ganske enkelt å tilpasse studioet. Det gir mange muligheter til å tilpasse verktøyet til redaktørene, men også muligheten til å bygge støtte for det aller meste.

En av de vanligste endringene er å endre på komponentene som brukes for forskjellige visninger og input av feltene.
Du kan lese litt om å utvide `input`-felter [her](https://www.sanity.io/docs/form-components) og om hele components-APIet [her](https://www.sanity.io/docs/component-api).

Vi skal utvide Slug-feltet så "redaktøren" får se hele urlen hvor artikkelen ligger.

🏆 Utvid Slug-feltet med en tekst som viser hele URL-en til et prosjekt.

💡 Sanity har et [designsystem](https://www.sanity.io/ui) som man kan bruke for å bygge i samme stil som resten av Studioet.

💡 Du kan hardkode starten av URL'en til prosjekter til `https://localhost:3000/prosjekter/<SLUG>`

✅ Hvis alt går bra skal du se en en tekststreng med URL-en til prosjekter ved `Slug` feltet ditt på prosjekter.

<details>
<summary> 🚨 Løsningforslag </summary>

Vi benytter oss av `props.renderDefault` for å enkelt _utvide_ slug-feltet og ikke tulle for mye med logikken i det.

I filen `sanity/components/SlugInputWithUrl.tsx`

```tsx
import { Stack, Text } from "@sanity/ui";

export const SlugInputWithUrl: FC<SlugInputProps> = (props) => {
  return (
    <Stack space={2}>
      {props.renderDefault(props)}
      <Text size={2} muted>
        https://localhost:3000/prosjekter/{props.value?.current}
      </Text>
    </Stack>
  );
};
```

og registrerer vår custom input komponent der den skal brukes i `sanity/schemas/project.ts`

```tsx
    {
      name: "slug",
      type: "slug",
      options: { source: "projectName" },
      validation: (rule) => rule.required(),
      components: {
        input: SlugInputWithUrl,
      },
    },
```

og i `app/components/projects/ProjectSection.tsx` erstatter du linjen

```tsx
const projects = await getProjects();
```

med

```tsx
const projects = await getHighlightedProjects();
```

## </details>

### 🎉 Ferdig!

Gratulerer! Da er du ferdig med portfolio-nettsiden 🤩.

Hvis du vil så kan du prøve å bryne deg på noen av ekstraoppgavene ⭐️

## ⭐️ Ekstraoppgaver

### 🚀 Ship-it!

Du kan rimelig enkelt putte appen din i produksjon!
[Vercel](https://vercel.com/) er en rask og enkel måte å deploye NextJs-apper på!
Det du trenger å gjøre er å dytte koden til prosjektet ditt opp i et eget Github-repository og så koble Vercel på det.

Du må huske å konfigurere `env`-variablene for Sanity-tilgang på Vercel, samt å åpne opp for en ny CORS-policy hos [Sanity](https://www.sanity.io/manage/personal/project/mny5lewc/api)

Det kan også være nyttig å justere på `revalidate`-intervallet som er satt i funksjonene for å hente data i `/utils/author.ts` og `/utils/projects.ts`. Sånn som det er satt opp nå vil den hente dataen for hver eneste besøkende på siden, men hvis det ikke endrer seg så ofte kan man godt skru denne opp. Du kan lese mer om data-henting, caching og revalidering på [NextJs-dokumentasjonen](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)

### 📝 Fylle ut noen prosjekter

Det nytter ikke å ha en flunkende ny portfolio-app uten innhold! Bruk litt tid på å fylle ut noen av prosjektene du har gjort tidligere.

### 🎨 Pynte litt på frontenden

Det er helt supert om du gjør frontenden din egen!
Frontenden bruker [NextUI](https://nextui.org/) og [tailwindcss](https://tailwindcss.com/) som gir både komponenter og en hel haug av stiler ut av boksen. Det er også veldig enkelt å justere ting hvis det er noe du ikke er fornøyd med.

#### ❓ Kanskje det mangler noen felter?

Det går fint an å utvide med noen ekstra felter hvis man ønsker det. _Spørringene_ for å hente ut data ligger i
`/utils/`-mappa. De henter nå ut _alle_ feltene som legges inn på dokumenter.

Hvis man vil se litt på mer avanserte måter å hente ut data, kan man sjekke ut query-språket til Sanity, som er [`groq`](https://www.sanity.io/docs/how-queries-work).
