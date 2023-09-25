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

const charMap : {[key : string] : string} = {
    '\x00': 'NUL',
    '\x01': 'SOH',
    '\x02': 'STX',
    '\x03': 'ETX',
    '\x04': 'EOT',
    '\x05': 'ENQ',
    '\x06': 'ACK',
    '\x07': 'BEL',
    '\x08': 'BS',
    '\x09': 'TAB',
    '\x0a': 'LF',
    '\x0b': 'VT',
    '\x0c': 'FF',
    '\x0d': 'CR',
    '\x0e': 'SO',
    '\x0f': 'SI',
    '\x10': 'DLE',
    '\x11': 'DC1',
    '\x12': 'DC2',
    '\x13': 'DC3',
    '\x14': 'DC4',
    '\x15': 'NAK',
    '\x16': 'SYN',
    '\x17': 'ETB',
    '\x18': 'CAN',
    '\x19': 'EM',
    '\x1a': 'SUB',
    '\x1b': 'ESC',
    '\x1c': 'FS',
    '\x1d': 'GS',
    '\x1e': 'RS',
    '\x1f': 'US',
    '\x20': 'SP',
    '\x7f': 'DEL'
}

for await (const chunk of Deno.stdin.readable) {
    
    const decoded = new TextDecoder().decode(chunk);
    


    const coloredString = decoded.replace(/([\x00-\x1f\x7f\x20])|((?<=[\x00-\x1f\x7f\x20])[\[])|((?<=\[)[<~]+)|(;)|([0-9]+(?=[m;]))|([mM]$)/gm, (
        all,
        escapeSequence : string,
        conductor : string,
        sequence : string,
        instructionDivider : string,
        digit : string,
        end : string
    ) => {
        if (escapeSequence) {
            return `\x1b[38;5;5m${charMap[escapeSequence]}\x1b[0m`
        } else if (conductor) {
            return `\x1b[38;5;4m${conductor}\x1b[0m`;
        } else if (sequence) {
            return `\x1b[38;5;3m${sequence}\x1b[0m`;
        } else if (instructionDivider) {
            return `\x1b[38;5;8m${instructionDivider}\x1b[0m`;
        } else if (digit) {
            return `\x1b[38;5;15m${digit}\x1b[0m`;
        } else if (end) {
            return `\x1b[38;5;2m${end}\x1b[0m`;
        } else {
            return all
        }
    })

    console.log(`${coloredString}  \x1b[38;5;8m[\x1b[0m${chunk.join('\x1b[38;5;8m, \x1b[0m')}\x1b[38;5;8m]\x1b[0m`);
}


```
