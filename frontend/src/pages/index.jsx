import React, { Component } from 'react';
import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs



// Index component
class Index extends Component {

  async componentDidMount(){
    await this.call()
  }

  async call(){
    // eosjs function call: connect to the blockchain
    const eos = Eos({keyProvider: "5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5", httpEndpoint: 'http://192.168.99.100:8888'});
    const result = await eos.transaction({
      actions: [{
        account: "noteacc",
        name: "settemplate",
        authorization: [{
          actor: "useraaaaaaaa",
          permission: 'active',
        }],
        data: {
          _client: "useraaaaaaaa",
          _permissions: [
            {
              name: "finance", description: "desc", permissions: [
                {
                  name: "hello",
                  description: "yololo",
                  state: 0,
                },
                {
                  name: "hello2",
                  description: "yololoaaaa",
                  state: 0,
                }
              ]
            }
          ]
        },
      }],
    });

    console.log(result);
    
    const eos2 = Eos({keyProvider: "5KE2UNPCZX5QepKcLpLXVCLdAw7dBfJFJnuCHhXUf61hPRMtUZg", httpEndpoint: 'http://192.168.99.100:8888'});
    const result2 = await eos2.transaction({
      actions: [{
        account: "noteacc",
        name: "setperms",
        authorization: [{
          actor: "useraaaaaaae",
          permission: 'active',
        }],
        data: {
          _user: "useraaaaaaae",
          _client: "useraaaaaaaa",
          _permissions: [
            {
              name: "finance", description: "desc", permissions: [
                {
                  name: "hello",
                  description: "yololo",
                  state: 1,
                },
                {
                  name: "hello2",
                  description: "yololoaaaa",
                  state: 0,
                }
              ]
            }
          ]
        },
      }],
    });

    console.log(result2);

    this.getTable();
  }

  getTable() {
    const eos = Eos({httpEndpoint: 'http://192.168.99.100:8888'});
    eos.getTableRows({
      "json": true,
      "code": "noteacc",   // contract who owns the table
      "scope": "noteacc",  // scope of the table
      "table": "templ",    // name of the table as specified by the contract abi
      "limit": 100,
    }).then(result => { console.log("templates", result) });

    eos.getTableRows({
      "json": true,
      "code": "noteacc",   // contract who owns the table
      "scope": "noteacc",  // scope of the table
      "table": "thrust",    // name of the table as specified by the contract abi
      "limit": 100,
    }).then(result => { console.log("thrust", result) })
  }

  render() {

    return (
      <div>
        <p>hello</p>
      </div>
    );
  }

}

export default Index;
