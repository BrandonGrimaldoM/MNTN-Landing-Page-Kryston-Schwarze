import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navegation() {
  return (
    <nav className="flex items-center justify-between p-20 font-sans font-bold absolute w-full z-20">
      <svg
        width="108"
        height="24"
        viewBox="0 0 108 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_71)">
          <path
            d="M0.96 23H9.856V22.552C6.656 22.136 5.696 20.792 5.696 17.56V2.872H5.888L14.208 23.032H15.36L22.816 2.872H22.976V20.728C22.976 22.008 22.176 22.456 19.904 22.552V23H30.944V22.552C28.256 22.456 27.616 21.944 27.616 20.728V2.968C27.616 1.752 28.256 1.208 30.944 1.112V0.695999H22.784L16.736 17.144H16.576L9.984 0.695999H0.96V1.112C3.712 1.176 4.896 2.648 4.896 4.568V17.56C4.896 20.792 3.968 22.168 0.96 22.552V23Z"
            fill="white"
          />
          <path
            d="M52.128 23.352H53.664V6.104C53.664 2.936 54.528 1.56 57.536 1.112V0.695999H48.448V1.112C51.68 1.496 52.864 2.936 52.864 6.104V16.728H52.832L40.512 0.695999H32.96V1.112C35.712 1.24 36.896 2.872 36.896 4.824V17.56C36.896 20.792 35.968 22.168 32.96 22.552V23H41.984V22.552C38.72 22.2 37.696 20.792 37.696 17.56V4.728H37.728L52.128 23.352Z"
            fill="white"
          />
          <path
            d="M63.6 23H75.696V22.552C72.848 22.488 71.984 21.944 71.984 20.728V1.272H72.752C75.216 1.272 77.136 3.736 79.376 8.088L79.856 8.024L79.696 0.695999H59.568L59.376 8.024L59.856 8.088C62.128 3.64 64.08 1.272 66.512 1.272H67.312V20.728C67.312 21.944 66.416 22.488 63.6 22.552V23Z"
            fill="white"
          />
          <path
            d="M102.128 23.352H103.664V6.104C103.664 2.936 104.528 1.56 107.536 1.112V0.695999H98.448V1.112C101.68 1.496 102.864 2.936 102.864 6.104V16.728H102.832L90.512 0.695999H82.96V1.112C85.712 1.24 86.896 2.872 86.896 4.824V17.56C86.896 20.792 85.968 22.168 82.96 22.552V23H91.984V22.552C88.72 22.2 87.696 20.792 87.696 17.56V4.728H87.728L102.128 23.352Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_71">
            <rect width="108" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <ul className="flex gap-5 max-md:hidden">
        <Link href="#">
          <li>Equipment</li>
        </Link>

        <Link href="#">
          <li>About us</li>
        </Link>

        <Link href="#">
          <li>Blog</li>
        </Link>
      </ul>

      <div className="flex items-center gap-2 max-md:hidden">
        <UserCircleIcon className="text-white w-5 h-5" />
        <Link href="#">Account</Link>
      </div>
    </nav>
  );
}
