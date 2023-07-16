/*
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-14 08:42:45
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-16 07:51:40
 * @FilePath: \frontend\src\stores\userStore.ts
 * @Description: 登陆信息的存储
 * */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    /**
     * @description:用户的账号信息的保存
     */
    state: () => ({
        userId: '' as string,
        password: '' as string
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
