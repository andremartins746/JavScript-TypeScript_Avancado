const fs = require('fs').promises
const path = require('path')

async function readdir(rootdir) {
    rootdir = rootdir || path.resolve(__dirname)
    const files = await fs.readdir(rootdir)
    Walker(files,rootdir)
}

async function Walker(files, rootdir) {
    for(let file of files) {
        const filefullpath = path.resolve(rootdir, file)
        const stats = await fs.stat(filefullpath)

        if( stats.isDirectory()) {
            readdir(filefullpath)
            continue
        }

        console.log(file, stats.isDirectory())
    }
}

readdir()