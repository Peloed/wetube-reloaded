export const trending = (req, res) => {
    res.render("home");
};
export const seeVideo = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const serch = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => res.send("delete video");


