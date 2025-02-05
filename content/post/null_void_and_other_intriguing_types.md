---
title: 'null, void and other intriguing types'
---

I often find documentation hard to read. It’s highly technical, which is indeed important, because it has to be correct, but that does not make it a fun read. I’ve realized that when I struggle with concepts, it’s not the concepts in itself that is hard to grasp, but the way it is presented. I am a visual thinker. I understand things by making mental images and models of them. I like metaphors and analogies, and I like to break things down and describe them as simply as possible. \
\
I came across nil the other day and started thinking about the different kinds of nothing in programming. Well, I know it’s not *technically* nothings - it’s primitive data types with different properties and use cases. And they are quite intriguing when you take a closer look. \
\
**undefined** - there’s something there, but I don’t know what. Usually means that you’re trying to read some data the wrong way, as in you’re using an object method on an array, or vice versa. Or it could be that a variable is declared but not defined, or a function that doesn’t return anything.\
\
**null** - nothing there. Or, null is there, but there is no value to be read. Except for null. Which is just null. \
\
**‘’ **- an empty string is not nothing. It is an empty string, so it’s something. A string with the length of 0, to be precise. \
\
**NaN** - the result of a mathematical operation that is not a valid number. Like, if you tried to get the square root out of a negative number, or if you tried to divide a string, you’d get NaN, because square roots cannot be negative and “Hello” divided by 2 is clearly Not a Number. 

If you try to check if NaN is equal to NaN, you will find that it is not. Why? Because JavaScript is weird. \
But there is logic to it - NaN is a value that tells if a mathematical operation (so some kind of gymnastics using the type numbers) is meaningless or invalid number. Operations can give different kinds of meaningless or invalid results that are not necessarily equal to each other, which makes sense. \
\
**void** - is a TypeScript type annotation that allows a function to not return anything. Technically, it could return something, but the return value will not be observed or used. Although void is similar to undefined, it is different in that it prevents the usage of any returned value rather than requiring a specific return type. \
\
**nil** - serves a similar purpose to JavaScript’s null in Go, but more restricted.  Nil is the zero value for pointers, interfaces, maps, slices, channels, and function types.\
\
\
Just realized I am the kind of person who describes primitive types as "intriguing"... If you're not fascinated by this, you should listen to the excellent episode of Radiolab about null: [https://radiolab.org/podcast/null/transcript](https://radiolab.org/podcast/null/transcript)\
\
