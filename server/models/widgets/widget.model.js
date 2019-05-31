const mongoose= require("mongoose");
const WidgetSchema= require ("./widget.schema");
const WidgetModel= mongoose.model("WidgetModel",WidgetSchema);

//Create Widget
WidgetModel.createWidget={widget}=>{
    return WidgetModel.create(widget)
}
//Find Widget for Page
WidgetModel.findWidgetsForPage=(pid)=>{
    return WidgetModel.find({pageId: pid});
    
}