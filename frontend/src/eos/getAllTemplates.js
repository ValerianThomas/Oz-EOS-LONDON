import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import settings from "./settings";

export default async function findByUserAndClient(){
	const eos = Eos({httpEndpoint: settings.httpEndpoint});
	let ret = await eos.getTableRows({
            "json": true,
            "code": settings.contractAccount,
            "scope": settings.contractAccount,
            "table": "templtable",
            "limit": 1000,
	})
	return ret;
}