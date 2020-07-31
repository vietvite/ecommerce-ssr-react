const mongoose = require('mongoose')
const slugify = require('../common/utils')
const shortid = require('shortid')

const schemaOptions = {
  timestamps: true,
}

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Vui lòng nhập tiêu dề sản phẩm.']
  },
  slug: {
    type: String,
    // required: true,
    // unique: true,
    // index: true,
  },
  price: {
    type: Number,
    min: [0, 'Giá phải lớn hơn 0.']
  },
  salePercent: {
    type: Number,
    default: 0,
    min: 0,
    max: 1
  },
  description: String,
  stock: {
    type: Number,
    min: [0, 'Số lượng hàng trong kho phải lớn hơn 0.']
  },
  imageUrl: String,
  // category: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: 'category'
  // },
  // seller: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: 'seller'
  // },
  reviewStar: {
    _1star: {
      type: Number,
      default: 0
    },
    _2star: {
      type: Number,
      default: 0
    },
    _3star: {
      type: Number,
      default: 0
    },
    _4star: {
      type: Number,
      default: 0
    },
    _5star: {
      type: Number,
      default: 0
    },
  }
}, schemaOptions)

const productModel = mongoose.model('product', productSchema)

class Product {
  static async feed() {
    return await productModel.find()
  }

  static async addOne(product) {
    console.log(product);

    const newProduct = new productModel({
      ...product,
      slug: `${slugify(title)}-${shortid.generate()}`
    })
    console.log(newProduct);

    return await newProduct.save()
  }
}

module.exports = Product

// {
//   "title": "asd",
//   "price": 100,
//   "salePercent": 0,
//   "inventory": 50,
//   "rateStar": {
//     "_1star": 0,
//     "_2star": 0,
//     "_3star": 0,
//     "_4star": 0,
//     "_5star": 0
//   }
// }