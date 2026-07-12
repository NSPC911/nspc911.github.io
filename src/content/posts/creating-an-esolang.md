---
title: "Creating an esoteric language"
description: ""
pubDate: 2026-07-12
author: "NSPC911"
tags: ["project"]
---

Programming languages, we all love them. You use it to tell an instruction to the computer, and it will do exactly that. Most programming languages are easy to code with -- that's literally point of it. But there exists a small category of esolangs, typically differentiated by their gimick.

What I mean by 'gimick':
- [brainfuck](https://en.wikipedia.org/wiki/Brainfuck): 8 character syntax, smallest turing-complete interpreted language
- [Malbolge](https://en.wikipedia.org/wiki/Malbolge): almost non-existant syntax
- [Chef](https://esolangs.org/wiki/Chef): you write cooking recipies
- [Whitespace](https://en.wikipedia.org/wiki/Whitespace_(programming_language)): you cannot see the code

So I wanted to also create a gimick. It came to me in a dream. The dream was as simple as this

```
5 + 10 >>       # prints 15
10 = 5          # store '5' into 10
5 + 10 >>       # prints 10
```

So that's the gimick: Numbers are variables, letters are ignored.

Now I wanted to expand on this interesting syntax. You may notice that there is no way to output letters. That's easy, just use `->`

```
84 ->   # T
```

What about for inputting characters
```
84 <<  # takes in numbers
90 <-  # takes in characters, converts to their numeric/ascii form
```

Here comes another gimick of this language: a number line.

The number line is simply a list of numbers from 0 to infinity. If you do this

```
84 <-   # pass in 'hello'

84 >>   # prints 104
85 >>   # prints 101
86 >>   # prints 108
87 >>   # prints 108
88 >>   # prints 111

84 ->   # prints h
85 ->   # prints e
86 ->   # prints l
87 ->   # prints l
88 ->   # prints o
```

essentially, if more than one character is entered, it gets saved consecutively in the number line. To print the characters, you can use `>->`

```
84 >->   # prints hello
86 >->   # prints llo
84 >>>   # prints '104 101 108 108 111'
86 >>>   # prints '108 108 111'
```

There are a lot more cooler operations and stuff, like literal operator,

```
10 = 5
5 = @10
5 + 10 >>           # prints 15
@(@(@(2 + 3))) >>   # prints 5 because stacking @ does nothing

@(2 + 3) = 44       # writes slot 5
5 >>                # prints 44
```

functions

```
5 = & (0) => (1) ~ (2) {
  2 = 0 * 0
  1 = 2 + 0
}
```

loops
```
260 = @1
!! (260 <= @16) {
    260 = 260 * @2
}
260 >>    # prints 32
```

unassignment

```
5 ~
5 >>      # prints 5 because slot five is itself again
```

It is available on github at https://github.com/NSPC911/somnum, and the spec sheet is available at [spec.num](https://github.com/NSPC911/somnum/blob/main/spec.num)
