/* 初始化用户 */
INSERT INTO `nw_user` (
    `id`, /* ID */
    `duty_id`, /* 职务 ID */
    `account`, /* 账户 */
    `cipher`, /* 密码 */
    `nickname` /* 昵称 */
) VALUES
    (1, 1, 'tester', UNHEX(SHA2('tester', 256)), '测试员');