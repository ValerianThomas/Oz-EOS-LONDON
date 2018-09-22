#!/usr/bin/env bash
set -o errexit

# change to script's directory
cd "$(dirname "$0")/eosio_docker"

echo "$(pwd)"

if [ -e "data/initialized" ]
then
    script="./scripts/continue_blockchain.sh"
else
    script="./scripts/init_blockchain.sh"
fi

echo $script

echo "=== run docker container from the eosio/eos-dev image ==="
docker run -it -d --name eosio_container \
-p 8888:8888 -p 9876:9876 \
--mount type=bind,source="$(pwd)"/contracts,target=/opt/eosio/bin/contracts \
--mount type=bind,source="$(pwd)"/scripts,target=/opt/eosio/bin/scripts \
-w "/opt/eosio/bin/" eosio/eos-dev:v1.2.5 /bin/bash

docker attach eosio_container
