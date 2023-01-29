import React from "react";
import { FaCat } from "react-icons/fa";
import { IoLogoWordpress } from "react-icons/io";
type Props = {};
const styles = {
    wrapper: "px-5",
  container: "bg-black rounded-t-[42px] h-[6rem]",
  name: "flex justify-center",
  title: "font-mono text-base mx-4 my-4 text-white",
  avatar: " my-4 text-white",
  infor: "flex justify-center",
  icon: "text-white text-xl",
  content: "text-white text-sm",
};
const Footer = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.name}>
          <div className={styles.title}>Calwig</div>
          <div className={styles.avatar}>
            <FaCat />
          </div>
        </div>
        <div className={styles.infor}>
          <div className={styles.icon}>
            <IoLogoWordpress />
          </div>
          <div className={styles.content}>
            created by username - devChallenge.io 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
