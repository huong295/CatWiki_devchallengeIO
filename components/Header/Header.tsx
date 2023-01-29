import React from 'react'
import {FaCat} from 'react-icons/fa'
type Props = {}
const styles = { 
  wrapper: "flex",
container:"px-10 py-4 md:px-16",
title:"font-mono text-base mx-4",
avatar:""
}

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.title}>
            Calwig
        </div>
        <div className={styles.avatar}>
            <FaCat/>
        </div>
      </div>

    </div>
  )
}
export default Header;