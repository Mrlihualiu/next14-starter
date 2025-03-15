'use client'
import { useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Input, Radio, message } from 'antd'
import { getUsers, addUser, updateUserStatus } from '@/lib/action'
import styles from './userList.module.css'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [form] = Form.useForm()

  const fetchData = async () => {
    const data = await getUsers() 
    console.log(data)
    setUsers(data)
  }

  const handleAdd = () => {
    setModalOpen(true)
  }

  const reqAddUser = async () => {
    try {
      const value = await form.validateFields()
      const res = await addUser(value)
      if (res.succees) {
        fetchData()
        setModalOpen(false)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChangeStatus = async record => {
    const params = {
      ...record,
      status: record.status === 1 ? 0 : 1
    }
    const res = await updateUserStatus(params)
    if (res?.succees) {
      message.success('操作成功')
      fetchData()
    }
  }

  const handleEdit = record => {
    form.setFieldsValue(record)
    setModalOpen(true)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const tableColumn = [
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: '身份',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      render: isAdmin => {
        return isAdmin === 1 ? '管理员' : '普通用户'
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        return status === 1 ? '启用' : '禁用'
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          <div>
            <Button type='text' onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button type='text' onClick={() => handleChangeStatus(record)}>
              {record.status === 1 ? '禁用' : '启用'}
            </Button>
          </div>
        )
      }
    }
  ]

  return (
    <div>
      <div className={styles.headerBtns}>
        <Button onClick={handleAdd} type='primary'>
          添加用户
        </Button>
      </div>
      <Table dataSource={users} columns={tableColumn} />
      <Modal
        title='添加用户'
        open={isModalOpen}
        onOk={reqAddUser}
        onCancel={handleCancel}
      >
        <Form form={form} labelCol={{ span: 4 }}>
          <Form.Item
            label='姓名'
            name='username'
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item
            label='手机号'
            name='phone'
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item label='密码' name='password'>
            <Input placeholder='密码不填写，默认为手机号' />
          </Form.Item>
          <Form.Item
            label='身份'
            name='isAdmin'
            rules={[{ required: true, message: '请选择身份' }]}
          >
            <Radio.Group
              options={[
                { value: 1, label: '管理员' },
                { value: 2, label: '普通用户' }
              ]}
            />
          </Form.Item>
          <Form.Item
            label='状态'
            name='status'
            rules={[{ required: true, message: '请选择维修人员' }]}
          >
            <Radio.Group
              options={[
                { value: 1, label: '激活' },
                { value: 2, label: '禁用' }
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default UserList
