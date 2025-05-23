const ErrorHandler = require("../utils/errorHandler");

const Blog = require("../models/blogModel");

const postProperty = async (req, res, next) => {
  try {
    const author = req.user.id;
    const blogData = {
      tags: [...req.body.tags],
      ...req.body,
      author,
    };
    await Blog.create(blogData);
    res.status(200).json({
      success: true,
      message: "Blog Posted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const getSingleProperty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (blog) {
      res.status(200).json({
        success: true,
        blog,
      });
    }
    res.status(404).json({
      success: false,
      message: "Blog Not Found",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const getProperties = async (req, res, next) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const deleteProperty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const deleteAmenities = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const updateAmenities = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const deleteOffer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const updateOffer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const deleteTransport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const updateTransport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const updateOffice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const deleteOffice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const postOffice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBlogData = {
      ...req.body,
    };
    const blog = await Blog.findByIdAndUpdate(id, newBlogData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Blog Updated Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const updateProperty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBlogData = {
      ...req.body,
    };
    const blog = await Blog.findByIdAndUpdate(id, newBlogData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Blog Updated Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

module.exports = {
  postBlog,
  getSingleBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
};
