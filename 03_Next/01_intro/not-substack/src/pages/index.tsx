import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceID: string;
    amount: number;
  }
}


export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | Not substack</title>
      </Head>
       
       <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👏 Hey, Welcome</span>
            <h1>News about the <span>React</span> world.</h1>

            <p>
              Get access to all content <br />
              <span>for {product.amount} month</span>
            </p>
            <SubscribeButton priceID={product.priceID}/>
          </section>

          <img src="/images/avatar.svg" alt="Girl Coding"/>
       </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1J5tWJDzH3SC5fpiKcKzGoCN')

  const product = {
    priceID: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}