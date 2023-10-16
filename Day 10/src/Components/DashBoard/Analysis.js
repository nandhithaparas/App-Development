import React from 'react'
import Piechart from './Piechart'
import Table from './Table'
import Barchart from './Barchart'
import Dashboard from './Dashboard'

export default function Analysis() {
  return (
    <div>
    <Dashboard/>
    <Table/>
    <Piechart/>
    <Barchart/>
    </div>
  )
}
