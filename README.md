# How to publish

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
