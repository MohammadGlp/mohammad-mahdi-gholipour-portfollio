import { useMemo } from "react";
import ProjectPicOne from "@/assets/images/projects/project-1.png";
import ProjectPicTwo from "@/assets/images/projects/project-2.png";
import ProjectPicThree from "@/assets/images/projects/project-3.png";
interface MenuItem {
  id: number;
  name: string;
  href: string;
}

interface WorkItem {
  id: number;
  name: string;
  imageUrl: string;
  field: string;
  href: string;
}

function useMenus() {
  const menuItem: MenuItem[] = useMemo(
    () => [
      {
        id: 1,
        href: "../../resume.pdf",
        name: "download cv",
      },
      {
        id: 2,
        href: "/",
        name: "about",
      },
      {
        id: 3,
        href: "/",
        name: "works",
      },
      {
        id: 4,
        href: "/",
        name: "contact",
      },
    ],
    [],
  );

  const workItems: WorkItem[] = useMemo(
    () => [
      {
        id: 1,
        name: "Social Sport App",
        field: "ui/ux code",
        imageUrl: ProjectPicOne,
        href: "https://test.zilbax.com/",
      },
      {
        id: 2,
        name: "Piocrowd System App",
        field: "code",
        imageUrl: ProjectPicTwo,
        href: "https://piocrowd.com/",
      },
      {
        id: 3,
        name: "Madloops Academy App",
        field: "ui/ux code",
        imageUrl: ProjectPicThree,
        href: "https://Madloops.liara.run",
      },
    ],
    [],
  );

  return {
    menuItem,
    workItems,
  };
}

export default useMenus;
