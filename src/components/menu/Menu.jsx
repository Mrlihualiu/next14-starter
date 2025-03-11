import { Menu } from 'antd';
const menuOptions = [
  {
    key: 'addList',
    label: '添加工单',
    routePath: '/addList',
  },
  {
    key: 'userList',
    label: '用户列表',
    routePath: '/userList',
  },
  {
    key: 'ticketsList',
    label: '工单列表',
    routePath: '/ticketsList',
  }
]

export const SlierMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={menuOptions}
      defaultSelectedKeys={['addList']}
    />
  )
}
