import mongoose, {Schema} from "mongoose";

const BlogPostSchema = new Schema(
    {
        title: String,
        description: String,
        datePosted: Date,
        userId: Int
    },
    {
        timestamps: true
    }
);

const BlogPost = mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema)

export default BlogPost