# JavaScript30 Queries

On Jan 15th, 2017 I posted this [tweet](https://twitter.com/palashv2/status/820665130316955648) metioning that if anyone needed any help with any logic or if anyone had any query regarding @WesBos's #JavaScript30 challenges, please let me know about it. As I really wanted to help the community and learn something new in the process.

Here are the few queries and my solution/responses:-

---

### By @RileyJD91

 - **Tweet Link:** https://twitter.com/RileyJD91/status/820670869953449985
 - **Query:** where did you find this ? I'd really like to try this out
 - **Response:** 
  - Here is the course: https://javascript30.com/  Github: https://github.com/wesbos/JavaScript30 Enjoy!
  - He also had a confusion between Java & Javascript. So, I had also shared a [Stackoverflow link](http://stackoverflow.com/a/245069/1823841) with him.

---

### By @ubilliards

 - **Tweet Link:** https://twitter.com/ubilliards/status/820943157713977344
 - **Query:** I am really trying to get the #02 css clock,  not to wind back. it does that janky thing when seconds hit 59.
 - **Response:** 
  - You can easily resolve this issue by not resetting but incrementing secondsDegrees value like ![img1](https://pbs.twimg.com/media/C2T8mzhXUAM_r9t.jpg)
  - So, when seconds hand was at 59, secnDegrees was at 444 degree & once seconds hand is at 0 ![img2](https://pbs.twimg.com/media/C2T-_jZXgAEe_On.jpg)
  - then secdegree jumps backward to 90 degree again causing the janky thing. I hope that makes sense now. 
  
---

### By @ubilliards

 - **Tweet Link:** https://twitter.com/ubilliards/status/822668194901004288
 - **Query:** 17 sorting why do they use  1 : -1 in the ternary operation. Is it a truthy : falsey ?
 - **Response:** 
  - Since we compare strings based on Unicode code point order. so, if 'string a' < 'string b' we return a -ve value or -1, so that 'string a' placed before 'string b', else we return a +ve value or 1, which indicates 'string a' is placed after 'string b' like in this example. Hope that make sense now.
  - ![img3](https://pbs.twimg.com/media/C2rIn-sWQAAOexC.jpg)
  - In ternary operation we can use any +ve or -ve value and we will get same results `return (a < b) ? -244 : 999;`
  - You can look into this for more info [String.prototype.charCodeAt()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
  
---
