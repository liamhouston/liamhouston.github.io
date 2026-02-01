---
layout: post
title: Average Lowest Dice Roll
subtitle: (I'm very competitive)
tags: [math]
comments: true
mathjax: true
author: Liam Houston
---

My dad got a new card game for Christmas and naturally I had to study every little intricacy about it. We got to a point where I was trying to figure out what the lowest card he would get if he had to choose between two. I didn't expect this problem to stump me for so long. My New Years hangover might be getting to me.



I simplified the problem to the following: **Assuming a fair die, what will the lowest number be on average after two rolls?**

At first I considered approaching the problem with combinations like a problem from [CMPUT 272](https://apps.ualberta.ca/catalogue/course/cmput/272). I didn't think this solution would scale well to an arbitrary n rolls and decided to look elsewhere. Instead I considered statistics seemed more appropriate as I suspected I might have solved the problem in [STAT 252](https://apps.ualberta.ca/catalogue/course/stat/252). I got further into this approach. 

I considered a similar problem with a biased die. For example, a die with sides $${1,1,1,1,1,16}$$ has the same average $$\overline{X} = 3.5$$ as a standard die. However, on average the lowest dice roll of two rolls is lower here than with a standard dice. This made it clear to me that the problem was not as simple as using the average dice roll.

Let's consider all 36 possible combinations of two fair dice rolls $$A = \{1,1\}, \{1,2\}, \{1,3\}... \{6,6\}$$
The lowest result will be 1 in all cases where the first roll was 1. 
The lowest result will be 2 in all cases where the first roll was 2, except when a 1 is rolled.
The lowest result will be 3 in all cases where the first rollw as 3, except when a 2 or a 1 is rolled.
$$sum = (1*6) + (2*5 + 1) + (3*4 + 1 + 2) + (4*3 + 1 + 2 + 3) + (5*2 + 1 + 2 + 3 + 4) + (6 + 5 + 4 + 3 + 2 + 1)$$


So assuming we have an $$n$$ sided dice from $$1..n$$. The sum of the lowest result from all $$n^2$$ combinations of rolls can be represented as follows: $$sum = \sum_{i=1}^{n} [i * (n-1-i)] + \sum_{j=1}^{i} [j]$$. This looks a lot more complicated than it was supposed to.

I don't think I did a great job here is another [link](https://www.reddit.com/r/askmath/comments/pilpg9/whats_the_average_result_of_rolling_two_dice_and/?rdt=65276)

Goodnight lol
\- Liam <3