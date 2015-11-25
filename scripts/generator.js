var data = [
  "/get_started",
  "/tutorials",
  "/how_tos",
  "/api_docs",
  "/get_started/os_setup.md",
  "/get_started/basic_usage.md",
  "/tutorials/mnist/beginners/index.md",
  "/tutorials/mnist/pros/index.md",
  "/tutorials/mnist/tf/index.md",
  "/tutorials/deep_cnn/index.md",
  "/tutorials/word2vec/index.md",
  "/tutorials/recurrent/index.md",
  "/tutorials/seq2seq/index.md",
  "/tutorials/mandelbrot/index.md",
  "/tutorials/pdes/index.md",
  "/tutorials/mnist/download/index.md",
  "/how_tos/variables/index.md",
  "/how_tos/summaries_and_tensorboard/index.md",
  "/how_tos/graph_viz/index.md",
  "/how_tos/reading_data/index.md",
  "/how_tos/threading_and_queues/index.md",
  "/how_tos/adding_an_op/index.md",
  "/how_tos/new_data_formats/index.md",
  "/how_tos/using_gpu/index.md",
  "/how_tos/variable_scope/index.md",
  "/api_docs/python/index.md",
  "/api_docs/python/control_flow_ops.md",
  "/api_docs/python/train.md",
  "/api_docs/python/framework.md",
  "/api_docs/python/client.md",
  "/api_docs/python/sparse_ops.md",
  "/api_docs/python/constant_op.md",
  "/api_docs/python/image.md",
  "/api_docs/python/io_ops.md",
  "/api_docs/python/python_io.md",
  "/api_docs/python/array_ops.md",
  "/api_docs/python/state_ops.md",
  "/api_docs/python/nn.md",
  "/api_docs/python/math_ops.md",
  "/api_docs/cc/index.md",
  "/api_docs/cc/ClassRandomAccessFile.md",
  "/api_docs/cc/ClassThread.md",
  "/api_docs/cc/ClassWritableFile.md",
  "/api_docs/cc/StructThreadOptions.md",
  "/api_docs/cc/ClassSession.md",
  "/api_docs/cc/ClassTensorShapeUtils.md",
  "/api_docs/cc/ClassTensorShape.md",
  "/api_docs/cc/ClassTensorBuffer.md",
  "/api_docs/cc/ClassEnvWrapper.md",
  "/api_docs/cc/StructState.md",
  "/api_docs/cc/ClassTensorShapeIter.md",
  "/api_docs/cc/ClassEnv.md",
  "/api_docs/cc/ClassStatus.md",
  "/api_docs/cc/ClassTensor.md",
  "/api_docs/cc/StructTensorShapeDim.md",
  "/api_docs/cc/StructSessionOptions.md"
]

var fs = require("fs");
var mkdirp = require('mkdirp');

for (var i =0, l=data.length; i<l; i++) {
  var d = data[i];
  makeFile(d);
}


function makeFile(url) {
  var path = url.replace(/^\//,'').split('/');
  // console.log(path);
  var leaf = path.pop();
  
  var dname = '', fname = leaf.replace(/\.md$/, '') + '.txt';
  
  if(path.length != 0) {
    dname = path.join('/');
    fname = dname + '/' + fname;
    mkdirp.sync(dname);    
  }

  fs.writeFileSync(fname, 'http://www.tensorflow.org' + url);
}