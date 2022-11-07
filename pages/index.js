
import Image from 'next/image'
import Format from '../layout/Format'

//components
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'

export default function Home() {
  return (
    <Format >
      <Section1/>
      <Section2/>
      <Section3/>
    </Format>
  )
}
