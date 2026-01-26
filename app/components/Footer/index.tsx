import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function ({}) {
  return (
    <>
      <div className="bg-fg-2 h-navbar flex flex-col mt-15 text-bg-1">
        <div className="spacing-div h-7.5" />
        <hr className="border border-bg-1 mx-10" />
        <div className="spacing-div h-5" />
        <div className="flex flex-row justify-between items-center mx-10">
          <img src={Logo} className="w-25 h-25" alt="Logo" />
          <a
            href="mailto:jagatgurumamasarkar@gmail.com"
            className="text-[16px]"
          >
            jagatgurumamasarkar@gmail.com
          </a>
          <div className="flex flex-row gap-4 justify-between items-center w-auto">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </>
  );
}
