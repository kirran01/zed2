import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center p-3">
      <p className="text-3xl">Zed Labs Demo</p>
      <p className="m-3 text-center">An E-money digital payment service functionalty implementation by Kirran Kirpalani</p>
    </div>
  );
}
