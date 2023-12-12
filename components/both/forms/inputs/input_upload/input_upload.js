import { Template }    from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import "./input_upload.html"
import {Images} from "/modules/upload/upload_grid/images.js"

Template.input_upload.onCreated(function () {
    this.currentUpload = new ReactiveVar(false);
    let input_name = Template.currentData().name
    delete Session.keys[input_name + "_file_id"]
});

Template.input_upload.helpers({
    "value": () => {
        console.log(Template.currentData().value)
        return Template.currentData().value
    },
    "img": () => {
        let input_name = Template.currentData().name
        let uploads = Session.get('uploads')
        if(!uploads) return
        let file = _.find(uploads, (u) => {
            console.log(u)
            if(u.input_name === input_name){
                return u
            }
        })
        console.log(file._id)
        if(file._id){
            let img = Images.findOne({_id: file._id })
            console.log(img)
            return img
        }
    },
    currentUpload() {
        return Template.instance().currentUpload.get();
    }
});

Template.input_upload.events({
    'change .file_upload' (event, template) {

        let input_name = Template.currentData().name

        //Se o campo de upload não for o alterado, retorna
        if(input_name !== $(event.target)[0]['id']) return

        if (event.currentTarget.files && event.currentTarget.files[0]) {
            // We upload only one file, in case
            // multiple files were selected
            const upload = Images.insert({
                file: event.currentTarget.files[0],
                chunkSize: 'dynamic'
            }, false);


            upload.on('start', function () {
                template.currentUpload.set(this);
            });

            upload.on('end', function (error, fileObj) {
                if (error) {
                    alert(`Error during upload: ${error}`);
                } else {
                    console.log(fileObj)
                    let uploads = Session.get("uploads")
                    if(!uploads){
                        uploads = [{input_name: input_name, _id: fileObj._id}]
                    } else{
                        uploads.push({input_name: input_name, _id: fileObj._id})
                    }

                    Session.set('uploads', uploads)

                    console.log(`File "${fileObj.name}" successfully uploaded`);
                }
                template.currentUpload.set(false);
            });

            upload.start();
        }
    }
});