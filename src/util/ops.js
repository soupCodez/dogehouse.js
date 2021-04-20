"use strict";
exports.__esModule = true;
exports.OpCode = void 0;
var OpCode;
(function (OpCode) {
    OpCode["AUTH_GOOD"] = "auth-good";
    OpCode["NEW_TOKENS"] = "new-tokens";
    OpCode["ERROR"] = "error";
    OpCode["BOT_JOINED_AS_SPEAKER"] = "you-joined-as-speaker";
    OpCode["BOT_JOINED_AS_PEER"] = "you-joined-as-peer";
    OpCode["BOT_LEFT_ROOM"] = "you_left_room";
    OpCode["BOT_IS_NOW_SPEAKER"] = "you-are-now-a-speaker";
    OpCode["NEW_PEER_SPEAKER"] = "new-peer-speaker";
    OpCode["JOIN_ROOM"] = "join_room";
    OpCode["ACTIVE_SPEAKER_CHANGE"] = "active_speaker_change";
    OpCode["USER_LEFT_ROOM"] = "user_left_room";
    OpCode["USER_JOINED_ROOM"] = "new_user_join_room";
    OpCode["NEW_CHAT_MESSAGE"] = "new_chat_msg";
    OpCode["MOD_CHANGED"] = "mod_changed";
    OpCode["SPEAKER_REMOVED"] = "speaker_removed";
    OpCode["CHAT_USER_BANNED"] = "chat_user_banned";
    OpCode["ASK_TO_SPEAK"] = "ask_to_speak";
    OpCode["HAND_RAISED"] = "hand_raised";
    OpCode["ADD_SPEAKER"] = "add_speaker";
    OpCode["SET_LISTENER"] = "set_listener";
    OpCode["GET_CURRENT_ROOM_USERS"] = "get_current_room_users";
    OpCode["GET_CURRENT_ROOM_USERS_DONE"] = "get_current_room_users_done";
    OpCode["SEND_ROOM_CHAT_MSG"] = "send_room_chat_msg";
    OpCode["DELETE_ROOM_CHAT_MESSAGE"] = "delete_room_chat_message";
    OpCode["MUTE"] = "mute";
    OpCode["FOLLOW"] = "follow";
    OpCode["CHANGE_MOD_STATUS"] = "change_mod_status";
    OpCode["GET_TOP_PUBLIC_ROOMS"] = "get_top_public_rooms";
    OpCode["GET_TOP_PUBLIC_ROOMS_DONE"] = "get_top_public_rooms_done";
    OpCode["GET_USER_PROFILE"] = "get_user_profile";
    OpCode["FETCH_DONE"] = "fetch_done";
    OpCode["JOIN_ROOM_DONE"] = "join_room_done";
    OpCode["GET_FOLLOW_LIST"] = "get_follow_list";
})(OpCode = exports.OpCode || (exports.OpCode = {}));
