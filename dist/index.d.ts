import { BrotliOptions } from 'zlib'
declare module 'compress-brotli'

type Serialize = (source: any) => string
type Deserialize = (source: string) => any

type CreateCompressOptions = {
  enable?: boolean,
  serialize?: Serialize,
  deserialize?: Deserialize,
  iltorb?: any,
  compressOptions?: BrotliOptions,
  decompressOptions?: BrotliOptions
}

type CreateCompressInterface = {
  serialize: Serialize,
  deserialize: Deserialize,
  compress: (data: any, options?: BrotliOptions) => Promise<any>
  decompress: (data: any, options?: BrotliOptions) => Promise<any>
}
declare function createCompress(options: CreateCompressOptions): CreateCompressInterface

declare namespace createCompress {
  const stringify: Serialize
  const parse: Deserialize
}
