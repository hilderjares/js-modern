function resolveAfter3Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 3000);
  });
}

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function foo() {
  var x = await resolveAfter3Seconds(10);
  console.log(x); // 10
}

foo();

async function bar() {
  var y = await 20;
  console.log(y); // 20
}

bar();

const sumValues = async function(y) {
	let x = await resolveAfter2Seconds(20);
	return y + x;
}

sumValues(20).then(result => {
	console.log(result)
});

async function sleep (forHowLong) {
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  await timeout(forHowLong);
}

async function countFromThree () {
  await sleep(0);
  console.log(3);
  await sleep(1000);
  console.log(2);
  await sleep(1000);
  console.log(1);
  await sleep(1000);
  console.log('DONE');
}

countFromThree();