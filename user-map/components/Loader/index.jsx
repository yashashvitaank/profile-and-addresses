import { Children } from "react";

const dots = [".5s", ".2s", ".5s"]

function Dot({delay}){

  return(
    <div class={`w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:${delay}]`}/>
  )
}
function Loader() {
  return (
    <div class="flex flex-row gap-2 justify-center items-center container h-screen">
      {Children.toArray(
        dots.map((delay)=>
        <Dot delay={delay} />
        )
      )}
    </div>
  );
}

export default Loader;
