var messages = require('./helloworld_pb');
var services = require('./helloworld_grpc_pb');

var grpc = require('@grpc/grpc-js');

function main() {
  const t0 = Date.now()
  let r;
  const user = 'world';
  for (let i = 0; i < 100000; i++) {
    var request = new messages.HelloRequest();
    request.setName1(user)
    request.setName2(user)
    request.setName3(user)
    request.setX1(13579)
    request.setX2(24680)
    request.setX3(55555)
    r = Buffer.from(request.serializeBinary())
  }
  t1 = Date.now()
  console.log(t1-t0)
  console.log(r)
}

main();
