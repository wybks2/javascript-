async function testAsync(){
  console.log('abc')
  setTimeout(() => {
    console.log(123);
  },1000)
}

async function run() {
  console.log(await testAsync());
  console.log('run end')
}
console.log(run(), 'run...')
// 执行后是个promise对象