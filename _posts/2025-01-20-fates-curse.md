---
layout: post
title: Outsmarting Fate 
subtitle: Ted Ed Riddle Solution
tags: [math]
comments: true
mathjax: true
author: Liam Houston
---

I came across an interesting Ted-Ed riddle (love those things) that I wanted to solve.

[Here](https://ed.ted.com/lessons/can-you-outsmart-fate-and-break-her-ancient-curse-dan-finkel) is the riddle.
![Riddle Rules](/assets/img/tarot-riddle-rules.png)

My initial attention is drawn to rule number 3. that fate takes all remaining cards when I have no remaining moves. Since there are many repeated factors for numbers 1-23, this will be an important consideration. I need to make moves in a specific order.

Secondly, my attention is drawn to prime numbers, as these will only have factors of 1 and themselves. Thus, I can only select one prime number, since fate will select 1 for this first. The set of prime numbers from 1-23 is $$P = \{1,2,3,5,7,11,13,17,19,23\} $$. This poses a significant restriction on which numbers we can select.

Let's now take an example of card selections using these observations to try to outsmart fate.

| Card Selected | My Cards | Fate's Card |
| --- | ----------------- | ----------------- |
| 23 | 23 | 1 |
| 22 | 22, 23 | 1, 2, 11 |
| 14 | 14, 22, 23 | 1, 2, 7, 11 |
| 21 | 14, 21, 22, 23 | 1, 2, 3, 7, 11 |
| 15 | 14, 15, 21, 22, 23 | 1, 2, 3, 5, 7, 11 |
| 18 | 14, 15, 18, 21, 22, 23 | 1, 2, 3, 5, 6, 7, 9, 11 |
| 20 | 14, 15, 18, 20, 21, 22, 23 | 1, 2, 3, 4, 5, 6, 7, 9, 10, 11 |
| 16 | 14, 15, 16, 18, 20, 21, 22, 23 | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 |

Since fate has all factors up to $$\lfloor 23/2 \rfloor$$, there are no more numbers with factors that Fate does not already have. 
<br>End Totals: $$Me = 149, Fate = 127.$$

So I won! My strategy was selecting numbers that would only add one factor for Fate. Except for 18 and 20, all my selections only gave Fate one additional factor.


Now let's use a similar strategy and see if we can select all the special reward cards along the way. This will be difficult since 2 will have to be the only prime number I receive instead of 23 like last time.

| Card Selected | My Cards | Fate's Card |
| --- | ----------------- | ----------------- |
| 2 | 2 | 1 |
| 6 | 2, 6 | 1, 3 |
| 10 | 2, 6, 10 | 1, 3, 5 |
| 22 | 2, 6, 10, 22 | 1, 3, 5, 11 |
| 21 | 2, 6, 10, 21, 22 | 1, 3, 5, 7, 11 |
| 20 | 2, 6, 10, 20, 21, 22 | 1, 3, 4, 5, 7, 11 |
| 18 | 2, 6, 10, 18, 20, 21, 22 | 1, 3, 4, 5, 7, 9, 11 |
| 16 | 2, 6, 10, 16, 18, 20, 21, 22 | 1, 3, 4, 5, 7, 8, 9, 11 | 

End totals: $$Me = 115,  Fate = 161$$.

I'm almost certain that there is no possible selections where you can receive all special cards and win. Let's try to prove this.

Assuming we only select the special cards let's see where that leaves us.

| My Special Cards | Fate's Cards | Fate's Implicit Cards |
| ----------------- | ----------------- | ----------------- |
| 2, 6, 10 | 1, 3, 5 | 13, 17, 19, 23 |

Implicitly, fate's total is already 81. Since $$ \sum_{n=1}^{23} = \dfrac{n(n + 1)}{2} = 276 $$, Fate only needs 138 to win.

Further, we can show that a greedy solution of picking the largest number with only one remaining factor card will always produce an optimal solution. Assume we have sets $$myCards, fateCards and remainingCards$$. Assume we select the largest number $$remainingCards_i$$ where $$factors(remainingCards_i) \exists remainingCards and sizeOf(factors(remainingCards_i)) = 1 $$. By contradiction, if we do not select $$remainingCards_i$$, our set will be smaller since we can only using $$factors(remainingCards_i)$$ to select lesser numbers.

Since my solution only selected the largest number that only adds one factor we can confirm that all special cards cannot be selected.

Thus, I found a solution to the problem and proved the special cards cannot all be selected. A similar greedy selection method can be used on different combinations of special cards to determine if they're optimal.

Let's see if I'm correct.

<iframe src="https://giphy.com/embed/S2ybL78SPHGVpPux1I" width="480" height="480"></iframe>

From the Ted Ed video... I was correct!! They say that it's impossible to select more than 1 special card so you have to choose love, riches or breaking the curse. 

The solution seems simpler than the effort I put in, but I feel accomplished especially in finding the greedy algorithm to select the optimal card selections.

My notation is horribly sloppy and I won't even pretend like the proof was formal, however, I'm proud of these results and have shown that I could articulate a formal proof if needed.

As always thanks for reading, take care and love yourself
<br>\- Liam <3

<!---
===============================================================
COMMENTED OUT SOME JAVASCRIPT TO AUTOMATE THE TABLE GENERATION
resulted in issues with line breaks in javascript not being recognized as table formatting by markdown
===============================================================

<script type="text/javascript">
    function displaySelections(mySelections)  // for simplicity, assume a valid set of selections according to rules
    totalNums = 23;
    allNumbers = new Set();
    for (let i = 1 ; i <= totalNums ; i ++)
        allNumbers.add(i);
    

    let table = "| Card Selected | My Cards | Fate's Card | My Total | Fate's Total |\n";
    table += "| --- | ----------------- | ----------------- | --- | --- |\n";
    table += "| 23 | 23 | 23 | 23 | 23 |\n";


    document.getElementById("remaining-numbers").innerHTML += table;
    /*
    for (const value of mySelections) 
        document.getElementById("remaining-numbers").innerHTML += `$value `;
    
    */
    

  document.addEventListener("DOMContentLoaded", function() 
    document.getElementById("remaining-numbers").innerHTML += "test test12";
    const mySelections = new Set([1, 2, 3]);
    displaySelections(mySelections);
  );

</script>

<div id="remaining-numbers">here</div>
--->