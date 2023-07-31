import Image from "next/image";
import capture1 from "@png/capture.png";

export default function Home() {
  return (
    <main className="bg-my_bg  w-screen h-screen bg-contain py-10">
      <div className="prose text-white mx-auto">
        <h1 className="capitalize py-10 lg:whitespace-nowrap font-mono mx-auto text-white">
          Single svg as background
        </h1>
        <div>
          <ol>
            <li>
              <span>
                Add svg in tailwind.config.js as background image.
                <span className="text-red-500">
                  {" "}
                  Be careful about the image path.
                </span>
              </span>
              <Image alt="" src={capture1} />
            </li>

            <li>Add width and height. </li>
            <li>Add bg-my_bg in className. </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
