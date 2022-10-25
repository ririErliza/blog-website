import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Format from '../layout/Format'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Format >
     <Header/>
     <main> main component </main>
     <Footer/>
    </Format>
  )
}
