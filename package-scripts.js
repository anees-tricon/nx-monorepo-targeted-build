module.exports = {
  scripts: {
    ng: 'nx',
    default: 'nx serve',
    build: 'nx build',
    test: 'nx test',
    product: {
      build: {
        uat: "echo 'Product build uat'",
        lambda: {
          uat: 'nps product.build.uat product.lambda.uat',
          prod: 'nps product.build.prod product.lambda.prod',
        },
        prod: "echo 'Product build prod'",
      },
      lambda: {
        uat: "echo 'Product lambda uat'",
        prod: "echo 'Product lambda prod'",
      },
      deploy: {
        lambda: {
          'u-g': "echo 'Product deploy lambda u-g'",
          'u-b': "echo 'Product deploy lambda u-b'",
          'p-g': "echo 'Product deploy lambda p-g'",
          'p-b': "echo 'Product deploy lambda p-b'",
        },
        worker: {
          'u-g': "echo 'Product deploy worker u-g'",
          'u-b': "echo 'Product deploy worker u-b'",
          'p-g': "echo 'Product deploy worker p-g'",
          'p-b': "echo '${TEST_ENV} Product deploy worker p-b'",
        },
      },
    },
  },
};
