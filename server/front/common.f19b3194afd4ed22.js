"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[592],{7085:(h,_,a)=>{a.d(_,{F:()=>p});var n=a(9401),d=a(4755),i=a(4360),s=a(8279),m=a(3205),e=a(2223),c=a(8784),l=a(4859);let p=(()=>{class t{constructor(o){this._store=o}ngOnInit(){this._initForm()}_initForm(){this.editForm=new n.cw(this.product?{name:new n.NI(this.product.name,[n.kI.required]),description:new n.NI(this.product.description),price:new n.NI(this.product.price,[n.kI.required]),image:new n.NI(this.product.image)}:{name:new n.NI("",[n.kI.required]),description:new n.NI(""),price:new n.NI("",[n.kI.required]),image:new n.NI("")})}submitForm(){if(!this.editForm.invalid)if(this.product){const o={...this.product,name:this.editForm.value.name,description:this.editForm.value.description,price:this.editForm.value.price,image:this.editForm.value.image};this._store.dispatch((0,s.zQ)({data:o}))}else this._store.dispatch((0,s.ry)({data:{name:this.editForm.value.name,description:this.editForm.value.description,price:this.editForm.value.price,image:this.editForm.value.image}}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit"]],inputs:{product:"product"},standalone:!0,features:[e.jDz],decls:7,vars:10,consts:[[3,"formGroup","ngSubmit"],["formControlName","name",3,"value","label"],["formControlName","description",3,"value","label"],["formControlName","image",3,"value","label"],["formControlName","price",3,"value","label"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(o,u){1&o&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return u.submitForm()}),e._UZ(1,"app-text-input",1)(2,"app-text-input",2)(3,"app-text-input",3)(4,"app-text-input",4),e.TgZ(5,"button",5),e._uU(6,"Submit changes"),e.qZA()()),2&o&&(e.Q6J("formGroup",u.editForm),e.xp6(1),e.Q6J("value",u.editForm.value.name)("label","Name"),e.xp6(1),e.Q6J("value",u.editForm.value.description)("label","Description"),e.xp6(1),e.Q6J("value",u.editForm.value.image)("label","Image"),e.xp6(1),e.Q6J("value",u.editForm.value.price)("label","Price"),e.xp6(1),e.Q6J("disabled",u.editForm.invalid))},dependencies:[i.m,l.lW,n._Y,n.JJ,n.JL,n.sg,n.u,d.ez,m.t],styles:["form[_ngcontent-%COMP%]{padding:10px}"],changeDetection:0}),t})()},3205:(h,_,a)=>{a.d(_,{t:()=>c});var n=a(4755),d=a(4360),i=a(2223),s=a(9401),m=a(9549),e=a(4144);let c=(()=>{class l{constructor(t,r){this.ngControl=t,this.changeDetector=r,this.type="text",this.onChange=o=>{},t&&(this.ngControl.valueAccessor=this)}onEditorValueChange(t){this.onChange(t.target.value)}writeValue(t){this.value=t,this.changeDetector.detectChanges()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}validate(t){return this.value?null:{required:!0}}}return l.\u0275fac=function(t){return new(t||l)(i.Y36(s.a5,10),i.Y36(i.sBO))},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-text-input"]],inputs:{label:"label",type:"type",value:"value",error:"error"},standalone:!0,features:[i.jDz],decls:4,vars:3,consts:[[1,"field-container"],["matInput","","contenteditable","",3,"type","value","keyup"]],template:function(t,r){1&t&&(i.TgZ(0,"mat-form-field",0)(1,"mat-label"),i._uU(2),i.qZA(),i.TgZ(3,"input",1),i.NdJ("keyup",function(u){return r.onEditorValueChange(u)}),i.qZA()()),2&t&&(i.xp6(2),i.Oqu(r.label),i.xp6(1),i.Q6J("type",r.type)("value",r.value))},dependencies:[d.m,m.KE,m.hX,e.Nt,n.ez],styles:[".field-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}"],changeDetection:0}),l})()}}]);