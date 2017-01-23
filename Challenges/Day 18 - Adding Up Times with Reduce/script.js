// Get li nodelist as a real javascript array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes

	// Get data-time value from each li node
	.map(node => node.dataset.time)

	// Get minutes & seconds as seprate int variables and finally get total seconds
	.map(timeCode => {
		const [mins, secs] = timeCode.split(':').map(parseFloat);
		return (mins * 60) + secs;
	})

	// Use reduce to get total seconds
	.reduce((total, vidSeconds) => total + vidSeconds);

// Store original seconds value in secondsLeft for processing
// also seconds is a const variable, it can not be modified
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600; // chunk out mins & seconds left

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60; // chunk out seconds left

console.log(hours + 'h', mins + 'm', secondsLeft + 's');

/**
Usage of mod (%) operator here. Example:-
We have 10 apple and 3 kids

How many apple will each kid get?
Ans: Math.floor(10 / 3); // 3, so each kid gets 3 apple each
Try: console.log(Math.floor(10 / 3));

How many are left for dad then after its evenly distributed between kids?
Ans: 10 % 3; // 1, after giving 3 each to 3 kids, we have just 1 left
Try: console.log(10 % 3);

*/

