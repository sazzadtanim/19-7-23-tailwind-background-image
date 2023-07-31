import Image from "next/image";
import Bg1 from "@images/bg1.svg";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      {/* <Image alt="background" src={Bg1} className="absolute inset-0" /> */}
      <h1 className="capitalize py-10 lg:whitespace-nowrap text-center font-mono">
        tailwind background image in nextjs
      </h1>
      <div>
        <p></p>
        <ol>
          <li>
            <span>Add images in public folder</span>
          </li>
          <li>
            <pre className="text-white">
              hello
              <div className="bg-[url(/next.svg)] bg-fixed bg-no-repeat"></div>
            </pre>
          </li>
          <li>Add images in public folder</li>
          <li>Add images in public folder</li>
        </ol>
      </div>
    </main>
  );
}
