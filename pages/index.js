import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navber from './components/navber'
export default function Home() {
  const { t } = useTranslation('common','navber')
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navber/>
      <main className={styles.main}>
        <h1 className={styles.title}>
        {t('title')}
        </h1>
      </main>

    

    </div>
  )
}
