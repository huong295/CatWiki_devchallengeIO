import React from 'react'

type Props = {}
const styles ={
    container:"",
    banner:"bg-[url('/assets/img/photo1.jpg')] ",
    mainList:""
}

const ListPost = (props: Props) => {
  return (
   <div className={styles.container}>
        <div className={styles.banner}>

        </div>
        <div className={styles.mainList}></div>
   </div>
  )
}

export default ListPost;