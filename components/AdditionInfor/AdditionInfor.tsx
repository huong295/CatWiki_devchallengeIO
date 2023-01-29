import React from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import photo1 from "../../assets/img/photo1.jpg";
type Props = {};
const styles = {
  container: "px-5",
  image: "",
  wrapper: "bg-black px-10 rounded-t-[42px]",
  title: "font-mono text-xl text-white py-4 ",
  content: "font-mono text-white w-2/3",
  searchIcon: "flex py-4 h-[4rem]",
  inputText: "rounded-[7px]",
  icon: " text-xl py-2 ml-[-1.5rem]",
  contentList: "",
  nameList: "text-sm font-mono",
  nextWrapper: " py-4 rounded-b-[42px] px-10 bg-[#E3E1DC]",

  iconLine: "font-bold mt-[-8px]",
  nameMainList: "font-bold text-xl py-4",
  mainList: "grid grid-cols-2 gap-2",
  namePost: "font-bold font-mono py-2",
  detailList: "",
  images:"rounded-xl", 
};

const AdditionInfor = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Cat wiki</div>
        <div className={styles.content}>
          Get to know more about your cat breed
        </div>
        <div className={styles.searchIcon}>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Search"
          ></input>
          <div className={styles.icon}>
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      <div className={styles.nextWrapper}>
        <div className={styles.nameList}>Most Searched Breeds</div>
        <div className={styles.iconLine}>___________</div>
        <div className={styles.nameMainList}>
          66+ Breeds For you to discover
        </div>
        <div className={styles.mainList}>
          
          
          <div className={styles.detailList}>
            <Image className= {styles.images} src={photo1} alt=""></Image>
            <div className={styles.namePost}>Pengal</div>
          </div>
          <div className={styles.detailList}>
            <Image className= {styles.images} src={photo1} alt=""></Image>
            <div className={styles.namePost}>Pengal</div>
          </div>
          <div className={styles.detailList}>
            <Image className= {styles.images} src={photo1} alt=""></Image>
            <div className={styles.namePost}>Pengal</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdditionInfor;
