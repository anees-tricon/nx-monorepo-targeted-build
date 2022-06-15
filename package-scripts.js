module.exports = {
  scripts: {
    ng: 'nx',
    default: 'nx serve',
    build: 'nx build',
    test: 'nx test',
    product: {
      build: {
        dev: "echo 'Product build dev'",
        uat: "echo 'Product build uat'",
        prod: "echo 'Product build prod'",
        lambda: {
          dev: 'nps product.build.dev product.lambda.dev',
          uat: 'nps product.build.uat product.lambda.uat',
          prod: 'nps product.build.prod product.lambda.prod',
        },
      },
      lambda: {
        dev: "echo 'Product lambda dev'",
        uat: "echo 'Product lambda uat'",
        prod: "echo 'Product lambda prod'",
      },
      deploy: {
        lambda: {
          'u-g': "echo 'Product deploy lambda u-g'",
          'u-b': "echo 'Product deploy lambda u-b'",
          'p-g': "echo 'Product deploy lambda p-g'",
          'p-b': "echo 'Product deploy lambda p-b'",
          'd-b': "echo 'Product deploy lambda d-b'",
        },
        worker: {
          'u-g': "echo 'Product deploy worker u-g'",
          'u-b': "echo 'Product deploy worker u-b'",
          'p-g': "echo 'Product deploy worker p-g'",
          'p-b': "echo 'Product deploy worker p-b'",
          'd-b': "echo 'Product deploy worker d-b'",
        },
      },
    },
  },
};
