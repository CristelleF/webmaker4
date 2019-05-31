const mongoose= require("mongoose");
const WidgetSchema= require ("./widget.schema");
const WidgetModel= mongoose.model("WidgetModel",WidgetSchema);

//Create Widget
WidgetModel.createWidget=(widget)=>{
    return WidgetModel.create(widget);
}

//Find Widget for Page
WidgetModel.findWidgetsForPage=(pid)=>{
    return WidgetModel.find({pageId: pid});  
}

//Find widget by its Id
WidgetModel.findWidget=(pid)=>{
    return WidgetModel.findById(wgid);
}

//Delete widget
WidgetModel.deleteWidget=(wgid)=>{
    return WidgetModel.deleteOne({_id: wgid});
}

//Update
WidgetModel.updateWidget=(widget)=>{
    return WidgetModel.updateOne({_id:widget._id}, widget);
}

module.export=WidgetModel;