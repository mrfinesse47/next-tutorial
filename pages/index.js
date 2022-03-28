import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  //this component is pre rendered, I believe any page is server side rendered
  return (
    <div className={styles.container}>
      <h1>HomePage</h1>
    </div>
  );
}
