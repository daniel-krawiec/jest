const helloWorld = require('../src/helloWorld');

it("answers 'Is it a Hello?' if you ask a question", () => {
	expect(helloWorld('How are you?')).toBe('Is it a Hello?');
});

it("answers 'Finish Hello' if you won't finish", () => {
	expect(helloWorld('Say...')).toBe('Finish Hello');
});

it("answers 'It's a Hello!' when there is exclamation", () => {
	expect(helloWorld('Hello!')).toBe("It's a Hello!");
});

it("shows 'Empty' if there is nothing.' ", () => {
	expect(helloWorld('')).toBe('Empty');
});

it("answers 'Hello World' to anything else", () => {
	expect(helloWorld('asdasdasd')).toBe('Hello World');
});
