#!/usr/bin/env sh

# create db directory
[ ! -d "./db_ganache" ] && mkdir db_ganache

# start ganache
npx ganache-cli \
    --db "db_ganache/" \
    --mnemonic "width whip dream dress captain vessel mix drive oxygen broken soap bone" \
    --gasLimit 0xfffffffffff \
    --port 8545 \
    --networkId 5777 \
    --host 0.0.0.0 \
    --account="0x0cf82bd6fc4a02b105b3091e50d0b81f3c59701cbb1d2484ef6e6a019271cc23,1000000000000000000000000" \
    --account="0xc0b6d9a09b658902fe56bc8da0144d5656c1ef6182bca359b8ae55c5784a9267,10000000" \
    --account="0x9c3626fe4253099f52aac23727397b344943dfe3ad4e84e0b6a5f90afcf945a6,10000000" \
    --account="0xd7e8587464a9d22242935ff92004e035f46a0750bf4d7be0519440a1ffb5f4ae,10000000" \
    --account="0x146016addc61f149cfad8c9602682aa482947129f9cd73f334f3733f0e97fbea,10000000" \
    --account="0xa147a8afad9ce901ab93e8735031c3f802f59829f66ca5e0adc6f35abe3ba9af,10000000" \
    --account="0xcc88d3433297f01387d0072b96d53fbb2e5d5a83d6cda10703c6ee080679a8cb,10000000" \
    --account="0x4205ae31cff9445549a79d3f679eccc4bff99f5997b92fbc51833fde0cb5ef7c,10000000" \
    --account="0xe582ac1de2bd2d83c13a5800cb8d8588666211314581098a665cefc0785d4e22,10000000" \
    --account="0x2f4d3d732cc2fc43f56b6b0ed9f16776f97ab1e44447a2462602b27c46d0d92d,10000000"
