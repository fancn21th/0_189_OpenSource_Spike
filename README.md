# How to publish

[![travis build](https://img.shields.io/travis/fancn21th/0_189_OpenSource_Spike.svg?style=flat-square)](https://app.travis-ci.com/github/fancn21th/0_189_OpenSource_Spike/builds)
[![github downloads](https://img.shields.io/github/downloads/fancn21th/0_189_OpenSource_Spike/total?logo=Github)](https://github.com/fancn21th/0_189_OpenSource_Spike)
![]()
![]()

## Version

- `major.minor.patch`
  - `major`: breaking changes
  - `minor`: new features
  - `patch`: bug fixes

## Common Steps

- newly release

  - `npm adduser`
  - `npm publish`

- daily release
  - `git commit changes`
  - `update version in package.json manually`
  - `git tag xxx.xxx.xxx`
  - `git push --tags`
  - `npm publish`
- beta release
  - `git commit changes`
  - `update version in package.json manually`
    - `xxx.xxx.xxx-beta.x`
  - `git tag xxx.xxx.xxx-beta.x`
  - `git push --tags`
  - `npm publish --tag beta`

## Common Usage

- install commonly
  - `npm install xxxx`
- install beta

  - `npm install xxxx@beta`

- pack and check
  - `npm pack`
