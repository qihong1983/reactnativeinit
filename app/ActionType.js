/**
 * create by AbyssKitty on 2018/01/18
 * 所有的Action的type的集合
 */

//export const LOGIN_DENGLU = 'login_denglu'; //初始化状态 
export const ACTION_GETWEATHER_INIT = 'action_getweather_init'; //
export const ACTION_GETWEATHER_SUCCESS = 'action_getweather_success'; //
export const TABBARSTATUS = 'tabbarstatus';

/**
 * 全局
 */
export const COMMON_ACCESS_TOKEN = 'assess_token'; //token
export const COMMON_EXPIRES_IN = 'expires_in'; //token过期时间
export const COMMON_EXPIRES_MAX = 'expires_max' //过期时间

/**
 * Main
 */
export const MAIN_SELECTEDTAB = 'selectTab'; //切换tabBar

/**
 * 首页Home
 */
export const HOME_TAB_SELECTED = 'tab_selected'; // 选重
export const HOME_TAB_DATA = 'tab_data'; //数据

/**
 * 页面注册Register
 */
// 注册类型(mobile|email,必填)
export const REGISTER_TYPE = 'type'; //
// 国家ID(type:mobile时必填)
export const REGISTER_COUNTRY_ID = 'country_id'; //
// 手机号(type:mobile时必填)
export const REGISTER_MOBILE = 'mobile';
// 邮箱(type:email时必填;4-255位)
export const REGISTER_EMAIL = 'email';
// 验证码(必填,4-255位)
export const REGISTER_CODE = 'code';
// 密码(最小6位,必填)
export const REGISTER_PASSWORD = 'password';
// 重复密码(必填)
export const REGISTER_PASSWORD_CONFIRMATION = 'password_confirmation';
// 邀请码 （选填）
export const REGISTER_INVITE_CODE = 'invite_code';
// 来源（ 选填）
export const REGISTER_SOURCE = 'source';
// 国籍信息
export const REGISTER_COUNTRY_DATA = 'country_data';
// 手机号前缀
export const REGISTER_NUMBER_AREA = 'number_area';
// 验证码
export const REGISTER_VALID_TEXT = 'valid_text';
// 验证码
export const REGISTER_VALID_STATUS = 'valid_status';
// 读秒
export const REGISTER_VALID_SECOND = 'valid_second';

/**
 * 登录页面Login
 */
//client_id(2)
export const LOGIN_CLIENT_ID = 'client_id';
//client_secret(0Xq3xPo255u69f01v1jWpzC7s15hr3AzjvLkCTZD)
export const LOGIN_CLIENT_SECRET = 'client_secret';
//用户名
export const LOGIN_USERNAME = 'username';
//密码
export const LOGIN_PASSWORD = 'password';