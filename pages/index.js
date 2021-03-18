import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Products from '../components/Products';

export default function Home() {
	return (
		<Provider store={store}>
			<div className={styles.container}>
				<Head>
					<title>Next with Redux</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>Next with Redux</h1>
					<Products />
				</main>
			</div>
		</Provider>
	);
}
