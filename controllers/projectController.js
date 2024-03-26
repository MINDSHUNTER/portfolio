const projectModel=require("../models/projectModel");

exports.createProject = async (req,res)=>{
    try {
        const newProject = new projectModel(req.body)
/***Pour ajouter une image faut inclure ça dans fonction de create project */
        if (req.file) {
            if (req.multerError) {
                throw { errorUpload: "Le fichier n'est pas valide" };
            }
            req.body.image = req.file.filename;
            newProject.image = req.file.filename
        }
        newProject.validateSync()

  /*fin******************************************************************/
        newProject.save()


        res.json("Le projet à bien été créé")

    } catch (error) {
        res.json(error.message)
    }
}

// pour supprimer un projet il faut identifier après delete avec _id

exports.deleteproject= async (req, res) => {
    try {
        await projectModel.deleteOne({ _id: req.params.projectid });
        res.redirect("/dashboard");
    } catch (error) {
        res.render("admin/dashboard.twig");
    }
};

//pour aller chercher le contenu de projet by findByID  et display it 
exports.updateProject = async(req,res)=>{
    try {
        const updateProject = await projectModel.findById(req.params.projectid)
        if(!updateProject){
            throw {error:"projet introuvable"}
        }
        res.render("admin/projectUpdateForm.twig",
       {
        project: updateProject,
       } )
    } catch (error) {
        res.render("admin/dashboard.twig")
    }
}
// pour effectuer un update avec updateOne de mon projet

exports.updatedProject = async(req,res)=>{
    try {
// Pour update l'image;
        if(req.file) {
            if (req.multerError) {
                throw { errorUpload: "Le fichier n'est pas valide" };
            }
            
            // Mettez à jour le nom de l'image dans req.body
            req.body.image = req.file.filename;
            
        }
        
        await projectModel.updateOne({_id: req.params.projectid}, req.body)
        res.redirect("/dashboard")
        
    } catch (error) {
        res.render("admin/dashboard.twig",
        {
            errorDelete:"probleme est survenue"
        }
        )
    }
}