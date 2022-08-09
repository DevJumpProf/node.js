
export const index = async(req,res)=>{
    try {
        res.render('register',{title:"registro"});
    } catch (error) {
        res.json({message:error.message})
    }
}