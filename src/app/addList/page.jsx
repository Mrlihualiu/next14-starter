'use client'
import { useState } from 'react'
import { addList } from '@/lib/action'
import { Form, Button, Input, Select, TimePicker, message } from 'antd'
import styles from './addList.module.css'
import { roomOptions, personnelOptions } from '@/dataConfig'

const AddTikect = () => {
  const [loading, setloading] = useState(false)
  const onFinish = async values => {
    setloading(true)
    const res = await addList(values)
    setloading(false)
    if (res?.error || res === undefined) {
      message.error(res?.error || '发生错误')
    } else {
      message.success('添加成功')
    }
  }

  return (
    <div className={styles.list}>
      <h1 className={styles.listTitle}>添加工单</h1>
      <Form onFinish={onFinish} labelCol={{ span: 4 }}>
        <Form.Item
          label='维修车间'
          name='room'
          rules={[{ required: true, message: '请选择维修车间' }]}
        >
          <Select options={roomOptions} placeholder='请选择维修车间' />
        </Form.Item>
        <Form.Item
          label='维修起始时间'
          name='startTime'
          rules={[{ required: true, message: '请填写维修起始时间' }]}
        >
          <TimePicker format='HH:mm' placeholder='维修起始时间' />
        </Form.Item>
        <Form.Item
          label='维修工时'
          name='manhour'
          rules={[{ required: true, message: '请填写维修工时' }]}
        >
          <Input type='number' placeholder='请填写维修工时' />
        </Form.Item>
        <Form.Item
          label='维修内容'
          name='content'
          rules={[{ required: true, message: '请填写维修内容' }]}
        >
          <Input.TextArea rows={4} placeholder='请填写维修内容' />
        </Form.Item>
        <Form.Item
          label='维修人员'
          name='personnel'
          rules={[{ required: true, message: '请选择维修人员' }]}
        >
          <Select options={personnelOptions} placeholder='维修人员' />
        </Form.Item>
        <Form.Item label={null}>
          <Button type='primary' htmlType='submit' loading={loading}>
            保存工单
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddTikect
