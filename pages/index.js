import Head from "next/head";
import Banner from "../components/Banner";
import ContactInfo from "../components/ContactInfo";
import ContactInfoForm from "../components/ContactInfoForm";
import Footer from "../components/Footer";
import Lottery from "../components/Lottery";
import LotteryDisplay from "../components/LotteryDisplay";
import Plans from "../components/Plans";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Beyond Lotto</title>
				<meta name='description' content='Beyond Lotto app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Banner />
				<Lottery />
				<LotteryDisplay />
				<Plans />
				<ContactInfo />
				<ContactInfoForm />
				<Footer />
			</main>
		</div>
	);
}
