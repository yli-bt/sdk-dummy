
## Description

Nest-based dummy program to use the @goboomtown/sdk package to pull data from Journey enpoints

## Environment

The following much be set for the environment

```
OVATIONCXM_JOURNEY_BASE_API_URL=https://s-journeys-bf16bf5a-5xeedb3yvq-uc.a.run.app/
```

## Installation

```bash
$ npm install
```

## Running the app

If running from a local installation for development:

```bash
# export environment
$ export OVATIONCXM_JOURNEY_BASE_API_URL=https://s-journeys-bf16bf5a-5xeedb3yvq-uc.a.run.app/

# development
$ nest start --debug --watch

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

