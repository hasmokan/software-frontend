import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    /**
     * @description:用户的账号信息的保存
     */
    state: () => ({
        userId: '123456' as string,
        password: '123456' as string
    }),
    getters: {
        getUserName: (userId) => {
            return userId
        },
        getPassword: (password) => {
            return password
        }
    },

    actions: {
        // action内部不能使用箭头函数
        registerId(id: string) {
            this!.userId = id
        }
    }
})
