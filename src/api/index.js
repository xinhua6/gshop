import ajax from './ajax.js'

// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 获取食品的分类列表
export const reqFoodCategories = () => ajax('/index_category')

// 根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})

// 账号密码登录
export const reqPwdLogin = (name,pwd,captcha) => ajax('/api/login_pwd',{
    name,
    pwd,
    captcha
},'POST')

// 获取短信验证码
export const reqSendCode = phone => ajax('/api/sendcode',{phone})

// 手机号验证码登录
export const reqSmsLogin = (phone,code) => ajax('/api/login_sms',{phone,code},'POST')

// 获取用户信息
export const reqUser = () => ajax('/api/userinfo')

// 请求登出
export const reqLogout = () => ajax('/api/logout')
