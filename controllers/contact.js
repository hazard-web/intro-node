const products = [];

exports.getContactus = (req, res, next) => {
    res.render('contact', {
      pageTitle: 'Contact Us',
      path: '/contactus',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.postContactus = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  };


exports.getSuccess = (req, res, next) => {
    res.render('success', {
      prods: products,
      pageTitle: 'Success',
      path: '/success',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  };