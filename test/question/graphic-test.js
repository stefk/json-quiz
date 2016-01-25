var assert = require('./../../assert')('graphic-question');

describe('Graphic question', function () {
  describe('Schema', function () {

    describe('A graphic question', function () {
      it('must satisfy the #base-question# schema', function () {
        assert.hasErrors('graphic-not-satisfying-base-schema', {
          '.id': 'property .id is required',
          '.type': 'property .type is required',
          '.title': 'property .title is required',
          '.meta': 'should be object',
          '.objects': 'should be array'
        });
      });

      it('must have a *width* property', function () {
        assert.hasError('graphic-no-width', {
          '.width': 'property .width is required'
        });
      });
      it('must have a *height* property', function () {
        assert.hasError('graphic-no-height', {
          '.height': 'property .height is required'
        });
      });

      it('must have a *coords* property', function () {
        assert.hasError('graphic-no-coords', {
          '.coords': 'property .coords is required'
        });
      });

      it('must have a *document* property', function () {
        assert.hasError('graphic-no-document', {
          '.document': 'property .document is required'
        });
      });

      it('may have a *solutions* property', function () {
        assert.isValid('graphic-solutions');
      });
    });

    describe('The *document* property', function () {
      it('must be an object', function () {
        assert.hasError('graphic-document-is-not-an-object', {
          '.document': 'should be object'
        });
      });

      it('must have an *id* property', function () {
        assert.hasError('graphic-document-without-id', {
          '.document.id': 'property .id is required'
        });
      });

      it('must have an *url* property', function () {
        assert.hasError('graphic-document-without-url', {
          '.document.url': 'property .url is required'
        });
      });
    });

    describe('The *coords* property', function () {
      it('must be an array', function () {
        assert.hasError('graphic-coords-is-not-an-array', {
          '.coords': 'should be array'
        });
      });

      it('must contain at least one coord id', function () {
        assert.hasError('graphic-coords-empty', {
          '.coords': 'should NOT have less than 1 items'
        });
      });

      describe('Each coords', function () {
        it('must satisfy the #content# schema', function () {
          assert.hasErrors('graphic-coords-not-satisfying-content-schema', {
            '.coords[0].id': 'should be string',
            '.coords[1].id': 'property .id is required'
          });
        });

        it('must be unique', function () {
          assert.hasError('graphic-duplicate-coords', {
            '.coords': 'items ## 0 and 1 are duplicate'
          });
        });
      });

    });

    describe('the *solutions* property', function () {
      it('must be an array', function () {
        assert.hasError('graphic-solutions-is-not-an-array', {
          '.solutions': 'should be array'
        });
      });

      it('must contain at least one solution', function () {
        assert.hasError('graphic-under-one-solution', {
          '.solutions': 'should NOT have less than 1 items'
        });
      });

      describe('Each solution', function () {
        it('must be an object', function () {
          assert.hasError('graphic-solution-is-not-an-object', {
            '.solutions[0]': 'should be object'
          });
        });

        it('must be unique', function () {
          assert.hasError('graphic-duplicate-solutions', {
            '.solutions': 'items ## 0 and 1 are duplicate'
          });
        });

        it('must have an *id* property', function () {
          assert.hasError('graphic-solution-has-no-id', {
            '.solutions[0].id': 'property .id is required'
          });
        });

        it('must have a *score* property', function () {
          assert.hasError('graphic-solution-no-score', {
            '.solutions[0].score': 'property .score is required'
          });
        });

        it('must have a *value* property', function () {
          assert.hasError('graphic-solution-no-value', {
            '.solutions[0].value': 'property .value is required'
          });
        });

        it('must have a *shape* property', function () {
          assert.hasError('graphic-solution-no-shape', {
            '.solutions[0].shape': 'property .shape is required'
          });
        });

        it('must have a *size* property', function () {
          assert.hasError('graphic-solution-no-size', {
            '.solutions[0].size': 'property .size is required'
          });
        });
      });

      describe('The *id* property', function () {
        it('must be a string', function () {
          assert.hasError('graphic-solution-id-is-not-a-string', {
            '.solutions[0].id': 'should be string'
          });
        });
      });

      describe('The *score* property', function () {
        it('must be a number', function () {
          assert.hasError('graphic-solution-score-is-not-a-number', {
            '.solutions[0].score': 'should be number'
          });
        });
      });

      describe('The *feedback* property', function () {
        it('must be a string', function () {
          assert.hasError('graphic-solution-feedback-is-not-a-string', {
            '.solutions[0].feedback': 'should be string'
          });
        });
      });

      describe('The *value* property', function () {
        it('must be a string', function () {
          assert.hasError('graphic-solution-value-is-not-a-string', {
            '.solutions[0].value': 'should be string'
          });
        });
      });

      describe('The *shape* property', function () {
        it('must be a string', function () {
          assert.hasError('graphic-solution-shape-is-not-a-string', {
            '.solutions[0].shape': 'should be string'
          });
        });
      });

      describe('The *size* property', function () {
        it('must be a number', function () {
          assert.hasError('graphic-solution-size-is-not-a-number', {
            '.solutions[0].size': 'should be number'
          });
        });
      });
    });
  });

  describe('Examples', function () {
    assert.areValid([
      'graphic-extended',
      'graphic-simple',
      'graphic-solutions',
      'graphic-with-meta'
    ]);
  });
});
