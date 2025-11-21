---
layout: ../../../../layouts/partials/BlogLayout.astro
title: "Code Post"
date: 2025-01-01
description: "This is a code post."
tags: ["notes", "code"]
---

```ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

```ts copy="false"
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

```ts title="greet.ts"
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

```ts title="transformerNotationDiff()"
console.log("Minus") // [!code --]
console.log("Add") // [!code ++]
console.log("Equal")
```

```ts title="transformerNotationHighlight()"
console.log("Yes")
console.log("Highlight") // [!code highlight]
console.log("No")
```

```ts title="transformerNotationHighlight()"
// [!code highlight:3]
console.log("Yes")
console.log("Highlight")
console.log("No")
```

```ts title="transformerNotationWordHighlight()"
// [!code word:Highlight]
console.log("Yes")
console.log("Highlight")
console.log("No")
```

```ts title="transformerNotationFocus()"
console.log("Yes")
console.log("Focused") // [!code focus]
console.log("No")
```
                
```ts title="transformerNotationErrorLevel()"
console.log("Yes")
console.log("Error") // [!code error]
console.log("Warning") // [!code warning]
```