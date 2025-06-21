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
    alertEnqueue(alert: AlertTypes) {
      this.queue.push(alert)

      setTimeout(() => {
        this.queue = this.queue.filter(({ uuid }) => alert.uuid !== uuid)
      }, 2000)
    },
  },
})

export const useAlertAction = () => {
  const { alertEnqueue } = useAlertStore()
  return { alertEnqueue }
}
