import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Wacky</title>
				<meta name='Wacky-Portfolio' content='portfolio site of wacky' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>indie</main>
		</div>
	)
}

export default Home
