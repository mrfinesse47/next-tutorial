import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  //this component is pre rendered, I believe any page is server side rendered
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          blanditiis, soluta inventore quis quidem eaque eveniet in quisquam
          voluptatum obcaecati id molestias voluptatibus suscipit laborum
          necessitatibus iure. Aspernatur, quidem laborum?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          blanditiis, soluta inventore quis quidem eaque eveniet in quisquam
          voluptatum obcaecati id molestias voluptatibus suscipit laborum
          necessitatibus iure. Aspernatur, quidem laborum?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
