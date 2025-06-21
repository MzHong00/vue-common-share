import { defineStore } from 'pinia'

export interface AlertTypes {
  uuid: string
  message: string
  type: 'success' | 'error'
}

interface AlertState {
  queue: AlertTypes[]
}

export const useAlertStore = defineStore('alert', {
  state: (): AlertState => ({
    queue: [],
  }),
  actions: {
    alertEnqueue(alert: Omit<AlertTypes, 'uuid'>) {
      const uuid = Math.floor(Math.random() * 100).toString()
      this.queue.push({ uuid, ...alert })

      setTimeout(() => {
        this.queue = this.queue.filter((ele) => uuid !== ele.uuid)
      }, 2000)
    },
  },
})

// Alert 기능을 사용하기 위한 액션 함수
export const useAlertAction = () => {
  const { alertEnqueue } = useAlertStore()
  return { alertEnqueue }
}
