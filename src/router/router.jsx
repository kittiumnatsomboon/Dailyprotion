const { Children } = require("react");

const router = [
    {
        path:"/" , element:"navbar",
        children:[
            {index:true,element:"home"}
        ]
    }
]