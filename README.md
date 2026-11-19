[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/daily-globe-render/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/daily-globe-render/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

## What it does

Daily Globe Render copies a deterministically-rendered news poster to the output directory. Every run produces identical bytes, with no network access required. The poster captures the world's news for Tuesday 17 November 2026 in a single front-page image.

## The image

The poster presents a complete newsday snapshot in three sections:

- **Masthead**: The Daily Globe header and publication date
- **Six-continent map band**: Global coverage visualization spanning all inhabited continents  
- **Headline cards**: 30 regional headlines organized in three columns, representing stories across regions and topics

This layout mirrors a traditional front page, bringing the day's news together in one comprehensible visual.

## How to run

```bash
node main.ts
```

The program writes `entry.png` to the output directory. Set `MAKEFUN_OUTPUT_DIR` to customize the location:

```bash
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

Inside the grading container, output automatically goes to `/output/entry.png`.

## Determinism

Two runs on the same machine produce byte-for-byte identical output. The program uses `fs.copyFileSync` to directly copy the pre-rendered image file committed to the repository, with no transformations or non-deterministic operations.

## License

MIT — see LICENSE file in this repository.
