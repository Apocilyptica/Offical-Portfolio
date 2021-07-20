import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Window Icons
import NotepadIcon from "../../assets/icons/notepad-microsoft-office-microsoft-41cf413b1e09a25fe809a4c283db2f7c.png";
import VSCodeIcon from "../../assets/icons/visual-studio-code-microsoft-visual-studio-source-code-editor-microsoft-36cc410dc4dcb290770aefb664ac7d62.png";
import FileExplorerIcon from "../../assets/icons/file-explorer-main.png";
import RocketIcon from "../../assets/icons/rocket-icon-rocket-png-1ac72033464dc8debbd9bdd593b58131.png";
import EmptyTrashIcon from "../../assets/icons/recycling-bin-trash-waste-container-icon-trash-can-png-cb9e666fb24c4a95edbd542911e6225c.png";
import GoogleIcon from "../../assets/icons/computer-wallpaper-ball-symbol-yellow-google-chrome-b853e2d80a50111d2a2ae820d3467875.png";

// App icons
import notepadIconSmall from "../../assets/windowsIcons/notepadSmall.png";
import notepadIconLarge from "../../assets/windowsIcons/notepadLarge.png";
import googleIconLarge from "../../assets/windowsIcons/google.png";

// Components
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
    appName: "recycleBin",
    title: "Recycle Bin",
    URL: "/trashcan",
    icon: EmptyTrashIcon,
    alt: "trashcan",
    component: <Trashcan />,
    isFocus: "",
    itemType: "Application",
    dateModified: "2021-01-21T21:14:00.843Z",
    size: "2,191 KB",
    isActive: false,
  },
  {
    id: "id-2",
    appName: "launch",
    title: "Launch",
    URL: "/",
    icon: RocketIcon,
    alt: "launch",
    component: null,
    isFocus: "",
    itemType: "Shortcut",
    dateModified: "2021-01-21T21:14:00.843Z",
    size: "1 KB",
    isActive: false,
  },
  {
    id: "id-3",
    appName: "notepad",
    title: "Readme.txt",
    URL: "/readme",
    icon: NotepadIcon,
    alt: "notepad",
    component: <Notepad />,
    isFocus: "",
    itemType: "Text Document",
    dateModified: "2021-01-10T20:12:01.215Z",
    size: "1 KB",
    isActive: false,
  },
  {
    id: "id-4",
    appName: "vscode",
    title: "About-Me.vsc",
    URL: "/aboutme",
    icon: VSCodeIcon,
    alt: "vscode",
    component: <VSCode />,
    isFocus: "",
    itemType: "Application",
    dateModified: "2020-09-21T14:10:52.627Z",
    size: "629 MB",
    isActive: false,
  },
  {
    id: "id-5",
    appName: "fileExplorer",
    title: "Projects",
    URL: "/projects",
    icon: FileExplorerIcon,
    alt: "fileExplorer",
    component: <FileExplorer />,
    isFocus: "",
    itemType: "File folder",
    dateModified: new Date(),
    size: "0 KB",
    isActive: false,
  },
  {
    id: "id-6",
    appName: "google",
    title: "Google",
    URL: "/google",
    icon: GoogleIcon,
    alt: "google",
    component: <Google />,
    isFocus: "",
    itemType: "Shortcut",
    dateModified: "2020-12-02T21:14:00.843Z",
    size: "1 KB",
    isActive: false,
  },
];

export const defaultAppSettings = {
  notepad: {
    header: {
      title: "Untitled - Notepad",
      icon: notepadIconSmall,
    },
    footer: {
      alt: "notpad",
      icon: NotepadIcon,
      URL: "/readme",
      isFocus: true,
    },
    component: <Notepad />,
    defaultSize: {
      width: 1000,
      height: 750,
    },
    defaultOffset: {
      x: 200,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    display: "block",
    zIndex: 0,
    isActive: false,
  },
  google: {
    header: {
      title: "Google",
      icon: GoogleIcon,
    },
    footer: {
      icon: GoogleIcon,
      URL: "/readme",
      isFocus: true,
    },
    component: <Google />,
    defaultSize: {
      width: 1000,
      height: 750,
    },
    defaultOffset: {
      x: 100,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    display: "block",
    zIndex: 0,
    isActive: false,
  },
  recycleBin: {
    header: {
      title: "Recycle Bin",
      icon: notepadIconSmall,
    },
    component: <Trashcan />,
    defaultSize: {
      width: 1000,
      height: 750,
    },
    defaultOffset: {
      x: 100,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    display: "block",
    zIndex: 0,
    isActive: false,
  },
  vscode: {
    header: {
      title: "VSCode",
      icon: notepadIconSmall,
    },
    component: <VSCode />,
    defaultSize: {
      width: 1000,
      height: 750,
    },
    defaultOffset: {
      x: 100,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    display: "block",
    zIndex: 0,
    isActive: false,
  },
  fileExplorer: {
    header: {
      title: "File Explorer",
      icon: notepadIconSmall,
    },
    component: <FileExplorer />,
    defaultSize: {
      width: 1000,
      height: 750,
    },
    defaultOffset: {
      x: 100,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    display: "block",
    zIndex: 0,
    isActive: false,
  },
};
