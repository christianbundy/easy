#Easy

Plain-English Javascript-like scripting made easy.

```js
// automatic returns
print:(message:1):(message).

// if is easy
if:(
	expression: 1,
	block: 2,
	else: 3,
	elseblock: 4
	):(
	(expression == true?) && block || (else == "else") && (elseblock) || error "you suck".
).

// is is easy
is:(before: -1, after: 1):(
	if (before == null) (after == true?) else (before = after).
).

// synonyms are easy.
are:is.

// lookbacks are easy
cool:(a: -1):(
	is a == "cool"?
).

cb            // null
cb is         // "you suck"
is cb cool?   // false
cb is "cool". // "cool"
is cb cool?   // true
are cb cool?  // true
```