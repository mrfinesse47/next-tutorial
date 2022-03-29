import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  //this component is pre rendered, I believe any page is server side rendered
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        blanditiis, soluta inventore quis quidem eaque eveniet in quisquam
        voluptatum obcaecati id molestias voluptatibus suscipit laborum
        necessitatibus iure. Aspernatur, quidem laborum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        blanditiis, soluta inventore quis quidem eaque eveniet in quisquam
        voluptatum obcaecati id molestias voluptatibus suscipit laborum
        necessitatibus iure. Aspernatur, quidem laborum?
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
