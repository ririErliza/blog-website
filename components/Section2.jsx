import Link from "next/link"
import Image from "next/image"
import Author from "./_child/Author"

export default function Section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>


    {/* grid columns */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14"></div>
    </section>
  )
}

function Post(){
return(
    <div className="item">
        <div className="images">
            <Link href={"/"}><a><Image src={"/images/img1.jpg"} className="rounded" width={500} height={350} alt="image"/></a></Link>
        </div>

        <div className="info flex justify-center flex-col py-4">

        </div>




    </div>
)

}
