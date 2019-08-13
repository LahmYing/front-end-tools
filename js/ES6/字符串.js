// String.raw()
String.raw`Hi\n${2 + 3}!`;
// 返回 "Hi\\n5!"
String.raw`Hi\\n`
// 返回 "Hi\\\\n"


let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false


'na'.repeat(2.9) // "nana"
'x'.repeat(3) // "xxx"


// 头部尾部 补全
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'


// 消除空格
// const s = '  abc  ';
// s.trim() // "abc"
// s.trimStart() // "abc  "
// s.trimEnd() // "  abc"