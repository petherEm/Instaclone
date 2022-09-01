import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>InstaClone - Training</title>
        <meta name="description" content="Instagram clone training" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />
      <Modal />

      {/* Footer */}
    </div>
  );
}
