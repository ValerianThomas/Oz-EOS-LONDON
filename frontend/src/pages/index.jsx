import React, { Component } from 'react';
import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs

// NEVER store private keys in any source code in your real life development
// This is for demo purposes only!
const accounts = [
  {"name":"useraaaaaaaa", "privateKey":"5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5", "publicKey":"EOS6kYgMTCh1iqpq9XGNQbEi8Q6k5GujefN9DSs55dcjVyFAq7B6b"},
  {"name":"useraaaaaaab", "privateKey":"5KLqT1UFxVnKRWkjvhFur4sECrPhciuUqsYRihc1p9rxhXQMZBg", "publicKey":"EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p"},
  {"name":"useraaaaaaac", "privateKey":"5K2jun7wohStgiCDSDYjk3eteRH1KaxUQsZTEmTGPH4GS9vVFb7", "publicKey":"EOS5yd9aufDv7MqMquGcQdD6Bfmv6umqSuh9ru3kheDBqbi6vtJ58"},
  {"name":"useraaaaaaad", "privateKey":"5KNm1BgaopP9n5NqJDo9rbr49zJFWJTMJheLoLM5b7gjdhqAwCx", "publicKey":"EOS8LoJJUU3dhiFyJ5HmsMiAuNLGc6HMkxF4Etx6pxLRG7FU89x6X"},
  {"name":"useraaaaaaae", "privateKey":"5KE2UNPCZX5QepKcLpLXVCLdAw7dBfJFJnuCHhXUf61hPRMtUZg", "publicKey":"EOS7XPiPuL3jbgpfS3FFmjtXK62Th9n2WZdvJb6XLygAghfx1W7Nb"},
  {"name":"useraaaaaaaf", "privateKey":"5KaqYiQzKsXXXxVvrG8Q3ECZdQAj2hNcvCgGEubRvvq7CU3LySK", "publicKey":"EOS5btzHW33f9zbhkwjJTYsoyRzXUNstx1Da9X2nTzk8BQztxoP3H"},
  {"name":"useraaaaaaag", "privateKey":"5KFyaxQW8L6uXFB6wSgC44EsAbzC7ideyhhQ68tiYfdKQp69xKo", "publicKey":"EOS8Du668rSVDE3KkmhwKkmAyxdBd73B51FKE7SjkKe5YERBULMrw"}
];

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
