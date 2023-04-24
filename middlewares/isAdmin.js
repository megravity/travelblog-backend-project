import CommentCollection from "../models/commentSchema.js";

export const isAdmin = async (req, res, next) => {
    if (req.user.role === "admin") {
        next();
    }

    // if (req.baseUrl === "/articles") {
    //     res.status(403).json({ success: false, data: "Not authorized" });
    // }

    const { id } = req.params;
    try {
        const comment = await CommentCollection.findById(id);
        if (comment) {
            console.log(comment.user);
            const verified =
                comment.user.toString() === req.user._id.toString();
            if (verified) {
                next();
            } else {
                res.status(403).json({
                    success: false,
                    data: "You're not allowed to access this comment",
                });
            }
        }
    } catch (err) {
        res.json({ success: false, data: err.message });
    }
};
