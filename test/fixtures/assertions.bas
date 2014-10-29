/* simple */
simple: assertion;

/* right function */
style: contains("font-family");

/* left function */
attribute(alt): true;

/* Regex */
title: /github/i;

/* subject transformations */
attribute(alt).flesch-kincaid-reading-ease: gte(80);
text.rot13.rot13(1).rot13: hypothetical;

/* negated Regex */

title: !/github/i;

/* negated function */

title: !contains("github");

/* barewords */
attribute(user-id): exists, longer-than(1), gte(1);