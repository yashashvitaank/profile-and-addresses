import NoMap from "@assets/nomap.jpg"
import Image from "next/image"
import Link from "next/link"

function NoAddress() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-screen h-screen">
      <Image src={NoMap} width={250} height={250}/>
      <p className="font-bold text-lg">No Address Found For this User</p>
    </div>
  )
}

export default NoAddress