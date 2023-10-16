import React from 'react'
import Piechart from './Piechart'
import Table from './Table'
import Barchart from './Barchart'
import Navbar from '../NavBar/Navbar'

export default function Analysis() {
  return (
    <div>
    <Navbar/>
    <Table/>
    <Piechart/>
    <Barchart/>
    </div>
  )
}
