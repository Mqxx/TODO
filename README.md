# TODO
Projets that I want to create.

- [ ] **BinEdit**: Binary text file editor.
- [ ] **String Math Eval**: Evaluate a string calculation
- [ ] **Bitmap Library**: Bitmap image Library in typescript
- [ ] **Discord.ts**: Discord typescript library
- [ ] **Console Window Library**: Library to create windows in the console
- [ ] **BEM Notation**: [BEM](https://getbem.com/) notation rework
- [ ] **GitHub Elements**: GitHub HTML elements library
- [ ] **ASCII Image Generator**: Image generator to generate ASCII art
- [ ] **Cloudflare API**: A cloudflare API wrapper in javaScript/TypeScript
- [ ] **Serial Library**: A serial library for Deno for typescript
- [x] **GitHub-Markdown**: Update GitHub Markdown guide for hover text (tooltip) -> `&#013; = \n`, (visible)[*](README.md## 'Visible Link'), (invisible)[*](## 'Invisible Link')
- [ ] **Knowlege-Base**: Create short guides on `regexp.replace()`, `WebSockets()`, etc.
- [ ] **Tellraw-Generator**: Minecraft `/tellraw`generator
- [ ] **Recipe-Generator**: Minecraft recipe genrator
- [ ] **Cursor-Sync**: Cursor sync in a text-div
- [ ] **Server-Dashboard**: Server dashborad for loat.dev home server
- [ ] **TOPDON TC-View**: Webpage for thermal camera.
- [ ] **Minecraft Map to PNG**: Convert Minecraft ingame Map to PNG file
- [ ] **Google-Maps**: Google Maps iframe generator based on coordiantes
- [ ] **Unichars**: Webpage like coolsymbols.com
- [ ] **Trello-Page-Clone**: A lookalike clone of the trello page
- [ ] **3D-Raumplaner**:
- [ ] **ANSI-Console-Webpage**: A webpage that looks like a terminal
- [ ] **Game in console**: A game like angry birds with Braille patterns
- [ ] **Image to bool map**: Convert pngs to diffrent arrays (bool, byte, etc...)
- [ ] **Google Drive Adapter**: A google drive sftp adapter
- [ ] **Tree-Generator**: File tree generator
- [ ] **Units**: https://github.com/TypeScriptPlayground/Std/blob/main/src/unit/index.ts
- [ ] **Canvas Game Engine**: Simple canvas gameengine using HTML5 canvas

- [ ] **ASCII-Map-Game**: Ein 2D Spiel wo alles mit ASCII Art gemacht ist auf einem riesigen canvas (zb. shapezio)
- [x] **Directory Template Replacer**: Ein Tool um in einer Directory template strings in Ordnern/Dateien aus zu tauschen.
- [x] **GitHub Action Minecraft Version**: Eine Action welche überprüft ob es ein neues update gibt

- [ ] **Minecraft Resourcepack invivible items**: Ein Resourcepack wo alle items mit einer bestimmten custom model data unsichbar sind. (nützlich für /trigger vanish)

- [ ] **how-long-is-a-stick.com**: A random game where you astimate how long a stick could be. The measurement than gets thrown into a big pool of other measurements from other peapole to show a global statistic about what other people think the length of a stick could be. (This is just a random dumb idea xD)
- [ ] **Basic TODO list**: That way I dont need this repo anymore xD

`(?<=(?:function(?:[\w ]+)?|=)[ \s]*\()((?:[ \s]*[\w]+[ \s]*:[ \s]*[\w]+(?:\[\])?[ \s]*(?:,[\s]*)?)+)(?=\))`

`([ \s]*([\w]+)[ \s]*:[ \s]*([\w\[\]]+)[ \s]*(?:,[\s]*)?)`

Window zoom level:
```js
window.addEventListener('resize', ()=>console.log(window.innerWidth - parseFloat(window.getComputedStyle(document.documentElement).width.replace('px','')) - 17))
```

https://cdn.discordapp.com/attachments/832508944056320020/1051541684514725988/CH341SER_arduino_treiber.zip

```ts
const dll = Deno.dlopen('KernelBase.dll', {
    'GetCommPorts': {
        parameters: [
            'pointer',
            'u32',
            'u32'
        ],
        result: 'u32'
    }
})

const ports = 0;

const ptr = Deno.UnsafePointer.create(ports)

const portsWritten = 0

const result = dll.symbols.GetCommPorts(ptr, 20, portsWritten)
console.log(result, ports, portsWritten);
```

![image](https://github.com/Mqxx/TODO/assets/62719703/ee676765-7dd6-4589-a52a-1cbaa41ff2ac)

![image](https://github.com/Mqxx/TODO/assets/62719703/6e860267-c2a6-4a42-9bc5-be28afe05ad3)


```ts
export type BooleanMap = [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean
]

export function symbolFromArray(array : BooleanMap) : string {
    const restructuredArray = [
        array[0], array[2],
        array[4], array[1],
        array[3], array[5],
        array[6], array[7]
    ]
    const base = 0x2800
    const code = restructuredArray.reduceRight((lastBoolean, currentBoolean) => lastBoolean << 1 | + currentBoolean, 0)
    return String.fromCharCode(base + code)
}
```

`tree.ts`
```ts
console.log('\x1b[1m' + Deno.cwd() + '\x1b[0m');

const symbols = {
    EDGE: `└─ `,
    BLANK: '   ',
    STRAIGHT: '│  ',
    CROSSING: '├─ '
}

function readDirRecursive(path : string, indents : string[]) {
    [...Deno.readDirSync(path)].forEach((dirEntry, dirIndex, dir) => {

        const isLast = dirIndex == (dir.length - 1);
        const indentsString = indents.join('');

        if (isLast) {
            console.log(`${indentsString}${symbols.EDGE}${dirEntry.isDirectory ? '\x1b[1;34m' + dirEntry.name + '\x1b[0m' : '\x1b[32m' + dirEntry.name + '\x1b[0m'}`);
            indents.push(symbols.BLANK);
        } else {
            console.log(`${indentsString}${symbols.CROSSING}${dirEntry.isDirectory ? '\x1b[1;34m' + dirEntry.name + '\x1b[0m' : '\x1b[32m' + dirEntry.name + '\x1b[0m'}`);
            indents.push(symbols.STRAIGHT);
        }

        if (dirEntry.isDirectory) {
            readDirRecursive(`${path}/${dirEntry.name}`, indents);
        }

        indents.pop();
    })
}

readDirRecursive('./', []);

```
`cursor_position.ts`

```ts
Deno.stdin.setRaw(true)

Deno.stdout.write(new TextEncoder().encode('\x9b6n'));

for await (const chunk of Deno.stdin.readable) {
    const text = new TextDecoder().decode(chunk.slice(2));
    console.log(text);
    break;
}
```

https://invisible-island.net/xterm/ctlseqs/ctlseqs.html

```ts
Deno.stdin.setRaw(true)
function write(str : string) {
    Deno.stdout.write(new TextEncoder().encode(str))
}

write('\x1b[?1003h\x1b[?1006h\x1b[2J\x1b[H\x1b[?25l')

write('ANSI/xTerm control codes are now monitored.\n')

const controlCharactersMap : {[key : number] : string} = {
    0x00: 'NUL',
    0x01: 'SOH',
    0x02: 'STX',
    0x03: 'ETX',
    0x04: 'EOT',
    0x05: 'ENQ',
    0x06: 'ACK',
    0x07: 'BEL',
    0x08: 'BS',
    0x09: 'TAB',
    0x0a: 'LF',
    0x0b: 'VT',
    0x0c: 'FF',
    0x0d: 'CR',
    0x0e: 'SO',
    0x0f: 'SI',
    0x10: 'DLE',
    0x11: 'DC1',
    0x12: 'DC2',
    0x13: 'DC3',
    0x14: 'DC4',
    0x15: 'NAK',
    0x16: 'SYN',
    0x17: 'ETB',
    0x18: 'CAN',
    0x19: 'EM',
    0x1a: 'SUB',
    0x1b: 'ESC',
    0x1c: 'FS',
    0x1d: 'GS',
    0x1e: 'RS',
    0x1f: 'US',
    0x20: 'SP',
    0x7f: 'DEL'
}

const conductors = [
    '['
]

const sequences = [
    '<',
    '~',
    '?'
]

const instructionDividers = [
    ';'
]

const ends = [
    'm',
    'M',
    'A',
    'B',
    'C',
    'D',
    'F',
    'H'
]

for await (const chunk of Deno.stdin.readable) {

    const coloredArray : string[] = [];
    const coloredString : string[] = [];

    chunk.forEach((char, index, {length}) => {
        const charCode = String.fromCharCode(char)
        let color = '\x1b[38;5;15m'
        let escapeCode = false;

        if (
            (
                char >= 0x00
                &&
                char <= 0x1f
            ) || (
                char === 0x7f
            ) || (
                char === 0x20
            )
        ) {
            escapeCode = true;
            color = '\x1b[38;5;5m'
        } else if ( conductors.includes(charCode) ) {
            color = '\x1b[38;5;4m'
        } else if ( 
            sequences.includes(charCode)
            &&
            length != 1
        ) {
            color = '\x1b[38;5;3m'
        } else if ( instructionDividers.includes(charCode) ) {
            color = '\x1b[38;5;8m'
        } else if (
            ends.includes(charCode)
            && 
            (length > 1)
            &&
            (index === length - 1)
        ) {
            color = '\x1b[38;5;2m'
        }

        if (escapeCode) {
            coloredArray.push(`${color}\x1b[4m${char.toString(16).toUpperCase()}\x1b[24m(${controlCharactersMap[char]})\x1b[0m`)
            coloredString.push(`${color}${controlCharactersMap[char]}\x1b[0m`)
        } else {
            coloredArray.push(`${color}\x1b[4m${char.toString(16).toUpperCase()}\x1b[24m(${charCode})\x1b[0m`)
            coloredString.push(`${color}${charCode}\x1b[0m`)
        }
        
    })

    console.log(`${coloredString.join('')} \x1b[38;5;8m[\x1b[0m${coloredArray.join('\x1b[38;5;8m, \x1b[0m')}\x1b[38;5;8m]\x1b[0m`);
}



```

# REGEX
Um JSON Arrays zu formatieren.
```
(?="[^"]*",)|(?<=,)(?= ?")|(?<=, ?"[^"]*")
```

# Für Web-Projekte; kopiert dateien von a nach b
```ts
import { walk } from "https://deno.land/std@0.204.0/fs/walk.ts";
import { parse } from "https://deno.land/std@0.204.0/flags/mod.ts";
import { relative, join } from "https://deno.land/std@0.204.0/path/mod.ts";
import { copySync, ensureFileSync } from "https://deno.land/std@0.204.0/fs/mod.ts";

const args = parse(Deno.args)

const srcPath = args._[0].toString() ?? './'
const distPath = args._[1].toString() ?? './dist/'
const exts = (args.exts as string).split(',')

for await (const entry of walk(srcPath, {includeDirs: false, exts: exts})) {
    const from = entry.path;
    const to = join(distPath, relative(srcPath, entry.path));
    console.log(from, '=>', to);
    
    ensureFileSync(to)
    copySync(from, to, {overwrite: true});
}
```

# Für CSS Border fade out

https://pqina.nl/blog/fade-out-overflow-using-css-mask-image/

```html
<div class="masked">abc</div>
```

```css
.masked {
  --mask-height: 10px;
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  mask-image: linear-gradient(
    0,
    transparent,
    black var(--mask-height),
    black calc(100% - var(--mask-height)),
    transparent
  ),
  linear-gradient(
    90deg,
    transparent,
    black var(--mask-height),
    black calc(100% - var(--mask-height)),
    transparent
  );
  mask-composite: intersect;
}
```

```ts
// https://github.com/chalk/ansi-regex/blob/02fa893d619d3da85411acc8fd4e2eea0e95a9d9/index.js
const ANSI_PATTERN = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))",
  ].join("|"),
  "g",
);
```
```
