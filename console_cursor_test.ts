Deno.stdin.setRaw(true);
Deno.stdout.writeSync(new TextEncoder().encode('\x1b[?1003h\x1b[?1006h\x1b[2J\x1b[H\x1b[?25l'));

let oldPosition = {x: 0, y: 0}
let oldSize = Deno.consoleSize()

for await (const chunk of Deno.stdin.readable) {
  const code = new TextDecoder().decode(chunk.slice(1));
  const positionGroup = /\[<\d+;(?<x>\d+);(?<y>\d+)(?<mode>m|M)/.exec(code)?.groups ?? {}
  const position = {x: parseInt(positionGroup.x), y: parseInt(positionGroup.y)}
  const mode = positionGroup.mode
  const size = Deno.consoleSize()
  if (position.x && position.y) {
    

    let columnLine = ''
    for (let columnIndex = 1; columnIndex < size.columns + 1; ++columnIndex) {
      if (columnIndex != position.x) {
        columnLine += `\x1b[${oldPosition.y};${columnIndex}H `
        columnLine += `\x1b[${position.y};${columnIndex}H-`
      }
    }
    let rowLine = ''
    for (let rowIndex = 1; rowIndex < size.rows + 1; ++rowIndex) {
      if (rowIndex != position.y) {
        rowLine += `\x1b[${rowIndex};${oldPosition.x}H `
        rowLine += `\x1b[${rowIndex};${position.x}H|`
      }
    }
     
    console.log(
      rowLine
      + columnLine
      + `\x1b[${position.y};${position.x}H${mode === 'm' ? '+' : '#'}`
      + '\x1b[0H'
      + `[${position.x - 1}, ${position.y - 1}] `
    );
    oldPosition = position
    if (oldSize.columns != size.columns || oldSize.rows != size.rows) {
      oldSize = size
      console.clear();
    }
  }
  if (chunk[0] === 3) break;
}

Deno.stdout.writeSync(new TextEncoder().encode('\x1b[?1003l\x1b[?1006l\x1b[?25h\x1b[2J'));
