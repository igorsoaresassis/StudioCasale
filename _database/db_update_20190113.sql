ALTER TABLE `user`
  ADD COLUMN `user_status`  tinyint(1) NOT NULL DEFAULT 1 AFTER `user_register_date`;