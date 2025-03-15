import { roomOptions, personnelOptions } from '@/dataConfig'

export const tableColumn = [
  {
    title: '维修车间',
    dataIndex: 'room',
    key: 'room',
    render: room => {
      return roomOptions.find(option => option.value === room)?.label
    }
  },
  {
    title: '维修起始时间',
    dataIndex: 'startTime',
    key: 'startTime'
  },
  {
    title: '维修工时',
    dataIndex: 'manhour',
    key: 'manhour'
  },
  {
    title: '维修内容',
    dataIndex: 'content',
    key: 'content'
  },
  {
    title: '维修人员',
    dataIndex: 'personnel',
    key: 'personnel',
    render: personnel => {
      return personnelOptions.find(option => option.value === personnel)
        ?.label
    }
  }
]
