module.exports = {
  extends: [
    'tslint-eslint-rules'
  ],
  rules: {

    /**
     * ES6
     */
    'ter-arrow-body-style'            : [true, 'always'],
    'ter-arrow-parens'                : [true, 'always'],
    'ter-arrow-spacing'               : true,
    'no-var-keyword'                  : true,

    /**
     * Variables
     */
    'no-shadowed-variable'            : true,
    'no-use-before-declare'           : true,

    /**
     * Possible errors
     */
    'trailing-comma'                  : [true, {'multiline': 'always'}],
    'no-conditional-assignment'       : true,
    'no-console'                      : true,
    'no-debugger'                     : true,
    'ban'                             : [true, ['alert']],
    'no-constant-condition'           : true,
    'no-duplicate-case'               : true,
    'no-empty'                        : true,
    'no-ex-assign'                    : true,
    'no-extra-boolean-cast'           : true,
    'no-extra-semi'                   : true,
    'no-inner-declarations'           : true,
    'no-invalid-regexp'               : true,
    'no-irregular-whitespace'         : true,
    'ter-no-sparse-arrays'            : true,
    'use-isnan'                       : true,
    'no-unnecessary-initializer'      : true,

    /**
     * Best practices
     */
    'curly'                           : true,
    'switch-default'                  : true,
    'triple-equals'                   : true,
    'ter-indent'                      : [true, 2, {
      'SwitchCase': 1,
    }],
    'forin'                           : true,
    'no-arg'                          : true,
    'no-eval'                         : true,
    'no-switch-case-fall-through'     : true,
    'label-position'                  : true,
    'no-unused-expression'            : true,
    'no-construct'                    : true,
    'no-duplicate-variable'           : [true, 'check-parameters'],
    'no-string-throw'                 : true,
    'radix'                           : true,
    'new-parens'                      : true,

    /**
     * Style
     */
    'brace-style'                     : [
      true,
      '1tbs',
      {
        'allowSingleLine' : true,
      },
    ],
    'quotemark'                       : [true, 'single', 'jsx-double'],
    'variable-name'                   : [true, 'check-format', 'allow-pascal-case', 'ban-keywords'],
    'eofline'                         : true,
    'no-consecutive-blank-lines'      : [true, 2],
    'no-trailing-whitespace'          : true,
    'one-variable-per-declaration'    : true,
    'semicolon'                       : [true, 'always'],
    'comment-format'                  : [true],
    'object-literal-key-quotes'       : [ true, 'as-needed' ],
    'object-literal-shorthand'        : true,
    'object-literal-sort-keys'        : true,
    'one-line'                        : [ true, 'check-catch', 'check-finally', 'check-else' ],
    'ordered-imports'                 : true,
    'prefer-method-signature'         : true,
    'no-unnecessary-qualifier'        : true,
    'number-literal-format'           : true,
  },
};
