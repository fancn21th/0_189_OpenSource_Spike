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
