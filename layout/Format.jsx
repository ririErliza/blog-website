import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'


export default function Format({children}) {
  return (
    <>
    <Head>
        <title>Blog </title>
    </Head>

    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}
