"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("convex/server");
var values_1 = require("convex/values");
exports.default = (0, server_1.defineSchema)({
    tasks: (0, server_1.defineTable)({
        text: values_1.v.string(),
        completed: values_1.v.boolean(),
    }),
    products: (0, server_1.defineTable)({
        name: values_1.v.string(),
        price: values_1.v.number(),
    }),
    users: (0, server_1.defineTable)({
        name: values_1.v.optional(values_1.v.string()),
        email: values_1.v.string(),
        image: values_1.v.string(),
        tokenIdentifier: values_1.v.string(),
        isOnline: values_1.v.boolean(),
    }).index("by_tokenIdentifier", ["tokenIdentifier"]),
    conversations: (0, server_1.defineTable)({
        participants: values_1.v.array(values_1.v.id("users")),
        isGroup: values_1.v.boolean(),
        groupName: values_1.v.optional(values_1.v.string()),
        groupImage: values_1.v.optional(values_1.v.string()),
        admin: values_1.v.optional(values_1.v.id("users")),
    }),
    messages: (0, server_1.defineTable)({
        conversation: values_1.v.id("conversations"),
        sender: values_1.v.string(), // should be string so that it doesn't throw errors in openai part ("ChatGPT")
        content: values_1.v.string(),
        messageType: values_1.v.union(values_1.v.literal("text"), values_1.v.literal("image"), values_1.v.literal("video")),
    }).index("by_conversation", ["conversation"]),
});
