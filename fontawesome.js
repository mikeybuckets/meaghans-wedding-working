// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
// import individual icons
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faKissWinkHeart } from "@fortawesome/free-regular-svg-icons";

export default function registerIcons() {
  library.add(faGithub, faLinkedin, faFileAlt, faEnvelope, faKissWinkHeart);
}
