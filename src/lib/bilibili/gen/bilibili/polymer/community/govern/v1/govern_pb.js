// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/polymer/community/govern/v1/govern.proto (package bilibili.polymer.app.govern.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum bilibili.polymer.app.govern.v1.AntiHarassmentLimit
 */
export const AntiHarassmentLimit = proto3.makeEnum(
  "bilibili.polymer.app.govern.v1.AntiHarassmentLimit",
  [
    {no: 0, name: "DefaultLimit"},
    {no: 1, name: "FollowLimit"},
    {no: 2, name: "ReFollowLimit"},
    {no: 3, name: "TwoWayFollow"},
    {no: 4, name: "AllLimit"},
  ],
);

/**
 * @generated from enum bilibili.polymer.app.govern.v1.BizType
 */
export const BizType = proto3.makeEnum(
  "bilibili.polymer.app.govern.v1.BizType",
  [
    {no: 0, name: "InvalidBizType"},
    {no: 1, name: "Im"},
    {no: 2, name: "Dm"},
    {no: 3, name: "Reply"},
    {no: 4, name: "ReplyMe"},
    {no: 5, name: "LikeMe"},
    {no: 6, name: "AtMe"},
  ],
);

/**
 * @generated from message bilibili.polymer.app.govern.v1.AntiHarassmentInfo
 */
export const AntiHarassmentInfo = proto3.makeMessageType(
  "bilibili.polymer.app.govern.v1.AntiHarassmentInfo",
  () => [
    { no: 1, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "follow_time_limit_second", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "expire_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.polymer.app.govern.v1.AntiHarassmentSetting
 */
export const AntiHarassmentSetting = proto3.makeMessageType(
  "bilibili.polymer.app.govern.v1.AntiHarassmentSetting",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "auto_limit", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "im", kind: "message", T: AntiHarassmentInfo },
    { no: 4, name: "reply", kind: "message", T: AntiHarassmentInfo },
    { no: 5, name: "dm", kind: "message", T: AntiHarassmentInfo },
    { no: 6, name: "reply_me", kind: "message", T: AntiHarassmentInfo },
    { no: 7, name: "like_me", kind: "message", T: AntiHarassmentInfo },
    { no: 8, name: "at_me", kind: "message", T: AntiHarassmentInfo },
    { no: 9, name: "auto_limit_expire_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.polymer.app.govern.v1.LoadAntiHarassmentSettingsReq
 */
export const LoadAntiHarassmentSettingsReq = proto3.makeMessageType(
  "bilibili.polymer.app.govern.v1.LoadAntiHarassmentSettingsReq",
  () => [
    { no: 1, name: "biz_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "recv_mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "send_mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.polymer.app.govern.v1.LoadAntiHarassmentSettingsRsp
 */
export const LoadAntiHarassmentSettingsRsp = proto3.makeMessageType(
  "bilibili.polymer.app.govern.v1.LoadAntiHarassmentSettingsRsp",
  () => [
    { no: 1, name: "anti_harassment_ret", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "anti_harassment_setting", kind: "message", T: AntiHarassmentSetting },
    { no: 3, name: "show_window", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message bilibili.polymer.app.govern.v1.StoreAntiHarassmentSettingsReq
 */
export const StoreAntiHarassmentSettingsReq = proto3.makeMessageType(
  "bilibili.polymer.app.govern.v1.StoreAntiHarassmentSettingsReq",
  () => [
    { no: 1, name: "biz_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "anti_harassment_setting", kind: "message", T: AntiHarassmentSetting },
  ],
);

/**
 * @generated from message bilibili.polymer.app.govern.v1.StoreAntiHarassmentSettingsRsp
 */
export const StoreAntiHarassmentSettingsRsp = proto3.makeMessageType(
  "bilibili.polymer.app.govern.v1.StoreAntiHarassmentSettingsRsp",
  [],
);
