import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Notepad from "../../assets/icons/notepad-microsoft-office-microsoft-41cf413b1e09a25fe809a4c283db2f7c.png";
import VSCode from "../../assets/icons/visual-studio-code-microsoft-visual-studio-source-code-editor-microsoft-36cc410dc4dcb290770aefb664ac7d62.png";
import FileExplorer from "../../assets/icons/file-explorer-main.png";
import Rocket from "../../assets/icons/rocket-icon-rocket-png-1ac72033464dc8debbd9bdd593b58131.png";
import EmptyTrash from "../../assets/icons/recycling-bin-trash-waste-container-icon-trash-can-png-cb9e666fb24c4a95edbd542911e6225c.png";

export const ExternalLinks = [
  {
    type: "facebook",
    URL: "https://www.facebook.com/james.jager",
    icon: faFacebook,
  },
  {
    type: "github",
    URL: "https://github.com/Apocilyptica",
    icon: faGithub,
  },
  {
    type: "linkedIn",
    URL: "https://www.linkedin.com/in/james-jager-a85476162/",
    icon: faLinkedin,
  },
];

export const HomePageItems = [
  {
    id: "id-1",
    content: "Trash",
    URL: "",
    icon: EmptyTrash,
    alt: "trashcan",
  },
  {
    id: "id-2",
    content: "Launch",
    URL: "/",
    icon: Rocket,
    alt: "launch",
  },
  {
    id: "id-3",
    content: "Readme.md",
    URL: "/readme",
    icon: Notepad,
    alt: "notepad",
  },
  {
    id: "id-4",
    content: "About-Me.vsc",
    URL: "/aboutme",
    icon: VSCode,
    alt: "vscode",
  },
  {
    id: "id-5",
    content: "Projects",
    URL: "/projects",
    icon: FileExplorer,
    alt: "fileExplorer",
  },
];
