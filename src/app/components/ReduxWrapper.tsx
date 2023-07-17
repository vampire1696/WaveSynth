'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'

type Props = {children:React.ReactNode}

const ReduxWrapper = ({children}: Props) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxWrapper