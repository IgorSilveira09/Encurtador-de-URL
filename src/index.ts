import express from 'express' 

const api = express ()

api.use('/teste', (req: Request, res: Response) =>{
res.json({success:true})
})
api.listen(5000, () => console.log('Listening'))