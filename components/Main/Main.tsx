import React from 'react'
import ListPost from "../ListPost/ListPost"
import AdditionInfor from '../AdditionInfor/AdditionInfor'
type Props = {}

const Main = (props: Props) => {
  return (
    <div>
        <ListPost/>
        <AdditionInfor/>
    </div>
  )
}

export default Main;