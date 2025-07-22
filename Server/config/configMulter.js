import multer from 'multer'


const Storage=multer.diskStorage({})

const upload=multer({storage:multer.diskStorage({})})

export default Storage