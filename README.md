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
- [ ] **Game in console** A game like angry birds mit Braille patterns

`(?<=(?:function(?:[\w ]+)?|=)[ \s]*\()((?:[ \s]*[\w]+[ \s]*:[ \s]*[\w]+(?:\[\])?[ \s]*(?:,[\s]*)?)+)(?=\))`

`([ \s]*([\w]+)[ \s]*:[ \s]*([\w\[\]]+)[ \s]*(?:,[\s]*)?)`

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
