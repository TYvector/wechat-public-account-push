/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7ec432a9333bebef',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b5ce5f37611641ceace72aa4a07802e3',

  PROVINCE: '浙江',
  CITY: '金华',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o96kG57IhQ43Q2t6W21M-D1ubgY0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'HlIh62RJp8qsHj49uZmR0SXGbQTMXipT9vecGbkMU5s',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-23',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2003', date: '03-23',
        }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '_g5uWcLple5pF7BTktsCewu4qdkmSESxfJBT4aPoNG8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o96kG58Yn3pmif4oMO81AMfVoDFU',
    }
  ],

}

module.exports = USER_CONFIG

