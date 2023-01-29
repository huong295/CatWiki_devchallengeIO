import React from 'react'
import DetailPost from "../DetailPost/DetailPost"
import AdditionInfor from '../AdditionInfor/AdditionInfor'
type Props = {}

const Main = (props: Props) => {
  return (
    <div>
        
        <AdditionInfor/>
        <DetailPost/>
    </div>
  )
}

export default Main;