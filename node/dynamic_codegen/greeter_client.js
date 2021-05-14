var PROTO_PATH = __dirname + '/../../protos/helloworld.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  var client = new hello_proto.Greeter('localhost', grpc.credentials.createInsecure());
  const user = 'world';
  t0 = Date.now()
  let r;
  for (let i = 0; i < 100000; i++) {
    r = client.sayHello.requestSerialize({
      name1: user,
      name2: user,
      name3: user,
      x1: 13579,
      x2: 24680,
      x3: 55555,
    })
  }
  console.log(Date.now() - t0)
  console.log(r)
}

main();
