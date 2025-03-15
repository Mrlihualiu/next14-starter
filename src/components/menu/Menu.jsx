'use client'
import { Menu } from 'antd'
import { useRouter } from 'next/navigation'

const menuOptions = [
  {
    key: 'addList',
    label: '添加工单'
  },
  {
    key: 'userList',
    label: '用户列表'
  },
  {
    key: 'ticketsList',
    label: '工单列表'
  }
]

const SlierMenu = () => {
  const router = useRouter()
  const handleMenu = ({ key }) => {
    router.push(`/${key}`)
  }

  return (
    <Menu
      theme='dark'
      mode='inline'
      items={menuOptions}
      onClick={handleMenu}
      defaultSelectedKeys={['addList']}
      style={{ height: '100%' }}
    />
  )
}

export default SlierMenu
