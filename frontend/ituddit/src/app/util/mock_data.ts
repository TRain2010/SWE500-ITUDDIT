import { Type, Post, Comment } from './type';
import { hasUncaughtExceptionCaptureCallback } from 'process';

const comment1: Comment = {
  id: 1,
  auther: 'hxiao',
  content: 'hello, this is the first comment',
  timestamp: 1592166824280,
  isReplayTo: undefined,
  rate: 5,
};

const comment2: Comment = {
  id: 2,
  auther: 'hxiao',
  content: 'hello, this is a replied comment',
  timestamp: 1592166825280,
  isReplayTo: comment1,
  rate: 5,
};

const comment3: Comment = {
  id: 3,
  auther: 'xxx',
  content: 'hello, this is a comment without replay',
  timestamp: 1592166827280,
  isReplayTo: undefined,
  rate: 5,
};

const comment4: Comment = {
  id: 4,
  auther: 'hxiao',
  content: 'hello, this is the last comment',
  timestamp: 1592166854280,
  isReplayTo: comment2,
  rate: 5,
};

export const DATA: Post[] = [
    {
      id: 1,
      auther: 'use name',
      content: 'Country item languages field is an Array in JSON files to easily count and match items with a Language item. But currency and phone calling codes may be a comma-separated String.',
      comments: [ comment1, comment2, comment3, comment4 ],
      group: 'r/gaming',
      logo: 'cake',
      timestamp: 1592166824280,
      title: 'a title holder',
      type: Type.TEXT,
      rate: 32,
    },
    {
      id: 2,
      auther: 'use name',
      comments: [ comment1, comment3],
      content: 'Country item languages field is an Array in JSON files to easily count and match items with a Language item. But currency and phone calling codes may be a comma-separated String. Country item languages field is an Array in JSON files to easily count and match items with a Language item. But currency and phone calling codes may be a comma-separated String. Country item languages field is an Array in JSON files to easily count and match items with a Language item. But currency and phone calling codes may be a comma-separated String.',
      group: 'r/gaming',
      logo: 'deck',
      timestamp: 1592166824280,
      title: 'a title holder',
      type: Type.TEXT,
      rate: 151000,
    }
  ];