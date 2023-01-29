import React from 'react'

type Props = {}
const styles ={
    container:"",
    nameList:"",
   
    iconLine:"",
    nameMainList:"",
    mainList:"",
}

const ListPost = (props: Props) => {
  return (
   <div className={styles.container}>
        <div className={styles.nameList}>Most Searched Breeds

        </div>
        <div className={styles.iconLine}>___________</div>
        <div className={styles.nameMainList}></div>
        <div className={styles.mainList}></div>
   </div>
  )
}

export default ListPost;