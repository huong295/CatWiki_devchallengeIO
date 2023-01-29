import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import photo1 from "../../assets/img/photo1.jpg";
type Props = {};
const styles = {
  container: "px-10",
  wrapper: "md:flex",
  title: "text-[45px] py-4 md:py-16 font-mono font-bold",
  content: "font-serif md:w-2/3",
  readMore: "font-mono flex py-4",
  iconArrow: "py-1 px-2",
  text: "",
  images: "rounded-xl my-4",
  leftContent:"",
 
};

const ListPost = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>

        <div className={styles.title}>Why should you have a cat?</div>

        <div className={styles.content}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </div>
        <div className={styles.readMore}>
          <div className={styles.text}>READ MORE</div>
          <div className={styles.iconArrow}>
            <AiOutlineArrowRight />
          </div>
        </div>
        </div>
        
        <div className={styles.images}>
          <Image className={styles.images} src={photo1} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default ListPost;
