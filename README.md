# Typescript 周り

https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/
チートシート
tsfc とか入れればいい感じのスニペットがでる。

# npm update 周り

npm outdated で確認して、
npm-check-updates インスコしてまた確認して(ncu)
ncu -u で package.json 自体を更新。
@chakuraui/icons でエラー吐かれるので、
npm update PACKAGE_NAME で更新したり
--force で強制的に更新したり。

CHAKURA UI + TYPESCRIPT の Example は React がまだ v17 だったりする。

# Jest Install と V28 によるエラー周り

https://nextjs.org/docs/testing#jest-and-react-testing-library
Next.js 公式(これだと v28 がインスコされてエラー泊)

https://zenn.dev/miruoon_892/articles/e42e64fbb55137
Typescript で Next.js のテストを書いている人ただし v27

https://zenn.dev/keita_hino/articles/488d31e8c4a240
v27 から v28 に上げることで発生するエラーについて

> ● Validation Error:
> Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.
> Configuration Documentation:
> https://jestjs.io/docs/configuration
