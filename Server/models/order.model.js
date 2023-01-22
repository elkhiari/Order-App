const mongoose = require('mongoose')

const orderschema = new mongoose.Schema({
    OrderName:{
        type        :String                          ,
        required    :[true,'Order Name is require'  ],
        maxlength   :[40  ,'max length is 20 char'  ],
        minlength   :[5   ,'min length is 3 char'   ],
    },
    OrderMarque:{
        type        :String                          ,
        required    :[true,'all order have a marque,require'  ],
        maxlength   :[20  ,'max length is 20 char'   ],
        minlength   :[3   ,'min length is 3 char'    ],
    }
    ,
    OrderPrice:{
        type        :Number,
        required    :[true,'Price is require'        ],
    }
    ,
    OrderPicture:{
        type        :String,
        required    :[true,'upload ur image please'  ],
    }
    ,
    OrderType:{
        type        :String,
        required    :[true,'type is required'  ],
    }
    ,
    orderDetails:{
        type        :String,
        required    :[true,'Details is require'],
        maxlength   :[410  ,'max length is 20 char'   ]
    }
    ,
    OrderLike:{
        type        :Number,
        default     :0
    },
    UploadDate:{
        type        :Date,
        default     :Date.now
    }
    ,
    OrderComplete:{
        type        :Boolean,
        default     :0
    }
})

module.exports = mongoose.model('order',orderschema)