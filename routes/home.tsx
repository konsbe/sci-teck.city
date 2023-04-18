'use client'
import React, { useState } from "react";
import { useContext } from "react";
import styles from "@/src/styles/Home.module.css";
import { LoginContext } from "@/src/components/Contexts";
import Cube from "@/src/components/Cube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { StaticImageData } from "next/image";

// import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
export default function Home() {
  const context: any = useContext(LoginContext);
  const [hideModal, setHideModal] = useState(true);
  const [image, setImage] = useState<string | StaticImageData>("");
  const [frontImage, setFrontImage] = useState<string | StaticImageData>("");
  const [backImage, setBackImage] = useState<string | StaticImageData>("");
  const [leftImage, setLeftImage] = useState<string | StaticImageData>("");
  const [rightImage, setRightImage] = useState<string | StaticImageData>("");
  const [modalHeader, setModalHeader] = useState<string>();
  const [modalContent, setModalContent] = useState<string>();

  const toggleModal = (
    image: React.SetStateAction<string | StaticImageData>,
    title: React.SetStateAction<string | undefined>,
    description: React.SetStateAction<string | undefined>,
    frontImage: string | StaticImageData,
    backImage: string | StaticImageData,
    rightImage: string | StaticImageData,
    leftImage: string | StaticImageData
  ) => {
    setFrontImage(frontImage);
    setBackImage(backImage);
    setLeftImage(leftImage);
    setRightImage(rightImage);
    setImage(image);
    setModalHeader(title);
    setModalContent(description);
    setHideModal(!hideModal);
  };
  const toggleCloseModal = () => {
    if (!hideModal) setHideModal(!hideModal);
  };
  return (
    <div className={styles.container} onClick={() => toggleCloseModal()}>
        <div className={styles.cubeInfo}>
          <Cube
            isModal={false}
            frontHeader="Full Stack Node.js Engineer"
            frontDescription="Full Stack Node.js Engineer"
            frontIcon={GitHubIcon}
            upHeader="Full Stack Node.js Engineer"
            upDescription="Small Description Engineer"
            upIcon={LinkedInIcon}
            downHeader="Down Side"
            downDescription={"small description"}
            rightHeader="Full Stack Node.js Engineer"
            rightDescription="Small Description Engineer"
            rightIcon={MailIcon}
            leftHeader="Left Side"
            leftDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quas?"
            backHeader="Back Side"
            backDescription={"small description"}
            backImg="https://scontent.fath7-1.fna.fbcdn.net/v/t39.30808-6/265919608_369729944951941_4739354972702184605_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGPiyB9s7VK5ET1OTZSHogV_4DyXruBFMr_gPJeu4EUyjr-J8upnK4apaDfoNbjHGWWSZ4sO6kWHREZ5spJaqKN&_nc_ohc=VWSVqAroN1gAX82aB8k&_nc_ht=scontent.fath7-1.fna&oh=00_AfDXoOWSdAu3uN_18sfgz2YSNvAG9MrCcp_OqTd8unBQtA&oe=644460C1"
          />
        </div>
    </div>
  );
}
