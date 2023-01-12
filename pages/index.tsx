import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main"
const inter = Inter({ subsets: ["latin"] });
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Main/>
      <Footer />

    </div>
  );
}
