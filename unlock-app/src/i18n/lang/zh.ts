const zh = {
  common: {
    welcome: '欢迎来到Unlock Protocol',
    password: '密码',
    guild: '公会',
    captcha: '验证码',
    promocode: '促销代码',
    promo_code_capped: '促销代码',
    free: '免费',
    continue: '继续',
    continuing: '正在继续',
    next: '下一个',
    sign_message: '签署信息',
    email: '电子邮件',
    wallet: '钱包',
    change: '更改',
    description: {
      enter_email: '输入将接收会员NFT的电子邮件地址',
      enter_wallet: '输入将接收会员NFT的钱包地址',
      email: '将接收会员NFT的电子邮件地址',
      wallet: '将接收会员NFT的钱包地址',
    },
    pay_via_card: '通过卡支付',
    payment_method: '使用卡，谷歌支付或苹果支付。',
    additional_fees: '可能会产生额外费用。',
    pay_with: '支付方式',
    your_balance: '您的余额',
    on: '在',
    use_your_card: '使用Crossmint与您的卡片。',
    pay_via_stripe: '通过Stripe支付',
    swap: '交换',
    for: '为了',
    and: '和',
    pay: '支付',
    decent: '体面',
    ready_to_get_wallet: '准备好使用加密货币购买这个会员资格的自己的钱包了吗？',
    click_here: '点击这里',
    skip: '跳过',
    quantity: '数量',
    duration: '持续时间',
    sold_out: '售罄',
    buy: '购买',
    memberships: '会员资格',
    memberships_at_once: '一次性会员资格',
    buy_more: '购买更多',
    credit_card_fees: '信用卡费用',
    learn_more: '了解更多',
    claiming: '认领',
    claim: '要求',
    pay_using_crypto: '使用加密货币支付',
    paying_using_crypto: '使用加密货币支付',
    confirming_payment: '确认付款',
    restart: '重新开始',
    renew: '续订',
    left: '剩下',
    valid: '有效',
    expired: '过期',
    select: '选择',
    choose_quantity: '选择数量',
    recipient: '接收者',
    sign_message_title: '签名消息标题',
    payment_method_title: '支付方式标题',
    add_card: '添加卡片',
    confirm: '确认',
    enter_email: '输入电子邮件',
    signed_in: '已登录',
  },
  warnings: {
    email_required: '需要电子邮件',
    wallet_required: '需要钱包地址',
    address_max: '地址已经持有最大数量的会员资格。',
  },
  errors: {
    problem_address: '使用此地址有问题。试试另一个。',
    no_wallet: '没有钱包地址？',
    transaction_failed: '交易失败',
    transaction_error: '准备交易时出错。',
    wrong_password: '密码错误...',
    gas_not_enough: '你没有足够的',
    for_gas_fee: '用于燃气费',
    credit_card_not_enabled: '此会员资格未启用信用卡',
    purchase_more_fail: '您不能购买超过',
    purchase_less_fail: '您不能购买少于',
    payment_error: '尝试捕获您的支付时出错。请与您的金融机构核实。',
    payment_failure: '确认支付失败',
    payment_intent_missing: '缺少支付意图。请重试。',
    stripe_loading_fail: '加载Stripe时出现问题',
    creating_payment_failed: '创建支付意图失败',
    claiming_failed: '未返回交易哈希。认领会员资格失败。',
    transaction_rejected: '交易被拒绝',
    insufficient_funds_1: '你没有足够的',
    insufficient_funds_2: '支付交易费用',
    insufficient_funds_3: '完成此次购买',
    membership_exist: '您已经拥有此会员资格',
    membership_expired: '您的会员资格已过期',
  },
  captcha: {
    Solve_the_captcha: '解决验证码以继续',
    Captcha: '验证码',
  },
  guild: {
    wallet_warning_1: '您的钱包地址 ',
    wallet_warning_2: '不在此类门票的批准与会者名单上',
    farcon: 'FarCon',
    class_of_tickets: '门票类别。',
    check: '请检查您是否已获批准，并使用与您的Farcaster账户关联的地址。',
    check_again: '再次检查',
    wallet_approve: '您的钱包地址在批准与会者名单上！',
    membership_restrict: '此锁的会员资格仅限于属于',
    recipient_restrict: '您选择的一些接收者不是公会的成员。',
    guild: '公会',
    join: '加入公会',
  },
  minting: {
    minting_nft: '铸造NFT',
    airdrop: '我们将空投这个免费会员资格给您！',
    claim_membership: '免费认领会员资格',
  },
  password: {
    password_title: '密码',
    enter_password: '输入密码',
    description: '您需要输入密码来购买钥匙。如果密码错误，购买将失败。',
    submit_password: '提交密码',
  },
  loading: {
    loading_more: '加载更多支付选项...',
  },
  promo: {
    discount: '折扣',
    code_expired: '代码已过期',
    enter_promo_code: '输入促销代码',
    enter_promo_code_description: '如果您有促销代码以获得折扣，请立即输入。',
  },
  success: {
    viola: '瞧！这已经解锁了！',
    block_explorer: '在区块浏览器中查看',
    add_to_google_wallet: '添加到Google钱包',
    add_to_apple_wallet: '添加到Apple钱包',
    apple_wallet: 'Apple钱包',
    google_wallet: 'Google钱包',
  },
}
export default zh
export type Translations = typeof zh
