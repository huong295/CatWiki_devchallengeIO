import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import photo1 from "../AdditionInfor/assets/img/photo1.jpg"
type Props = {}
const styles={
  container:"px-5",
  image:"",
  wrapper:"bg-black px-10 rounded-t-[42px]",
  title:"font-mono text-xl text-white py-4 ",
  content:"font-mono text-white w-2/3",
  searchIcon:"flex py-4 h-[4rem]",
  inputText: "rounded-[7px]",
  icon:" text-xl py-2 ml-[-1.5rem]"


}

const AdditionInfor = (props: Props) => {
  return (
    <div className={styles.container}>

      <div className={styles.wrapper}>
        <div className={styles.title}>
          Cat wiki
        </div>
        <div className={styles.content}>
          Get to know more about your cat breed

        </div>
        <div className={styles.searchIcon}>
          <input className = {styles.inputText} type="text" placeholder="Search"></input>
          <div className ={styles.icon}>
            <AiOutlineSearch/>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default AdditionInfor