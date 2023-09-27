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

`(?<=(?:function(?:[\w ]+)?|=)[ \s]*\()((?:[ \s]*[\w]+[ \s]*:[ \s]*[\w]+(?:\[\])?[ \s]*(?:,[\s]*)?)+)(?=\))`

`([ \s]*([\w]+)[ \s]*:[ \s]*([\w\[\]]+)[ \s]*(?:,[\s]*)?)`

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
```ts
export class JSONC {
    static parse(jsonc : string) : any {
        return JSON.parse(jsonc.replace(/(?<!\".*)\/\/.*$|\/\*(?:.|\n)*?\*\/|,(?=(?:\s|\n)*?})/gm, ''))
    }
}
```
export type TypeFromArray<ArrayType extends readonly unknown[]> = ArrayType[number];

![image](https://github.com/Mqxx/TODO/assets/62719703/ee676765-7dd6-4589-a52a-1cbaa41ff2ac)

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
console.log('.');

const symbols = {
    EDGE: `'--`,
    BLANK: '   ',
    STRAIGHT: '|  ',
    CROSSING: '|--'
}

function readDirRecursive(path : string, indents : string[]) {
    [...Deno.readDirSync(path)].forEach((dirEntry, dirIndex, dir) => {

        const isLast = dirIndex == (dir.length - 1);
        const indentsString = indents.join('');

        if (isLast) {
            console.log(`${indentsString}${symbols.EDGE}${dirEntry.name}`);
            indents.push(symbols.BLANK);
        } else {
            console.log(`${indentsString}${symbols.CROSSING}${dirEntry.name}`);
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
    'M'
]

for await (const chunk of Deno.stdin.readable) {

    const coloredArray : string[] = [];
    const coloredString : string[] = [];

    chunk.forEach((char) => {
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
        } else if ( sequences.includes(charCode) ) {
            color = '\x1b[38;5;3m'
        } else if ( instructionDividers.includes(charCode) ) {
            color = '\x1b[38;5;8m'
        } else if ( ends.includes(charCode) ) {
            color = '\x1b[38;5;2m'
        }

        if (escapeCode) {
            coloredArray.push(`${color}${char}(${controlCharactersMap[char]})\x1b[0m`)
            coloredString.push(`${color}${controlCharactersMap[char]}\x1b[0m`)
        } else {
            coloredArray.push(`${color}${char}(${charCode})\x1b[0m`)
            coloredString.push(`${color}${charCode}\x1b[0m`)
        }
        
    })

    console.log(`${coloredString.join('')} \x1b[38;5;8m[\x1b[0m${coloredArray.join('\x1b[38;5;8m, \x1b[0m')}\x1b[38;5;8m]\x1b[0m`);
}



```
