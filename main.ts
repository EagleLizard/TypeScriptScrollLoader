
import { ScrollLoader } from './ScrollLoader';

const PAGE_SIZE = 15;

let scrollLoader:ScrollLoader;

main();

function main():void{
  scrollLoader = new ScrollLoader(PAGE_SIZE);
  getMore();
}

function getMore():void{
  console.log('\nGetting more data:');
  scrollLoader.next().then(res=>{
    if(!res.done){
      console.log(`${res.value.length} items received.`);
      console.log(JSON.stringify(res.value));
      getMore();
    }else{ 
      console.log('\n finished');
    }
  });
}