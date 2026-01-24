import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import HeroHome from "@/components/HeroHome";
import BelowHero from "@/components/BelowHero";
import ManufactureSection from "@/components/ManufactureSection";
import AboutSection from "@/components/AboutSection";
import HospitableSection from "@/components/HospitableSection";
import SuccessSection from "@/components/SuccessSection";
import AllProductsPage from "@/components/AllProductsPage";
import AboutHome from "@/components/AboutHome";
import Footer from "@/components/Footer";
import Certificate from "@/components/Certificate";

export default function Home() {
	return (
		<>
			{/* <Hero/> */}
			<HeroHome/>
			<AllProductsPage/>
			<BelowHero/>
			<AboutHome/>
			<Certificate/>

			
		</>
	);
}
