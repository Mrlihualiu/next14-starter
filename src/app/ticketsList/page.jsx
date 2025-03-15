'use client'
import { useEffect, useState } from 'react'
import { Table } from 'antd'
import { getTickets } from '@/lib/action'
import { tableColumn } from './tableConfig'

const TicketsList = () => {
  const [tickets, setTickets] = useState([])

  const fetchData = async () => {
    const data = await getTickets()
    setTickets(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Table dataSource={tickets} columns={tableColumn} />
    </div>
  )
}

export default TicketsList
