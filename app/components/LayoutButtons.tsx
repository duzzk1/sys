'use client'
import { NextPage } from 'next'
import { AddLayout } from './AddLayout'
import { RemoveLayout } from './RemoveLayout';

interface Props {}
const DeleteLayout = () => {
  console.log('teste');
}

const LayoutButtons: NextPage<Props> = ({}) => {
  return (
    <div className="flex max-w-full gap-2">
        <AddLayout />    
        <RemoveLayout />    
    </div>
  )
}

export default LayoutButtons