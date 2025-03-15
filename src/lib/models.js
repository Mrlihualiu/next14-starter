import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 20,
    },
    phone: {
      type: String,
      required: true,
      unique: true, // 数据库中手机号唯一
      min: 11,
      max: 11,
    },
    password: {
      type: String,
    },
    // 身份 1: 管理员, 2: 普通用户
    isAdmin: {
      type: Number,
      required: true,
      default: 2,
      validate: {
        validator: function (v) {
          return [1, 2].includes(v)
        },
        message: props => `${props.value}不属于身份值!`
      },
      enum: {
        values: [1, 2],
        message: "身份值必须是1或2",
      }
    },
    // 状态 1: 启用, 2: 禁用
    status: {
      type: Number,
      default: 1,
      required: true,
      enum: {
        values: [1, 2],
        message: "状态值必须是1或2",
      }
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const listSchema = new mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    manhour: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    personnel: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const List = mongoose.models?.List || mongoose.model("List", listSchema);
