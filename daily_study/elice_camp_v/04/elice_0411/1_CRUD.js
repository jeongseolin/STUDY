// app.js
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dayjs = require('dayjs');

const indexRouter = require('./routes');
const postsRouter = require('./routes/posts');

//1. mongoose.connect()를 사용해서 mongodb 데이터베이스를 연결하세요.
mongoose.connect("mongodb://localhost:27017/simple-board");

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;







// post.js - schema
const { Schema } = require("mongoose");

const shortId = require("./types/short-id");
const PostSchema = new Schema(
  {
    shortId,
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "작성자",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PostSchema;






// posts.js - router
const { Router } = require("express");
const { Post } = require("../models");

const router = Router();

router.get("/", async (req, res, next) => {
  if (req.query.write) {
    res.render("post/edit");
    return;
  }

  // 게시글 목록
  const posts = await Post.find({});

  res.render("post/list", { posts });
});

router.get("/:shortId", async (req, res, next) => {
  const { shortId } = req.params;
  // shortId 로 게시글 찾기

  const post = await Post.findOne({ shortId });

  if (req.query.edit) {
    res.render("post/edit", { post });
    return;
  }

  res.render("post/view", { post });
});

router.post("/", async (req, res, next) => {
  const { title, content } = req.body;

  try {
    if (!title || !content) {
      throw new Error("제목과 내용을 입력 해 주세요");
    }

    // 게시글 생성
    const post = await Post.create({
      title,
      content,
    });

    res.redirect(`/posts/${post.shortId}`);
  } catch (err) {
    next(err);
  }
});

router.post("/:shortId", async (req, res, next) => {
  const { shortId } = req.params;

  const { title, content } = req.body;

  try {
    if (!title || !content) {
      throw new Error("제목과 내용을 입력 해 주세요");
    }

    // shortId 로 게시글 수정
    await Post.updateOne(
      { shortId },
      {
        title,
        content,
      }
    );
    res.redirect(`/posts/${shortId}`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
