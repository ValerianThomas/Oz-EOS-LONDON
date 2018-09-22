import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import settings from "./settings";

export default async function findByUserAndClient(user, client){
	const eos = Eos({httpEndpoint: settings.httpEndpoint});
	let intermediates = await eos.getTableRows({
            "json": true,
            "code": settings.contractAccount,
            "scope": settings.contractAccount,
            "table": "thrust",
            "limit": 100,
            "index_postion": 1,
            "key_type": "name",
            "table_key": user,
	})
      console.log("here", intermediates);
      let ret = [];
      for (var i = 0; i < intermediates.rows.length; i++) {
            console.log(intermediates.rows[i].client, client);
            if(intermediates.rows[i].client === client){
                  ret.push(intermediates.rows[i]);
            }
      }
	return ret;
}