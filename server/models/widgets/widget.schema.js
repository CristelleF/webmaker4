const mongoose=require("mongoose");

consy WidgetSchema= mongoose.Schema(
    {
        pageId:{type: mongoose.Schema.Types.ObjectId, ref: "PageModel"},
        widgetType:{type:String, enum:["HEADING", "IMAGE", "YOUTUBE"]},
        name:
        
    }
)