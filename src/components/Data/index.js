import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NotepadIcon from "../../assets/icons/notepad-microsoft-office-microsoft-41cf413b1e09a25fe809a4c283db2f7c.png";
import VSCodeIcon from "../../assets/icons/visual-studio-code-microsoft-visual-studio-source-code-editor-microsoft-36cc410dc4dcb290770aefb664ac7d62.png";
import FileExplorerIcon from "../../assets/icons/file-explorer-main.png";
import RocketIcon from "../../assets/icons/rocket-icon-rocket-png-1ac72033464dc8debbd9bdd593b58131.png";
import EmptyTrashIcon from "../../assets/icons/recycling-bin-trash-waste-container-icon-trash-can-png-cb9e666fb24c4a95edbd542911e6225c.png";
import GoogleIcon from "../../assets/icons/computer-wallpaper-ball-symbol-yellow-google-chrome-b853e2d80a50111d2a2ae820d3467875.png";
import Trashcan from "../Trashcan";
import Notepad from "../Notepad";
import VSCode from "../VSCode";
import FileExplorer from "../FileExplorer";
import Google from "../Google";

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

export const DefaultHomePageItems = [
  {
    id: "id-1",
    title: "Trash",
    URL: "/trashcan",
    icon: EmptyTrashIcon,
    alt: "trashcan",
    component: Trashcan,
    isFocus: "",
  },
  {
    id: "id-2",
    title: "Launch",
    URL: "/",
    icon: RocketIcon,
    alt: "launch",
    component: null,
    isFocus: "",
  },
  {
    id: "id-3",
    title: "Readme.txt",
    URL: "/readme",
    icon: NotepadIcon,
    alt: "notepad",
    component: Notepad,
    isFocus: "",
  },
  {
    id: "id-4",
    title: "About-Me.vsc",
    URL: "/aboutme",
    icon: VSCodeIcon,
    alt: "vscode",
    component: VSCode,
    isFocus: "",
  },
  {
    id: "id-5",
    title: "Projects",
    URL: "/projects",
    icon: FileExplorerIcon,
    alt: "fileExplorer",
    component: FileExplorer,
    isFocus: "",
  },
  {
    id: "id-6",
    title: "Google",
    URL: "/google",
    icon: GoogleIcon,
    alt: "google",
    component: Google,
    isFocus: "",
  },
];