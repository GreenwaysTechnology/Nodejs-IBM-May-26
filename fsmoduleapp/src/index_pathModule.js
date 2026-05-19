const path = require('node:path')

function main() {
    //path.join helps to build paths
    const mypath = path.join('users', 'subramanian', 'murugan', 'docs', 'info.txt')
    console.log(mypath)

    const absolutePath = path.join(__dirname,'config','config.json')
    console.log(absolutePath)

    //get file only
    const fileName = path.basename(absolutePath)
    console.log(fileName)
    //get directory only
    const dirName = path.dirname(absolutePath)
    console.log(dirName)

   //get the file Extension
    const extension = path.extname(fileName)
    console.log('extension :',extension)

    const pathparts = path.parse(absolutePath)
    console.log('pathparts',pathparts)

    //convert pathparts into path
    const realPath = path.format(pathparts)
    console.log('realPath',realPath)
}
main()