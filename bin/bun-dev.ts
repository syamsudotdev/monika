import { pathToFileURL } from 'bun'
;(async () => {
  console.log('IMPORT META DIR', import.meta.dir)
  const oclif = await import('@oclif/core')
  await oclif.execute({
    type: 'esm',
    development: true,
    // necessary added fake path, '/src' will be ignored
    // as oclif will try to resolves tsconfig.json in root directory by using '../' internally
    dir: pathToFileURL(import.meta.dir + '/src').toString(),
  })
})()
