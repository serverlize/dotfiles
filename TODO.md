- Create sample Serverlize projects using Serverless Components
- Add abstractions for AWS-SDK to `@serverlize/serverless` - do something very similar to what Serverless does with regards to wrapping the SDK

- Use the right tokens, Luke:
  - Travis CI `GH_TOKEN` should use ServerlizeBot
  - Travis CI `NPM_TOKEN` should use ServerlizeBot

- Create the following middleware:
  - `@serverlize/dynamodb-stream-unmarshaller`
  - `@serverlize/model-validator`

- Integrate `class-validator` for validation

- Create `dotfiles` repository for all shareable configs:
  - TSLint
  - Prettier
  - NpmPackageJsonLint
  - Commitlint
  - Semantic Release

- Add documentation for:
  - Validation
  - Commands
  - Testing
    - Unit
    - Integration
  - Lambda
    - Parameter Store
    - Global middleware
    - Binaries
    - Performance
      - Warming
      - X-ray

https://github.com/kulshekhar/ts-jest/wiki/Troubleshooting#typescript-paths-module-resolution-and-jest-modulenamemapper
https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/
https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript
https://github.com/atlassian/lerna-semantic-release

- Create a `Function` class for Lambdas:
```typescript
abstract class Lambda {
  
  public readonly name: string = 'killAllGrannies';
  public readonly sources: EventSource = {};
  
  protected middleware: Middleware[];
 
  before() {
    
  }
  
  after() {
    
  }
  
  onError() {
    
  }
  
  handler(event) => {
    
  }
}
```
