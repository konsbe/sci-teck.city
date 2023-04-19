"use client";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import styles from "@/src/styles/Home.module.css";
import { LoginContext } from "@/src/components/Contexts";
import Cube from "@/src/components/Cube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { StaticImageData } from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
  const ref = useRef();

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
    <div className="body-container">
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
        <div className={styles.homeDescription}>
          As a software engineer specializing in full-stack web development My
          expertise includes front-end technologies such as JavaScript,
          TypeScript, Node.js, HTML, CSS/Sass, and jQuery, as well as popular
          frontend frameworks such as React, React Native, and Vue. I have
          extensive experience with a variety of frontend tools and libraries,
          including React Query, Redux, Material UI, and Vuetify, and am skilled
          in building asynchronous APIs to support dynamic and responsive web
          applications. On the backend, I am proficient in using Express.js to
          build robust and scalable server-side applications. I also have
          experience working with popular server-side frameworks such as Next.js
          and Remix.js, which allow me to create server-side rendered web
          applications that offer a seamless user experience. I am highly
          skilled in using Git for version control, and have worked with a range
          of version control platforms including GitLab, GitHub, and Bitbucket.
          In terms of databases, I am experienced with both SQL and MongoDB, as
          well as Firebase, and am well-versed in designing and implementing
          efficient data storage and retrieval mechanisms. Additionally, I am
          familiar with other programming languages and frameworks such as
          Python, Java, and Spring Boot. In addition to web development, I am am
          always looking for ways to expand my knowledge and skills about cloud
          technologies and services. I have experience working with Amazon Web
          Services (AWS), including using services such as RDS and EC2 to manage
          databases and instances in the cloud. I am skilled in using Docker and
          containers to deploy applications, and am familiar with tools such as
          Jenkins for continuous integration and deployment. You can take a look
          at my GitHub profile to see some examples of my work and projects that
          I have contributed to. As a software engineer, I am always looking for
          new challenges and opportunities to apply my skills, and I am
          passionate about creating high-quality software that meets the needs
          of users and businesses alike always applying best practices.
          https://github.com/konsbe
        </div>
      </div>
    </div>
  );
}
