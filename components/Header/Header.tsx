import React from 'react'
import {FaCat} from 'react-icons/fa'
type Props = {}
const styles = { 
container:"flex",
title:"font-mono text-base mx-4 my-4 ml-8",
avatar:" my-4"
}

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Calwig
        </div>
        <div className={styles.avatar}>
            <FaCat/>
        </div>

    </div>
  )
}
export default Header;