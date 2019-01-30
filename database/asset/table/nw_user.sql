/* 用户表 */
CREATE TABLE IF NOT EXISTS `nw_user` (
    `id` INT(10) NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `account` VARCHAR(31) NOT NULL COMMENT '账户',
    `cipher` BINARY(32) NOT NULL COMMENT '密码',
    `nickname` VARCHAR(31) NOT NULL COMMENT '昵称',
    `createtime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `ACCOUNT_UNIQUE` (`account`),
    KEY `CREATETIME_INDEX` (`createtime`)
) ENGINE='InnoDB' CHARSET='utf8mb4' DEFAULT COLLATE='utf8mb4_unicode_ci' COMMENT='用户表';
