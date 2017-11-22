const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

function run() {
	// JSON.parse(row)

	console.log('Enter all you todo\'s for today and type done when you finished');

	rl.on('line', (inputText) => {
	  if (inputText === 'done') {
	  	return rl.close();
	  }
	  else if (inputText) {
	  	lines.push(inputText);
	  }
	});

	rl.on('close', () => {
	  const todo = {
	  	todos : lines
	  };
	  fs.writeFileSync('todo.json', JSON.stringify(todo));
	  console.log(lines);
	  console.log("All your todo's for today are stored in todo.json")
	});
}

module.exports =  {
	run: run
};






