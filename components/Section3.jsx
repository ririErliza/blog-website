import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function Section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>


{/* swiper */}
    </section>
  )
}


function Post(){
    return(
        <div className="grid">
            <div className="images">
                <Link href={"/"}><a><Image src={"/images/9.jpg"} width={600} height={400} alt="image"/></a></Link>
            </div>
        </div>
    )
}