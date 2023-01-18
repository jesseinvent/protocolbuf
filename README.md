## Protocol Buffers

Protocol buffers are representation of structured data.

## Download protoc (Mac)

`$ brew install protobuf@3`

## Compile proto file:

`protoc --js_out=import_style=commonjs,binary:. employee.proto`

## Pros of Protocol Buffers:
- Having a Schema for better structure and optimization.
- Small memory, disk & network footprint.
- Programming Language neutral.

## Cons of Protocol Buffers:
- Hard to maintain.
- Enforcement of a Schema.